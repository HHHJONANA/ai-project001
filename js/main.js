// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 注册GSAP插件
  gsap.registerPlugin(ScrollTrigger);
  
  // 初始化SVG动画容器
  initHeroSVG();
  initDancerSVG();
  initPerformanceSVG();
  
  // 初始化所有动画
  initAnimations();
  
  // 初始化页面交互
  initInteractions();
  
  // 响应式处理
  setupResponsive();
});

// 创建Hero区块的SVG动画
function initHeroSVG() {
  const container = document.getElementById('hero-svg-container');
  
  // 创建SVG元素
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1200 800');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  
  // SVG内容 - 抽象舞蹈图形
  svg.innerHTML = `
    <defs>
      <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#121212" />
        <stop offset="100%" stop-color="#331966" />
      </linearGradient>
      <radialGradient id="spotlight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="rgba(147, 51, 234, 0.5)" />
        <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
      </radialGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <!-- 背景 -->
    <rect width="100%" height="100%" fill="url(#bg-gradient)" />
    
    <!-- 聚光灯效果 -->
    <circle cx="600" cy="400" r="300" fill="url(#spotlight)" opacity="0" class="spotlight" />
    
    <!-- 舞者剪影 -->
    <path class="dancer-silhouette" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" 
      d="M600,600 C650,550 680,500 650,450 C620,400 600,350 650,300 C700,250 680,200 630,180 C590,165 570,190 560,230 C550,270 540,310 510,340 C480,370 450,410 440,450 C430,490 450,530 500,550 C550,570 570,580 600,600 Z" 
      opacity="0" filter="url(#glow)" />
    
    <!-- 装饰线条 -->
    <g class="decorative-lines" opacity="0">
      <path d="M200,700 C400,650 600,680 800,630 C1000,580 1100,620 1200,600" stroke="#9333EA" stroke-width="2" fill="none" />
      <path d="M0,500 C200,520 300,480 500,500 C700,520 900,480 1200,500" stroke="#3B82F6" stroke-width="2" fill="none" />
      <path d="M0,300 C300,320 500,280 700,300 C900,320 1000,280 1200,300" stroke="#9333EA" stroke-width="1.5" fill="none" />
    </g>
    
    <!-- 粒子效果 -->
    <g class="particles">
      ${generateParticles(30)}
    </g>
  `;
  
  container.appendChild(svg);
}

// 创建舞者介绍的SVG动画
function initDancerSVG() {
  const container = document.getElementById('dancer-svg-container');
  
  // 创建SVG元素
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1200 800');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  
  // SVG内容 - 舞者介绍图形
  svg.innerHTML = `
    <defs>
      <linearGradient id="dancer-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#121212" />
        <stop offset="100%" stop-color="#240B36" />
      </linearGradient>
      <clipPath id="reveal-mask">
        <rect x="0" y="0" width="0" height="800" />
      </clipPath>
    </defs>
    
    <!-- 背景 -->
    <rect width="100%" height="100%" fill="url(#dancer-bg)" />
    
    <!-- 时间轴元素 -->
    <line x1="100" y1="400" x2="1100" y2="400" stroke="#333" stroke-width="4" />
    
    <!-- 舞者生涯关键时刻 -->
    <g class="timeline-nodes" opacity="0">
      <g class="node" transform="translate(200, 400)">
        <circle r="12" fill="#9333EA" />
        <text x="0" y="-20" text-anchor="middle" fill="white" font-size="14">启蒙</text>
        <text x="0" y="40" text-anchor="middle" fill="#CCC" font-size="12">2005</text>
      </g>
      <g class="node" transform="translate(400, 400)">
        <circle r="12" fill="#9333EA" />
        <text x="0" y="-20" text-anchor="middle" fill="white" font-size="14">专业训练</text>
        <text x="0" y="40" text-anchor="middle" fill="#CCC" font-size="12">2010</text>
      </g>
      <g class="node" transform="translate(600, 400)">
        <circle r="12" fill="#9333EA" />
        <text x="0" y="-20" text-anchor="middle" fill="white" font-size="14">首次公演</text>
        <text x="0" y="40" text-anchor="middle" fill="#CCC" font-size="12">2013</text>
      </g>
      <g class="node" transform="translate(800, 400)">
        <circle r="12" fill="#9333EA" />
        <text x="0" y="-20" text-anchor="middle" fill="white" font-size="14">国际比赛</text>
        <text x="0" y="40" text-anchor="middle" fill="#CCC" font-size="12">2016</text>
      </g>
      <g class="node" transform="translate(1000, 400)">
        <circle r="12" fill="#9333EA" />
        <text x="0" y="-20" text-anchor="middle" fill="white" font-size="14">个人工作室</text>
        <text x="0" y="40" text-anchor="middle" fill="#CCC" font-size="12">2020</text>
      </g>
    </g>
    
    <!-- 舞者形象 -->
    <g class="dancer-figure" clip-path="url(#reveal-mask)">
      <!-- 静态舞者形象，使用抽象线条表示 -->
      <g transform="translate(600, 250)">
        <path d="M0,0 C30,-40 40,-80 20,-100 C0,-120 -40,-100 -20,-60 C0,-20 -30,40 0,80 C30,120 10,150 -20,150 C-50,150 -30,120 -10,100 C10,80 20,40 0,0 Z" 
          fill="none" stroke="#FFF" stroke-width="3" />
        <ellipse cx="0" cy="-140" rx="15" ry="20" fill="#FFF" />
      </g>
    </g>
    
    <!-- 文字元素 -->
    <g class="dancer-text" opacity="0">
      <text x="600" y="600" text-anchor="middle" fill="white" font-size="32" font-weight="bold">十五年专业舞蹈生涯</text>
      <text x="600" y="650" text-anchor="middle" fill="#CCC" font-size="18">从古典芭蕾到现代舞，跨越多种舞蹈形式</text>
    </g>
  `;
  
  container.appendChild(svg);
}

