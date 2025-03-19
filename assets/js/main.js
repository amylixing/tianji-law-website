// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    scrollProgress.style.width = `${scrollPercent}%`;
});

// 汉堡菜单控制
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 动画效果
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-fade-in').forEach(el => observer.observe(el));

// 新闻链接点击事件处理
document.querySelectorAll('.news-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('新闻详情页面正在建设中，敬请期待！');
    });
});

// 滚动到顶部按钮
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 在线咨询窗口控制
const chatToggle = document.querySelector('.chat-toggle');
const chatContainer = document.querySelector('.chat-container');
const closeChat = document.querySelector('.close-chat');
const sendMessage = document.querySelector('.send-message');
const chatInput = document.querySelector('.chat-input textarea');
const chatMessages = document.querySelector('.chat-messages');

chatToggle.addEventListener('click', () => {
    window.location.href = 'https://www.coze.cn/store/agent/7478597360462463016?bot_id=true';
});

closeChat.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        
        // 添加系统回复
        setTimeout(() => {
            const systemMessage = document.createElement('div');
            systemMessage.className = 'message system';
            systemMessage.textContent = '感谢您的咨询！我们的工作人员会尽快与您联系。如需紧急咨询，请拨打电话：13699817102';
            chatMessages.appendChild(systemMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
});

// 初始化聊天窗口状态
chatContainer.style.display = 'none';