let connectedWallets = new Set();
let walletToSignedMessage = new Map();

const addLinksOption = async () => {
    let userAddress = await signer.getAddress();
    if (!connectedWallets.has(userAddress)) {
        connectedWallets.add(userAddress);
        if ($("#discord-popup").length) {
            $("#new-links").append(`<div class="link-entry">
            <div>
                ${userAddress.substr(0, 7)}..
            </div>
            <div>
                <input class="label-input" id="label-${userAddress}" placeholder="Label">
            </div>
            <div>
                ${walletToSignedMessage.has(userAddress) ? `<button id="sign-button-${userAddress}" class="button disabled">SIGNED!</button>` : `<button id="sign-button-${userAddress}" class="button" onclick="signLinkMessage('${userAddress}')">SIGN</button>`}
            </div>
        </div>`);
        }
    }
}

const signLinkMessage = async (address) => {
    let currentAddress = await getAddress();
    if (address != currentAddress) {
        await displayErrorMessage(`Error: Switch to this wallet to sign for it!`)
    }
    else {
        let signedMessage = await signer.signMessage(ethers.utils.arrayify(ethers.utils.id("VOVI Linked Wallet")))
        walletToSignedMessage.set(address, signedMessage);
        if (walletToSignedMessage.has(address)) {
            $(`#sign-button-${address}`).addClass("disabled");
            $(`#sign-button-${address}`).html("SIGNED!");
        }
    }
}

const setLinks = async () => {
    let walletLinks = [];
    for (wallet of connectedWallets) {
        if ($(`#label-${wallet}`).val() == "") {
            await displayErrorMessage("Error: You must label all wallets!");
            return;
        }
        else if (!walletToSignedMessage.has(wallet)) {
            await displayErrorMessage("Error: You must sign on all wallets!");
            return;
        }
        else {
            walletLinks.push({
                "walletAddress": wallet,
                "label": $(`#label-${wallet}`).val(),
                "signedMessage": walletToSignedMessage.get(wallet)
            });
        }
    }


    let data = {
        "wallets": walletLinks
    }

    console.log(data)

    let response = await fetch("https://vv-coupons-front-api-uqnd7.ondigitalocean.app/wallets/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (response.status == 200 || response.status == 204) {
        await displayStatusMessage("Links updated successfully!");
        $('#discord-popup').remove();
        $('#block-screen-discord').remove();
    }
    else if (response.status > 399) {
        await displayErrorMessage(`Error: Wallet linking ran into an issue. (Code: ${response.status})`)
    }
}

const openLinksPrompt = async () => {
    if (!($("#discord-popup").length)) {
        let userAddress = await signer.getAddress();
        let response = await fetch(`https://vv-coupons-front-api-uqnd7.ondigitalocean.app/wallets?walletAddress=${userAddress}`).then(res => res.json());
        let currentlinks = [];
        if (response["wallets"]) {
            for (entry of response["wallets"]) {
                currentlinks.push(`${entry["label"]}: ${entry["walletAddress"].substr(0, 7)}..`);
            }
        }

        let newLinksJSX = "";
        for (wallet of Array.from(connectedWallets)) {
            newLinksJSX += `<div class="link-entry">
                                    <div>
                                        ${wallet.substr(0, 7)}..
                                    </div>
                                    <div>
                                        <input class="label-input" id="label-${userAddress}" placeholder="Label">
                                    </div>
                                    <div>
                                        ${walletToSignedMessage.has(wallet) ? `<button id="sign-button-${userAddress}" class="button disabled">SIGNED!</button>` : `<button id="sign-button-${userAddress}" class="button" onclick="signLinkMessage('${userAddress}')">SIGN</button>`}
                                    </div>
                                </div>`;
        }
        let fakeJSX = `<div id="discord-popup">
                        <div class="popup-wrapper">
                            <svg id="close" onclick="$('#block-screen-discord').remove();$('#discord-popup').remove();" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path fill="black"
                            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                            </svg>
                            <div id="content">
                                <p>To link wallets, switch to each one you want to link and connect. Assign a label and sign a message with each one to verify ownership, then click "SET LINKS" to complete linking. </p>
                                <div id="links-view">
                                    <button id="new-links-button" class="button active" onclick="showNewLinks()">SET NEW</button>
                                    <button id="current-links-button" class="button" onclick="showCurrentLinks()">CURRENT</button>
                                </div>
                                <br>
                                <div id="new-links">${newLinksJSX}</div>
                                <p id="current-links" class="hidden">${(currentlinks != []) ? currentlinks.join("<br><br>") : "No current links"}</p>
                                <button class="button" id="set-link-button" onclick="setLinks()">SET LINKS</button>
                            </div>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
    }
}

function showNewLinks() {
    $('#current-links').addClass('hidden');
    $('#new-links').removeClass('hidden');
    $("#new-links-button").addClass("active");
    $("#current-links-button").removeClass("active");
    $("#set-link-button").removeClass("hidden");
}

function showCurrentLinks() {
    $('#current-links').removeClass('hidden');
    $('#new-links').addClass('hidden');
    $("#new-links-button").removeClass("active");
    $("#current-links-button").addClass("active");
    $("#set-link-button").addClass("hidden");
}