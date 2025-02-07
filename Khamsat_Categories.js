const categories = {
    تصميم: {
        keywords: ['تصميم', 'مصممه', 'مصمم', 'لوغو', 'canva', 'شعارات', 'هوية', 'جرافيك', 'شعار', 'تصاميم', 
                  'صور', 'صوره', 'صورة', 'تيكتوك', 'بوستات', 'بوست', 'مسوقين', 'مسوق', 'سوشيال', 'مصممين', 
                  'كانفا', 'ui', 'ux', 'بوستر', 'غلاف', 'بروشور', 'بانر', 'هوية بصرية', 'انفوجرافيك', 
                  'بروفايل', 'اليستريتور', 'فوتوشوب', 'عرض بوربوينت', 'بوث', 'مخطط مفاهيم', 'مصمم ويب'],
        icon: 'fa-palette',
        color: '#17a2b8'
    },
    كتابة: {
        keywords: ['كتابة', 'لكتابة', 'لكتابه', 'ترجمة', 'ترجمه', 'محتوى', 'مقالات', 'كتيب', 'مجلة', 'مقال', 'تفريغ', 'كاتب', 'تأليف', 'مدونة', 
                  'نص', 'سيناريو', 'سيو', 'تلخيص', 'سيرة ذاتية', 'بحث', 'تدقيق', 'تحرير', 'صياغة', 
                  'تنسيق', 'بحث أكاديمي', 'مراجعة'],
        icon: 'fa-pen',
        color: '#6610f2'
    },
    تسويق: {
        keywords: ['تسويق', 'تسويقي', 'تسويقية', 'اعلان', 'اعلانات', 'حملات', 'ads', 'seo', 'marketing',
                  'فيسبوك', 'انستقرام', 'سناب', 'التسويق', 'الإعلانية', 'للتسويق', 'ادارة حسابات',
                  'براند', 'مبيعات', 'ترويج', 'جوجل أدز', 'ادسنس', 'حملات ممولة', 'cpa', 'bing',
                  'استراتيجية', 'guest post', 'تسويق عقاري', 'سوشيال ميديا', 'تيك توك'],
        icon: 'fa-bullhorn',
        color: '#ffc107'
    },
    برمجة: {
        keywords: ['برمجة', 'تطوير', 'موقع', 'مواقع', 'تطبيق', 'تطبيقات', 'tabby', 'متجر', 'اندرويد',
                  'ios', 'wordpress', 'بوت', 'مبرمج', 'php', 'ويب', 'فايرفوكس', 'قوقل', 'متصفح',
                  'ايفون', 'أيفون', 'chrome', 'extension', 'بايثون', 'js', 'تكويد', 'فلاتر', 'لارافل',
                  'HTML', 'CSS', 'JavaScript', 'Objective-C', 'Xcode', 'Websocket', 'API', 'Frontend',
                  'Backend', 'SQL', 'VB.NET', 'Postgres', 'Supabase', 'ريسكين', 'Figma'],
        icon: 'fa-code',
        color: '#28a745'
    },
    فيديو: {
        keywords: ['فيديو', 'موشن', 'مونتاج', 'انيميشن', 'فيلم', 'الفيديو', 'الفيديوهات', 'فيديوهات',
                  'فديوهات', 'انترو', 'تحريك', 'animation', 'edit', 'اخراج', 'مونتير', 'تعديل ألوان',
                  'Video', 'فلاتر', 'ترانزيشن', 'إخراج سينمائي', 'تحرير فيديو', 'إعلان مصوَّر',
                  'Videographer'],
        icon: 'fa-video',
        color: '#dc3545'
    },
    هندسة: {
        keywords: ['هندسة', 'معمار', 'مدني', 'خريطة', 'ميكانيكي', 'معماري', 'مخطط', 'مهندس',
                  'مشروع هندسي', 'خرائط', 'تصميم داخلي', 'ديكور', 'أوتوكاد', 'ريفيت', '3ds Max',
                  'SketchUp', 'مخطط سلامة', 'ديناميكا حرارية', 'هندسي'],
        icon: 'fa-building',
        color: '#8e44ad'
    },
    أعمال: {
        keywords: ['اعمال', 'ادارة', 'محاسبة', 'مالية', 'قانونية', 'دراسة جدوى', 'خطة عمل',
                  'مشروع', 'وظائف', 'موظف', 'سكرتير', 'موظفين', 'مندوب', 'تمويل', 'تسعير',
                  'مبيعات', 'إدارة مشاريع', 'موارد بشرية'],
        icon: 'fa-briefcase',
        color: '#fd7e14'
    },
    صوتيات: {
        keywords: ['صوت', 'تعليق', 'موسيقى', 'هندسة صوت', 'تلحين', 'فويس', 'اغنية', 'إنشاد',
                  'إنشودة', 'انشودة', 'إلقاء', 'فويس أوفر', 'صوتي', 'دبلجة', 'بودكاست'],
        icon: 'fa-microphone',
        color: '#FF80AB'
    },
    تعليم: {
        keywords: ['تعليم', 'الواجب', 'تدريب', 'تعليمية', 'دروس', 'مدرس', 'تدريبية', 'حل واجبات', 'صوتيه', 'كورس', 'معلم',
                  'قرآن', 'دورات', 'شرح', 'آيلتس', 'تدريس', 'خصوصي', 'منصة تعليمية', 'التعلم',
                  'معلمة', 'تعليم', 'اختبارات', 'مساعدة واجبات', 'أكاديمي'],
        icon: 'fa-chalkboard-teacher',
        color: '#FA8072'
    },
    بيانات: {
        keywords: ['بيانات', 'البيانات', 'ادخال', 'تنظيف', 'تحليل', 'جمع', 'scraping', 'اكسل',
                  'pdf', 'sql', 'database', 'جوجل شيت', 'SharePoint', 'VBA', 'جدول ديناميكي',
                  'تنسيق ملفات', 'دمج بيانات', 'Pivot', 'CSV'],
        icon: 'fa-database',
        color: '#FF6347'
    },
    'أسلوب حياة': {
        keywords: ['حياة', 'لياقة', 'ارشاد', 'استشارة', 'طبخ', 'صحة', 'هواية', 'ترفيه',
                  'شخصي', 'رشاقة', 'جمال', 'موضة', 'نصائح', 'عناية', 'وصفات طبخ', 'تخسيس'],
        icon: 'fa-heart',
        color: '#20B2AA'
    },
    أخرى: {
        keywords: [],
        icon: 'fa-folder-open',
        color: '#6c757d'
    }
 };
 
 // Prepare regex patterns
 Object.values(categories).forEach(category => {
    if (category.keywords?.length) {
        category.regex = new RegExp(
            `(?:^|\\s)(${category.keywords
                .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                .join('|')})(?:\\s|$)`,
            'i'
        );
    }
 });
 
 // Add Font Awesome
 const link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
 document.head.appendChild(link);
 
 // Add category icons to requests
 function addCategoryIcons() {
    document.querySelectorAll('#forums_table tr.forum_post:not([data-categorized])').forEach(row => {
        const link = row.querySelector('.details-td h3 a');
        if (!link) return;
 
        const text = link.textContent.toLowerCase();
        const matchedCategories = Object.entries(categories)
            .filter(([name, cat]) => name !== 'أخرى' && cat.regex?.test(text))
            .map(([name]) => name);
 
        if (!matchedCategories.length) {
            matchedCategories.push('أخرى');
        }
 
        const iconSpan = document.createElement('span');
        iconSpan.style.cssText = 'display:inline-flex;gap:8px;align-items:center;padding-right:2px';
 
        matchedCategories.forEach(categoryName => {
            const category = categories[categoryName];
            const icon = document.createElement('i');
            icon.className = `fas ${category.icon}`;
            icon.title = categoryName;
            icon.style.cssText = `color:${category.color};font-size:16px`;
            iconSpan.appendChild(icon);
        });
 
        link.after(iconSpan);
        row.dataset.categories = matchedCategories.join(',');
        row.dataset.categorized = 'true';
    });
 }
 
 // Filter posts
 let currentCategory = 'الكل';
 function filterPosts(category) {
    currentCategory = category;
    document.querySelectorAll('#forums_table tr.forum_post').forEach(row => {
        row.style.display = category === 'الكل' || 
            (row.dataset.categories && row.dataset.categories.includes(category))
            ? ''
            : 'none';
    });
 }
 
 // Add category buttons
 function addCategoryButtons() {
    const container = document.createElement('div');
    container.id = 'cat-buttons';
    container.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin:10px 0';
 
    // Add "All" button
    const allButton = document.createElement('button');
    allButton.className = 'cat-btn';
    allButton.innerHTML = '<i class="fas fa-list"></i> الكل';
    allButton.style.backgroundColor = '#6c757d';
    allButton.onclick = () => filterPosts('الكل');
    container.appendChild(allButton);
 
    // Add category buttons
    Object.entries(categories).forEach(([name, category]) => {
        const button = document.createElement('button');
        button.className = 'cat-btn';
        button.innerHTML = `<i class="fas ${category.icon}"></i> ${name}`;
        button.style.backgroundColor = category.color;
        button.onclick = () => filterPosts(name);
        container.appendChild(button);
    });
 
    const forumElement = document.querySelector('#forum-requests');
    if (forumElement) {
        forumElement.prepend(container);
    }
 }
 
 // Initialize
 function initialize() {
    addCategoryButtons();
    addCategoryIcons();
    
    // Observe table for new posts
    const observer = new MutationObserver(() => {
        setTimeout(addCategoryIcons, 300);
    });
 
    const forumTable = document.querySelector('#forums_table tbody');
    if (forumTable) {
        observer.observe(forumTable, { 
            childList: true, 
            subtree: true 
        });
    }
 
    // Handle "Load More" button
    const loadMoreButton = document.getElementById('community_loadmore_btn');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            setTimeout(() => {
                addCategoryIcons();
                filterPosts(currentCategory);
            }, 2000);
        });
    }
 }
 
 if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
 } else {
    initialize();
 }
