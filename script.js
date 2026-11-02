
// =========================
// HAMBURGER MENU
// =========================

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen =
      menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute(
      'aria-expanded',
      String(!isOpen)
    );

    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'メニューを開く' : 'メニューを閉じる'
    );

    navigation.classList.toggle('is-open', !isOpen);
  });

  // ナビゲーションのリンクを押したら閉じる
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeNavigation();
    });
  });

  // PCサイズに戻ったらメニューを閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 950) {
      closeNavigation();
    }
  });

  // Escapeキーでも閉じられるようにする
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

  function closeNavigation() {
    navigation.classList.remove('is-open');

    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
  }
}


// =========================
// MENU CATEGORY FILTER
// =========================

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    // 選択中のボタンの見た目を変更
    filterButtons.forEach((btn) => {
      const isSelected = btn === button;

      btn.classList.toggle('active', isSelected);

      btn.setAttribute(
        'aria-pressed',
        String(isSelected)
      );
    });

    // カテゴリに応じて商品を表示・非表示
    menuCards.forEach((card) => {
      const shouldShow =
        selectedCategory === 'all' ||
        card.dataset.category === selectedCategory;

      card.hidden = !shouldShow;
    });
  });
});


// =========================
// CONTACT FORM DEMO
// =========================

const contactForm = document.querySelector('#contact-form');
const formResult = document.querySelector('#form-result');

if (contactForm && formResult) {
  contactForm.addEventListener('submit', (event) => {
    // 実際の送信を防ぐ
    event.preventDefault();

    // 必須項目やメール形式を確認
    if (!contactForm.reportValidity()) {
      return;
    }

    // 入力チェック完了のメッセージ
    formResult.textContent =
      '入力内容のチェックが完了しました。' +
      'これはデモフォームのため、' +
      'メッセージは送信されていません。';
  });

  // 入力内容を変更したら確認結果を消す
  contactForm.addEventListener('input', () => {
    formResult.textContent = '';
  });

  contactForm.addEventListener('change', () => {
    formResult.textContent = '';
  });
}
