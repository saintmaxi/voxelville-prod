// a saintmaxi joint
// onChainDiscordDirectory created by @0xInuarashi

if (checkDarkModeOn()) {
    applyDarkMode(true);
}

function toggleDarkMode() {
    let darkModeOn = localStorage.getItem("darkMode");
    if (darkModeOn == "true") {
        localStorage.setItem("darkMode", "false");
        applyDarkMode(false);
    }
    else {
        localStorage.setItem("darkMode", "true");
        applyDarkMode(true);
    }
}

function checkDarkModeOn() {
    let darkModeOn = localStorage.getItem("darkMode");
    return darkModeOn == "true";
}

function applyDarkMode(turnOn) {
    if (turnOn) {
        $("#dark-mode-toggle").attr("src", "/images/sun-solid.svg");
        $("#dark-mode-toggle-mobile").attr("src", "/images/sun-solid.svg");
        $(".twitter img").attr("src", "/images/twitter-black.png");
        $(".opensea img").attr("src", "/images/os-white.png");
        $(".discord img").attr("src", "/images/dc-white.png");
        $(".etherscan img").attr("src", "/images/etherscan-white.png");
        $(".down-arrow").attr("src", "/images/down-arrow-white.png");
        $(".body").addClass("dark");
        $("#roadmap").addClass("dark");
        $("#navbar").addClass("dark");
        $(".header-menu a").addClass("dark");
        $(".title-link").addClass("dark");
        $(".text-primary").addClass("dark");
    }
    else {
        $("#dark-mode-toggle").attr("src", "/images/moon-solid.svg");
        $("#dark-mode-toggle-mobile").attr("src", "/images/moon-solid.svg");
        $(".twitter img").attr("src", "/images/twitter-white.png");
        $(".opensea img").attr("src", "/images/os-black.png");
        $(".discord img").attr("src", "/images/dc-black.png");
        $(".etherscan img").attr("src", "/images/etherscan-black.png");
        $(".down-arrow").attr("src", "/images/down-arrow-black.png");
        $(".body").removeClass("dark");
        $("#roadmap").removeClass("dark");
        $("#navbar").removeClass("dark");
        $(".header-menu a").removeClass("dark");
        $(".title-link").removeClass("dark");
        $(".text-primary").removeClass("dark");
    }
}