// 创建表演特色的SVG动画
function initPerformanceSVG() {
  const container = document.getElementById('performance-svg-container');
  
  // 创建SVG元素
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1200 800');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  
  // SVG内容 - 表演特色图形
  svg.innerHTML = `
    <defs>
      <linearGradient id="perf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#27104E" />
        <stop offset="100%" stop-color="#121212" />
      </linearGradient>
      <filter id="blur-effect" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      </filter>
    </defs>
    
    <!-- 背景 -->
    <rect width="100%" height="100%" fill="url(#perf-bg)" />
    
    <!-- 表演特色球体 -->
    <g class="feature-spheres" filter="url(#blur-effect)">
      <circle class="sphere" cx="300" cy="250" r="80" fill="#9333EA" opacity="0.8" />
      <circle class="sphere" cx="600" cy="350" r="100" fill="#3B82F6" opacity="0.8" />
      <circle class="sphere" cx="900" cy="250" r="80" fill="#9333EA" opacity="0.8" />
    </g>
    
    <!-- 特色标题 -->
    <g class="feature-titles" opacity="0">
      <g transform="translate(300, 250)">
        <text x="0" y="0" text-anchor="middle" fill="white" font-size="24" font-weight="bold">技术精湛</text>
        <text x="0" y="30" text-anchor="middle" fill="#CCC" font-size="14">融合多种舞蹈技法</text>
      </g>
      <g transform="translate(600, 350)">
        <text x="0" y="0" text-anchor="middle" fill="white" font-size="24" font-weight="bold">情感表达</text>
        <text x="0" y="30" text-anchor="middle" fill="#CCC" font-size="14">深度传递艺术情感</text>
      </g>
      <g transform="translate(900, 250)">
        <text x="0" y="0" text-anchor="middle" fill="white" font-size="24" font-weight="bold">创新编排</text>
        <text x="0" y="30" text-anchor="middle" fill="#CCC" font-size="14">突破传统舞蹈界限</text>
      </g>
    </g>
    
    <!-- 连接线 -->
    <g class="connections" opacity="0">
      <line x1="300" y1="250" x2="600" y2="350" stroke="#FFF" stroke-width="1.5" stroke-dasharray="5,5" />
      <line x1="600" y1="350" x2="900" y2="250" stroke="#FFF" stroke-width="1.5" stroke-dasharray="5,5" />
    </g>
    
    <!-- 中心标题 -->
    <g class="center-title" opacity="0">
      <text x="600" y="550" text-anchor="middle" fill="white" font-size="36" font-weight="bold">我的表演特色</text>
    </g>
  `;
  
  container.appendChild(svg);
}

// 生成SVG粒子函数
function generateParticles(count) {
  let particles = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 1200;
    const y = Math.random() * 800;
    const r = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.5 + 0.3;
    
    particles += `<circle class="particle" cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${opacity}" />`;
  }
  return particles;
}

