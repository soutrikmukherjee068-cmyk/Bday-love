// Change this to your desired password
const correctPassword = "Madarchod";

// Photo data - Replace these with your actual image URLs and messages
const photos = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
        text: "From the moment I met you, my life changed forever. Your smile lights up my darkest days and fills my heart with joy. Thank you for being the most amazing person in my life! 💖"
    },
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
        text: "Every adventure with you is a treasure. You make ordinary moments extraordinary just by being there. I'm so grateful for every laugh, every hug, and every second we share together. 🌟"
    },
    {
        img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=600&fit=crop",
        text: "Your kindness, your strength, your beautiful soul - everything about you inspires me. You're not just my girlfriend, you're my best friend, my partner, my everything. 💕"
    },
    {
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop",
        text: "I love how you understand me like no one else does. Your support and love give me the courage to chase my dreams. With you by my side, I feel invincible! 🌈"
    },
    {
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
        text: "You have the most beautiful heart I've ever known. Your compassion and warmth make the world a better place. I'm the luckiest person to call you mine! 💝"
    },
    {
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
        text: "Thank you for all the memories we've created together. Each one is precious to me. I can't wait to make a million more beautiful moments with you! 🎈"
    },
    {
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
        text: "Your laughter is my favorite sound, your happiness is my greatest goal. Seeing you smile makes everything worthwhile. Happy Birthday, my beautiful angel! 😇"
    },
    {
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop",
        text: "You make me want to be a better person every day. Your love has transformed my life in the most wonderful ways. I promise to always cherish and love you! 💑"
    },
    {
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop",
        text: "Here's to another year of your amazing life! May all your dreams come true, and may our love continue to grow stronger. Forever and always, I'm yours! 🎂✨"
    }
];

// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heartsContainer.appendChild(heart);
    }
}

// Check password
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === correctPassword) {
        document.getElementById('passwordScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        createGallery();
        createHearts();
    } else {
        document.getElementById('errorMsg').style.display = 'block';
        document.getElementById('passwordInput').value = '';
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('passwordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});

// Create gallery
function createGallery() {
    const gallery = document.getElementById('gallery');
    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <div class="photo-number">${index + 1}</div>
            <img src="${photo.img}" alt="Memory ${index + 1}">
        `;
        card.onclick = () => openModal(index);
        gallery.appendChild(card);
    });
}

// Open modal
function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalText = document.getElementById('modalText');
    
    modalImg.src = photos[index].img;
    modalText.textContent = photos[index].text;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal on background click
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});