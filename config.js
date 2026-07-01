// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Debra",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Another Summer with my Divine Lover 🗝🏝⭐",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💙', '🐴', '🦄', '🤎', '🌮'],  // Heart emojis
        bears: ['🦄', '🐴']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like apple juice?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Shit goes so hard fr! 😤"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "More than apple juice!",                                   // Text before the percentage
            nextBtn: "Next hoe 🤎"                                         // Text for the next button
        },
        third: {
            text: "Will you accompany me to the mysertious wedding today?", // The big question!
            yesBtn: "I am in love with another!",                                             // Text for "Yes" button
            noBtn: "Only if we can drink!"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I LOVE YOU FOR REAL LIFE! 🥰🍒💙",  // Shows when they go past 5000%
        high: "My love for you burns brighter than any flame or fire! 🔥💙",              // Shows when they go past 1000%
        normal: "The Rarity to my Applejack 🧡🤍"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I Can't wait to see you again! 🎉💝💖💝💓",
        message: "I'm gonna kiss you out of admiration, respect, love, and lust!",
        emojis: "💙😍🥰😘🤎"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#29738e",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#5f96aa",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#f1e5d7",     // Button color (should stand out against the background)
        buttonHover: "#cec1b8",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#7f6f62"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/k0qz0dxs/video/upload/v1782879752/Kingdom_Hearts_-_Dearly_Beloved_With_Beach_Waves_xgiyx0.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