// 初始化所有GSAP动画
function initAnimations() {
  // 创建主时间线
  const masterTimeline = gsap.timeline();
  
  // 添加导航条动画
  gsap.to('nav', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      toggleClass: {targets: 'nav', className: 'scrolled'}
    }
  });
  
  // Hero区块动画
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });
  
  heroTl
    .to('.hero-content', {opacity: 1, y: 0, duration: 0.5})
    .to('.spotlight', {opacity: 0.7, duration: 0.3}, '-=0.3')
    .to('.dancer-silhouette', {opacity: 1, strokeDashoffset: 0, duration: 0.5}, '-=0.1')
    .to('.decorative-lines path', {opacity: 1, strokeDashoffset: 0, duration: 0.5, stagger: 0.1})
    .to('.particles circle', {
      opacity: 1, 
      stagger: {each: 0.01, from: 'random'},
      duration: 0.3
    }, '-=0.5')
    .to({}, {duration: 0.5}) // 暂停片刻
    .to('.hero-content', {opacity: 0, y: -50, duration: 0.3}, '+=0.5')
    .to('.spotlight, .dancer-silhouette, .decorative-lines, .particles', {opacity: 0, duration: 0.3}, '-=0.3');
  
  // 初始化舞者介绍SVG动画
  const dancerTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#dancer-intro',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });
  
  dancerTl
    .to('#reveal-mask rect', {width: 1200, duration: 1, ease: 'power3.inOut'})
    .to('.timeline-nodes', {opacity: 1, duration: 0.6, ease: 'power1.out'}, '-=0.4')
    .to('.timeline-nodes .node', {
      scale: 1.2, 
      stagger: 0.15,
      duration: 0.4,
      repeat: 1,
      yoyo: true,
      ease: 'back.out(1.7)'
    })
    .to('.dancer-text', {opacity: 1, y: -20, duration: 0.6, ease: 'power1.out'}, '-=0.3')
    .to({}, {duration: 1})
    .to('.timeline-nodes, .dancer-text', {opacity: 0, duration: 0.8, ease: 'power2.in'}, '+=1')
    .to('#reveal-mask rect', {width: 0, duration: 0.8, ease: 'power3.inOut'});
  
  // 初始化表演特色SVG动画 - 改进过渡效果
  const performanceTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#performance',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5, // 增加scrub值使过渡更平滑
      pin: true,
      anticipatePin: 1
    }
  });
  
  // 预设球体初始状态
  gsap.set('.feature-spheres .sphere', {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center'
  });
  
  performanceTl
    .to('.feature-spheres .sphere', {
      opacity: 0.8, 
      scale: 1,
      stagger: 0.2, // 增加stagger值
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)' // 使用弹性缓动函数
    })
    .to('.feature-spheres .sphere', {
      x: 'random(-40, 40)',
      y: 'random(-40, 40)',
      duration: 4, // 增加动画时长
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }, '-=0.2')
    .to('.feature-titles', {opacity: 1, y: -10, duration: 0.8, stagger: 0.2, ease: 'power1.out'}, '-=3.5') // 添加轻微位移
    .to('.connections', {opacity: 1, duration: 0.8, ease: 'power1.out'}, '-=3')
    .to('.center-title', {opacity: 1, y: -20, duration: 0.8, ease: 'power2.out'}, '-=2.8')
    .to({}, {duration: 1.5}) // 暂停时间延长
    .to('.feature-titles', {opacity: 0, y: -30, duration: 0.8, stagger: 0.1, ease: 'power2.in'}, '+=2')
    .to('.connections', {opacity: 0, duration: 0.6, ease: 'power2.in'}, '-=0.6')
    .to('.center-title', {opacity: 0, y: -40, duration: 0.6, ease: 'power2.in'}, '-=0.4')
    .to('.feature-spheres .sphere', {
      opacity: 0, 
      scale: 0, 
      stagger: 0.15, 
      duration: 0.6, 
      ease: 'back.in(1.7)'
    }, '-=0.2');
  
  // 关于区块动画 - 改进过渡效果
  gsap.from('.about-element', {
    opacity: 0,
    y: 80, // 增加距离
    stagger: 0.3, // 增加间隔
    duration: 1.2, // 增加持续时间
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'center center',
      toggleActions: 'play none none reverse'
    }
  });
  
  // 作品展示动画 - 改进过渡效果
  const galleryTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#gallery',
      start: 'top 85%',
      end: 'center center',
      toggleActions: 'play none none reverse'
    }
  });
  
  galleryTl
    .from('.gallery-element', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.gallery-item', {
      opacity: 0,
      y: 80,
      scale: 0.9,
      stagger: {
        each: 0.15,
        grid: [2, 3],
        from: "center"
      },
      duration: 0.8,
      ease: 'back.out(1.2)'
    }, '-=0.3');
  
  // FAQ动画 - 改进过渡效果
  const faqTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#faq',
      start: 'top 80%',
      end: 'center center',
      toggleActions: 'play none none reverse'
    }
  });
  
  faqTl
    .from('.faq-element', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.faq-item', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power1.out'
    }, '-=0.4');
  
  // 联系区块动画 - 改进过渡效果
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
      end: 'center center',
      toggleActions: 'play none none reverse'
    }
  });
  
  contactTl
    .from('.contact-element', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.contact-form', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.contact-info', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6');
  
  // 页脚动画 - 改进过渡效果
  gsap.from('.footer-element', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 95%',
      toggleActions: 'play none none none'
    }
  });
}