async function displayErrorMessage(message, timed = true) {
    if (!($("#error-popup").length)) {
        let darkMode = checkDarkModeOn() ? "dark" : "";
        let fakeJSX = `<div id="error-popup" class="${darkMode}">
                            <div class="popup-wrapper">
                                <svg id="close" onclick="$('#block-screen-error').remove();$('#error-popup').remove();" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path fill="${darkMode ? "white" : "black"}"
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                                </svg>
                                <p>${message}</p>
                            </div>
                        </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

async function displayStatusMessage(message) {
    if (!($("#status-popup").length)) {
        let darkMode = checkDarkModeOn() ? "dark" : "";
        let fakeJSX = `<div id="status-popup" class="${darkMode}">
                            <div class="popup-wrapper">
                                <svg id="close" onclick="$('#block-screen-status').remove();$('#status-popup').remove();" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path fill="${darkMode ? "white" : "black"}"
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                                </svg>
                                <p>${message}</p>
                            </div>
                        </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-status' onclick="$('#block-screen-status').remove();$('#status-popup').remove();" style="height:${height}px"></div>`);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayLoading() {
    if (!($("#loading-popup").length)) {
        // let fakeJSX = `<div id="loading-popup"></div>`;
        // $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-loading' style="height:${height}px"></div>`);
    }
}

function showLive() {
    $('#past-collections').addClass('hidden');
    $('#live-collections').removeClass('hidden');
    $("#scroll-indicator-past").addClass("hidden");
    $("#scroll-indicator-live").removeClass("hidden");
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPast() {
    $('#live-collections').addClass('hidden');
    $('#past-collections').removeClass('hidden');
    $("#scroll-indicator-past").removeClass("hidden");
    $("#scroll-indicator-live").addClass("hidden");
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function showLiveRaffles() {
    $('#past-raffles').addClass('hidden');
    $('#live-raffles').removeClass('hidden');
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPastRaffles() {
    $('#live-raffles').addClass('hidden');
    $('#past-raffles').removeClass('hidden');
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function toggleMenu() {
    const el = document.getElementById("mobile-nav-menu")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
}

function clearPendingTxs() {
    localStorage.removeItem("VoviPendingTxs");
    pendingTransactions.clear();
    location.reload();
};

const loadInfuraListings = async () => {
    const listings = await fetch(`https://www.wavecatchers.io/.netlify/functions/listings?get=true`).then(res => res.text());
    const jsonData = listings ? JSON.parse(listings) : [];
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(jsonData.liveJSX);
    $("#past-collections").append(jsonData.pastJSX);
    $("#num-live").text(` (${jsonData.numLive})`);
    $("#num-past").text(` (${jsonData.numPast})`);
    if (jsonData.numLive > 4) {
        $("#scroll-indicator-live").html(`<img class="down-arrow" src="images/down-arrow-white.png"> SCROLL<span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow-white.png">`);
    }
    if (jsonData.numPast > 4) {
        $("#scroll-indicator-past").html(`<img class="down-arrow" src="images/down-arrow-white.png"> SCROLL <span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow-white.png">`);
    }
}

const loadInfuraRaffles = async () => {
    const raffles = await fetch(`https://www.wavecatchers.io/.netlify/functions/raffles?get=true`).then(res => res.text());
    const jsonData = raffles ? JSON.parse(raffles) : [];
    if (jsonData.currentRaffle.raffleLive == false) {
        $("#raffle-title").html("No raffles live!");
    }
    else {
        $("#raffle-title").html(jsonData.currentRaffle.raffleTitle);
        $("#current-raffle-img").attr("src", jsonData.currentRaffle.raffleImg);
        $("#base-raffle-price").html(jsonData.currentRaffle.rafflePrice);
        $("#total-entries").html(`Total Entries: ${jsonData.currentRaffle.totalEntries}`);
        $("#entry-num").addClass("hidden");
        if (jsonData.currentRaffle.capped) {
            $("#total-price").addClass("hidden");
            $("#max-msg").html("Max 1 entry!");
        }
        else {
            $("#total-price").removeClass("hidden");
            $("#max-msg").html(`Unlimited entries!`);
        }
    }
    $("#past-raffles").empty();
    $("#past-raffles").append(jsonData.pastRaffles.pastJSX);
    $("#num-past").text(` (${jsonData.pastRaffles.numPast})`);
    $("#enter-button").addClass("hidden");
    $("#enter-with-name-button").addClass("hidden");
    $("#connect-button").removeClass("hidden");
}

// ======= DISCORD UTILS ========

// Mainnet
//  const identityMapperAddress = "0xaD48C81ac9CdcD4fE3e25B8493b2798eA5104e6f";

// // Testnet
// const identityMapperAddress = "0xffccE647DA8a266A8779875b9c68cb51DC236C80";

// const identityMapperAbi = () => {
//     return `[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToDiscord","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToTwitter","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"discordTag_","type":"string"}],"name":"setDiscordIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"twitterTag_","type":"string"}],"name":"setTwitterIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// }

// const providerID = new ethers.providers.Web3Provider(window.ethereum, "any");
// const signerID = providerID.getSigner();

// const identityMapper = new ethers.Contract(identityMapperAddress, identityMapperAbi(), signerID);

// const promptForDiscord = async () => {
//     if (!($("#discord-popup").length)) {
//         let userAddress = await signer.getAddress();
//         let currentDiscord = await identityMapper.addressToDiscord(userAddress);
//         let discordString = currentDiscord ? currentDiscord : "None";
//         let fakeJSX = `<div id="discord-popup">
//                         <div class="popup-wrapper">
//                             <svg id="close" onclick="$('#block-screen-discord').remove();$('#discord-popup').remove();" xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512">
//                             <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
//                             <path fill="black"
//                             d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
//                             </svg>
//                             <div id="content">
//                                 <p>Enter Discord User ID to associate with purchases.</p>
//                                 <p>Current: ${discordString}</p>
//                                 <br>
//                                 <input id="discord-name" type="text" spellcheck="false" value="" placeholder="user#1234">
//                                 <br>
//                                 <button class="button" onclick="setDiscord()">SET DISCORD</button>
//                             </div>
//                         </div>
//                        </div>`;
//         $("body").append(fakeJSX);
//         let height = $(document).height();
//         $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
//     }
// }

// const setDiscord = async () => {
//     try {
//         let name = $("#discord-name").val();
//         console.log(name)
//         if (name == "") {
//             await displayErrorMessage(`Error: No User ID provided!`);

//         }
//         else if (!(name.includes("#"))) {
//             await displayErrorMessage(`Error: Must include "#" and numbers in ID!`);
//         }
//         else {
//             await identityMapper.setDiscordIdentity(name).then(async (tx_) => {
//                 await waitForTransaction(tx_);
//                 $('#discord-popup').remove();
//                 $('#block-screen-discord').remove();
//             });
//         }
//     }
//     catch (error) {
//         if ((error.message).includes("User denied transaction signature")) {
//             console.log("Transaction rejected.");
//         }
//         else {
//             await displayErrorMessage("An error occurred. See console and window alert for details...")
//             window.alert(error);
//             console.log(error);
//         }
//     }
// }

// var discordSet = false;
// var discordFailures = 0;

// const updateDiscord = async () => {
//     try {
//         if (!discordSet) {
//             let userAddress = await getAddress();
//             let currentDiscord = await identityMapper.addressToDiscord(userAddress);
//             if (currentDiscord) {
//                 discordSet = true
//                 $("#discord-text").text("SET!");
//                 $("#discord").addClass("success");
//                 $("#discord").removeClass("failure");
//                 $("#discord-text-mobile").text("SET!");
//                 $("#discord-mobile").addClass("success");
//                 $("#discord-mobile").removeClass("failure");
//             }
//             else {
//                 $("#discord-text").text("NOT SET!");
//                 $("#discord").addClass("failure");
//                 $("#discord").removeClass("success");
//                 $("#discord-text-mobile").text("NOT SET!");
//                 $("#discord-mobile").addClass("failure");
//                 $("#discord-mobile").removeClass("success");
//             }
//         }
//     }
//     catch (error) {
//         discordFailures += 1;
//         console.log("unable to reach discord directory")
//         if (discordFailures >= 10) {
//             discordSet = true;
//         }
//     }
// }

// var timeout = 100;

// setInterval(async () => {
//     await updateDiscord();
//     timeout = 5000;
// }, timeout)