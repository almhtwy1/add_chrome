// comment_Text.js
async function updateAnchor(anchor) {
    try {
      const href = anchor.getAttribute('href');
      const url = new URL(href, window.location.origin);
      const response = await fetch(url.href);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      
      const htmlText = await response.text();
      const doc = new DOMParser().parseFromString(htmlText, 'text/html');
      const header = doc.querySelector('div.card-header.bg-white h3');
      
      if (!header) return;
   
      const match = header.textContent.match(/\((\d+)/);
      if (match) {
        const count = match[1];
        const span = anchor.querySelector('span.comments-count');
        if (span) {
          span.textContent = ` (${count} تعليقات)`;
        } else {
          const newSpan = document.createElement('span');
          newSpan.className = 'comments-count';
          newSpan.style.cssText = 'color:rgb(255, 69, 0);font-weight:bold;margin-left:5px';
          newSpan.textContent = ` (${count} تعليقات)`;
          anchor.appendChild(newSpan);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
   }
   
   function processAnchors(root = document) {
    const anchors = root.querySelectorAll('a.ajaxbtn:not([data-processed])');
    anchors.forEach(anchor => {
      anchor.setAttribute('data-processed', 'true');
      updateAnchor(anchor);
    });
   }
   
   processAnchors();
   
   const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        if (node.matches && node.matches('a.ajaxbtn:not([data-processed])')) {
          node.setAttribute('data-processed', 'true');
          updateAnchor(node);
        } else {
          processAnchors(node);
        }
      });
    });
   });
   
   observer.observe(document.body, { childList: true, subtree: true });
   
   const loadMoreButton = document.getElementById('community_loadmore_btn');
   if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      setTimeout(() => processAnchors(), 500);
    });
   }