// 初始化页面交互
function initInteractions() {
  // 为FAQ添加交互
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
      
      // 添加点击时的动画效果
      if(faqItem.classList.contains('active')) {
        gsap.to(faqItem.querySelector('.faq-answer'), {
          maxHeight: 300,
          duration: 0.5,
          ease: 'power2.out'
        });
      } else {
        gsap.to(faqItem.querySelector('.faq-answer'), {
          maxHeight: 0,
          duration: 0.5,
          ease: 'power2.in'
        });
      }
    });
  });
  
  // 导航滚动平滑效果 - 改进过渡体验
  document.querySelectorAll('nav a, .hero-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // 使用GSAP平滑滚动并添加缓动效果
        gsap.to(window, {
          duration: 1.5, // 延长滚动时间
          scrollTo: {
            y: targetSection,
            offsetY: 80,
            autoKill: false // 防止自动中断滚动
          },
          ease: 'power3.inOut' // 使用更平滑的缓动函数
        });
        
        // 高亮当前导航项目
        document.querySelectorAll('nav a').forEach(item => {
          item.classList.remove('text-purple-400');
        });
        this.classList.add('text-purple-400');
      }
    });
  });
  
  // 添加鼠标悬停效果
  gsap.utils.toArray('.gallery-item').forEach(item => {
    const overlay = item.querySelector('.gallery-overlay');
    const image = item.querySelector('img');
    
    const tl = gsap.timeline({ paused: true });
    tl.to(overlay, { 
      y: 0, 
      opacity: 1, 
      duration: 0.3, 
      ease: 'power2.out' 
    });
    tl.to(image, { 
      scale: 1.05, 
      duration: 0.5, 
      ease: 'power1.out' 
    }, '-=0.2');
    
    item.addEventListener('mouseenter', () => tl.play());
    item.addEventListener('mouseleave', () => tl.reverse());
  });
}

// 响应式布局设置 - 改进过渡体验
function setupResponsive() {
  ScrollTrigger.matchMedia({
    // 桌面视图
    "(min-width: 992px)": function() {
      // 保持默认动画设置
      // 添加区块间的平滑过渡
      createSectionTransitions();
    },
    
    // 平板视图
    "(min-width: 768px) and (max-width: 991px)": function() {
      // 调整动画持续时间和时机
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.scrub === true) {
          trigger.vars.scrub = 0.5; // 减小scrub时间
        }
      });
      
      // 平板专用的优化
      optimizeForTablet();
      createSectionTransitions();
    },
    
    // 移动视图
    "(max-width: 767px)": function() {
      // 简化或禁用部分SVG动画以提高性能
      simplifyMobileAnimations();
      createSectionTransitions();
    }
  });
}

// 新功能：创建区块间平滑过渡效果
function createSectionTransitions() {
  // 获取所有主要区块
  const sections = gsap.utils.toArray("section");
  
  // 为每个区块创建进入/离开的效果
  sections.forEach((section, i) => {
    // 为区块添加视差滚动效果
    if (i > 0 && i < sections.length - 1 && !section.id.includes('dancer-intro') && !section.id.includes('performance')) {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 50, // 轻微的视差效果
        ease: "none"
      });
    }
  });
}

// 平板专用优化
function optimizeForTablet() {
  // 调整部分动画的时间和效果
  gsap.to('.feature-spheres .sphere', {
    x: 'random(-20, 20)',
    y: 'random(-20, 20)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

// 移动端优化
function simplifyMobileAnimations() {
  // 移除粒子动画
  document.querySelectorAll('.particles').forEach(el => {
    el.style.display = 'none';
  });
  
  // 减少模糊效果以提高性能
  document.querySelectorAll('#blur-effect').forEach(filter => {
    if (filter.stdDeviation) {
      filter.stdDeviation.baseVal = 10; // 减小模糊半径
    }
  });
  
  // 简化SVG动画区块的pin行为
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.pin === true) {
      // 减少pin持续时间
      trigger.vars.end = 'center top';
    }
  });
  
  // 调整动画持续时间
  const allTimelines = gsap.globalTimeline.getChildren();
  allTimelines.forEach(tl => {
    // 缩短所有动画持续时间
    tl.timeScale(1.2);
  });
} 