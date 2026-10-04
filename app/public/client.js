const root=document.querySelector('#app');
root.innerHTML=`<main class="game"><video id="themeVideoBg" class="themeVideoBg hidden" src="https://kiss-meet-club.higgsfield.app/theme-instagram.mp4" autoplay muted loop playsinline preload="auto"></video><section class="table"><div class="top"><div class="heart"><span class="heartIcon">♥</span><b id="heartBalance">0</b></div><div class="navicons"><button class="roundIcon trophyPhotoBtn" type="button" aria-label="Рейтинг"><img class="navRefIcon" src="/assets/nav-trophy-ref.png?v=1" alt=""></button><button class="shareTopBtn" id="shareTopBtn" type="button" title="Запросы в друзья" aria-label="Запросы в друзья"><img class="navRefIcon" src="/assets/nav-mail-ref.png?v=1" alt=""></button><button class="themeQuick themeTopBtn" id="themeBtn" type="button" title="Сменить фон" aria-label="Сменить фон"><img class="navRefIcon" src="/assets/nav-theme-ref.png?v=1" alt=""></button><button class="roundIcon settingsPhotoBtn" id="settingsBtn" type="button" aria-label="Настройки"><img class="navRefIcon" src="/assets/nav-settings-ref.png?v=1" alt=""></button></div><div class="topRight"><button class="neonTableBtn" id="tableButton" type="button" title="Стол 165" aria-label="Стол 165"><span class="neonTableText"><b>Стол</b><strong>165</strong></span><span class="neonTableOrb" aria-hidden="true"><span class="neonSnake">⌁</span></span></button></div></div><div class="roomStats"></div><div class="people" id="players"></div><div class="centerBottle"><div class="turnText" id="turnText">Ждём следующего хода</div><div class="rouletteItemWrap"><div class="rouletteItem" id="bottle" aria-label="Предмет рулетки"><span class="rouletteGlyph" id="rouletteGlyph">🪕</span></div></div><button class="spin" id="spin" type="button">Крутить</button></div><section class="pairScene hidden" id="heartDuel" data-state="choice" aria-label="Выбор пары"><div class="pairSceneHeader"><span id="pairSceneTitle">Твой выбор</span><span id="pairSceneSeconds" aria-label="Секунд осталось">9</span></div><div class="pairSceneStage"><div class="pairSceneCard"><div class="pairScenePhoto" id="heartDuelMePhoto" role="img"></div><div class="pairSceneName" id="heartDuelMeName"></div></div><svg class="pairSceneLink" viewBox="0 0 352 280" aria-hidden="true"><g class="pairSceneForward"><path class="pairSceneArrowOutline" d="M96 60 Q176 -2 270 65 M244 65 H270 V40"/><path class="pairSceneArrowColor" d="M96 60 Q176 -2 270 65 M244 65 H270 V40"/><circle class="pairSceneBadge" cx="176" cy="27" r="22"/><g class="pairSceneLips" transform="translate(176 27)"><path d="M-14 0 C-10-4-7-8-2-5 L0-4 L2-5 C7-8 10-4 14 0 C9 10-9 10-14 0Z"/><path class="pairSceneLipLine" d="M-10 0 Q0 4 10 0"/></g></g><g class="pairSceneBack"><path class="pairSceneArrowOutline" d="M258 219 Q176 282 88 218 M88 242 V218 H113"/><path class="pairSceneArrowColor" d="M258 219 Q176 282 88 218 M88 242 V218 H113"/><circle class="pairSceneBadge" cx="176" cy="249" r="22"/><g class="pairSceneLips" transform="translate(176 249)"><path d="M-14 0 C-10-4-7-8-2-5 L0-4 L2-5 C7-8 10-4 14 0 C9 10-9 10-14 0Z"/><path class="pairSceneLipLine" d="M-10 0 Q0 4 10 0"/></g></g></svg><div class="pairSceneCard"><div class="pairScenePhoto" id="heartDuelTargetPhoto" role="img"></div><div class="pairSceneName" id="heartDuelTargetName"></div></div></div><div class="pairSceneActions"><button id="pairSceneRefuse" type="button">Отказать</button><button id="pairSceneKiss" type="button">Поцеловать</button></div><span class="pairSceneAnnounce" id="heartDuelNote" role="status" aria-live="polite"></span></section><div class="giftfx" id="giftfx"></div><div class="themePicker hidden" id="themePicker"><button class="themeBackdrop" id="themeBackdrop" type="button"></button><div class="themePanel themePanelCompact themePanelGrid"><div class="themeGridHead"><b class="placesTitle">Темы фона · 50+</b><button id="themeClose" type="button" aria-label="Закрыть">×</button></div><button class="themeBack hidden" id="themeBack" type="button" aria-label="Назад">‹</button><b id="themeTitle" class="hidden">Выбери фон</b><div class="themeGrid hidden" id="themeGrid"></div><div class="romanticPlaces compactThemePlaces"><div id="placeGallery" class="placeGallery compactPlaceGallery themeSixGrid"></div></div></div></div></section><section class="chatArea" id="chatArea"><div class="tableMediaTools"><button class="chatTool youtubeQuick" id="youtubeBtn" title="YouTube" aria-label="YouTube"><span class="ytIcon">▶</span><span class="ytText">YouTube</span></button><button class="chatTool liveTalkBtn" id="headphonesBtn" title="Живой голосовой чат" aria-label="Живой голосовой чат"><svg viewBox="0 0 32 32" aria-hidden="true"><circle class="talkHead" cx="11" cy="10" r="4.2"/><path class="talkBody" d="M4.8 23c.7-5 3.1-7.5 6.2-7.5s5.5 2.5 6.2 7.5"/><path class="talkWave wave1" d="M20 9.5c2 1.5 2 5.5 0 7"/><path class="talkWave wave2" d="M24 6.5c3.7 3.2 3.7 9.8 0 13"/></svg></button><button class="chatTool" id="uploadBtn" title="Фото / видео" aria-label="Фото / видео">🎬</button></div><div class="mediaFloating hidden" id="mediaBox"><div class="mediaHead"><b id="mediaTitle">Видео</b><button id="closeMedia" aria-label="Закрыть видео">×</button></div><div class="mediaFrame" id="videoFrame">🎬</div></div><div class="feed" id="feed"></div><div class="composer"><input id="msg" maxlength="280" placeholder="Написать комментарий" autocomplete="off"><button class="send" id="send" type="button" aria-label="Отправить комментарий">➤</button></div></section></main><div class="playerSheet hidden" id="playerSheet"><button class="sheetBackdrop" id="sheetBackdrop"></button><div class="sheetCard giftCard"><div class="giftCompactHead"><div class="giftRecipient"><div class="sheetPhoto" id="sheetPhoto"></div><div class="giftRecipientText"><b id="sheetName">Игрок</b><span id="sheetHint">Отправить подарок</span></div></div><div class="giftToolbar"><div class="giftToolbarTitle"><b id="giftToolbarTitle" class="giftToolbarMirror">Игрок</b><button class="giftSound" id="giftSound" type="button" aria-label="Звук подарков">🔊</button></div><div class="giftToolbarActions"><button class="giftMiniAction giftYoutubeBtn" id="giftYoutubeBtn" type="button" aria-label="YouTube"><span class="giftYoutubeMark">▶</span><span class="giftMiniLabel">YouTube</span></button><button class="giftMiniAction giftKickBtn" id="giftKickBtn" type="button" aria-label="Выгнать игрока на 15 минут"><span class="giftMiniIcon">🚪</span><span class="giftMiniLabel">15 мин</span></button><button class="giftMiniAction giftBlockBtn" id="giftBlockBtn" type="button" aria-label="Заблокировать игрока"><span class="giftMiniIcon">🚫</span><span class="giftMiniLabel">Блок</span></button><button class="sheetClose toolbarClose" id="sheetClose" type="button" aria-label="Закрыть">×</button></div></div></div><div class="giftEmotionPanel hidden" id="giftEmotionPanel"><div class="emotionGrid" id="emotionGrid"></div></div><div class="giftTabs" id="giftTabs"><button data-gift-cat="emotion">🎁 Подарки</button><button class="active" data-gift-cat="popular">🔥 Популярные</button><button data-gift-cat="friendly">💕 суйуу</button><button data-gift-cat="fun">😂 Приколы</button><button data-gift-cat="style">😎 vibe</button><button data-gift-cat="tiktok">🎵 TikTok</button><button data-gift-cat="luxury">👑 насаат</button><button data-gift-cat="epic">✨ молодеж kg</button><button data-gift-cat="food">🍔 aitysh duinosu</button></div><div class="sheetGifts tiktokGifts" id="sheetGiftbar"></div><div class="giftFooter" id="giftFooter"><button id="giftTopup" class="giftBalancePill giftBalanceButton" type="button" aria-label="Баланс, пополнить"><span>♥</span><strong id="giftBalance">0</strong></button><div class="giftSelected" id="giftSelected"><span>Выбери подарок</span></div><button id="giftSendBtn" class="giftSendBtn" type="button" disabled>Подарить</button></div></div></div><div class="giftEpicOverlay hidden" id="giftEpicOverlay" aria-hidden="true"><div class="giftEpicBackdrop"></div><div class="giftEpicStage"><div class="giftEpicAura"></div><div class="giftEpicEmoji" id="giftEpicEmoji">🦁</div><div class="giftEpicTitle" id="giftEpicTitle">Лев</div><div class="giftEpicRoute" id="giftEpicRoute"></div><div class="giftEpicParticles"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><div class="playerProfile hidden" id="playerProfile"><button class="profileBackdrop" id="profileBackdrop"></button><div class="profileCard profileExact"><button class="profileClose" id="profileClose" aria-label="Закрыть">×</button><div class="profileHero" id="profileHero"><div class="profileExactInfo"><b id="profileName">Игрок</b><div class="profileStats"><span>💋 <b id="profileKisses">0</b></span><span>♟ <b id="profileLikes">0</b></span></div></div><div class="profileHeroQuickActions"><button id="courtshipBtn" class="profileCareBtn" type="button">💛 Ухаживать</button></div></div><div class="profileBelow"><div class="profileGallery" id="profileGallery"></div><div class="profileActionBar"><button type="button" class="profileMsgBtn">💬 <span>Написать</span></button><button type="button" class="profileGiftBtn">🎁 <span>Подарок</span></button></div><div class="profileRelationGrid"><div class="courtshipBox" id="courtshipBox"><div class="courtshipVisual"><div class="courtshipAvatar" id="courtshipAvatar"></div></div><div class="courtshipInfo"><div class="courtshipEyebrow">УХАЖЁР</div><div class="courtshipNameRow"><b id="courtshipName">Player 1</b></div><div class="courtshipBottomRow"><span class="courtshipHeartStat">♥ <b id="courtshipHearts">26</b></span><span class="courtshipRankLine" id="courtshipRank">3088 в рейтинге</span></div></div></div><div class="friendsBox"><div class="friendsScenePhoto" aria-hidden="true"></div><button id="profileFriendsBtn" class="profileFriendsBtn" type="button">Дружить</button></div></div></div></div></div><div class="settingsOverlay hidden" id="settingsOverlay"><button class="settingsBackdrop" id="settingsBackdrop" type="button" aria-label="Закрыть"></button><section class="settingsCard settingsClassic" role="dialog" aria-modal="true"><div class="settingsMenuView" id="settingsMenuView"><div class="settingsHead"><b>Настройки</b><div class="settingsHeadActions"><button class="friendInboxBtn" id="friendInboxBtn" type="button" aria-label="Запросы в друзья"><span class="paperPlaneIcon">➤</span><i id="friendInboxBadge" class="hidden">0</i></button><button id="settingsClose" type="button">×</button></div></div><div class="settingsRows"><div class="settingsRow"><span class="settingsRowIcon">🔊</span><span>Звуки</span><button class="settingsSwitch" id="soundToggle" type="button" aria-label="Звуки"><i></i></button></div><div class="settingsRow"><span class="settingsRowIcon">🎵</span><span>Музыка</span><button class="settingsSwitch active" id="musicToggle" type="button" aria-label="Музыка"><i></i></button></div><button class="settingsRow settingsRowButton" id="inviteFriendsBtn" type="button"><span class="settingsRowIcon">🧑‍🤝‍🧑</span><span>Пригласить друзей</span></button><button class="settingsRow settingsRowButton" id="friendsSettingsBtn" type="button"><span class="settingsRowIcon">👥</span><span>Друзья</span><b>›</b></button><button class="settingsRow settingsRowButton" id="profileSettingsBtn" type="button"><span class="settingsRowIcon">🪪</span><span>Настройки профиля</span><b>›</b></button><button class="settingsRow settingsRowButton" id="languageSettingsBtn" type="button"><span class="settingsRowIcon">🌐</span><span id="settingsLanguageLabel">Язык</span><b>›</b></button><button class="settingsRow settingsRowButton" id="rouletteSettingsBtn" type="button"><span class="settingsRowIcon">🎲</span><span>Предмет для кручения</span><b>›</b></button><button class="settingsRow settingsRowButton danger" id="logoutBtn" type="button"><span class="settingsRowIcon">🚪</span><span>Выйти</span></button><button class="settingsRow settingsRowButton danger accountDelete" id="deleteAccountBtn" type="button"><span class="settingsRowIcon">🗑️</span><span>Удалить аккаунт</span></button></div></div><div class="settingsFriendRequestsView hidden" id="settingsFriendRequestsView"><div class="settingsHead"><button class="settingsBack" id="settingsFriendRequestsBack" type="button">‹</button><b>Запросы в друзья</b><button id="settingsFriendRequestsClose" type="button">×</button></div><div class="friendRequestsList" id="friendRequestsList"></div></div><div class="settingsFriendsView hidden" id="settingsFriendsView"><div class="settingsHead"><button class="settingsBack" id="settingsFriendsBack" type="button">‹</button><b>Друзья</b><button id="settingsFriendsClose" type="button">×</button></div><div class="friendsManageTabs" id="friendsManageTabs"><button class="active" type="button" data-friends-tab="friends">Друзья <i id="friendsCountBadge">0</i></button><button type="button" data-friends-tab="people">Поиск людей <i>⌕</i></button><button class="ownerOnlyTab hidden" type="button" data-friends-tab="blocked">Заблокированные <i id="blockedCountBadge">0</i></button></div><label class="friendsManageSearch"><span>⌕</span><input id="friendsManageSearchInput" type="search" autocomplete="off" placeholder="Поиск людей"></label><div class="friendsManageList" id="friendsManageList"></div></div><div class="settingsRouletteView hidden" id="settingsRouletteView"><div class="settingsHead"><button class="settingsBack" id="settingsRouletteBack" type="button">‹</button><b>Предмет для кручения</b><button id="settingsRouletteClose" type="button">×</button></div><div class="rouletteOptions"><button type="button" data-roulette-item="komuz"><span class="rouletteOptionVisual"><img src="/assets/komuz-real.png?v=2" alt="Комуз"></span><b>Комуз</b><i>✓</i></button><button type="button" data-roulette-item="guitar"><span class="rouletteOptionVisual"><img src="/assets/guitar-real.png?v=1" alt="Гитара"></span><b>Гитара</b><i>✓</i></button><button type="button" data-roulette-item="shoro"><span class="rouletteOptionVisual"><img src="/assets/shoro-real.png?v=1" alt="Шоро"></span><b>Шоро</b><i>✓</i></button><button type="button" data-roulette-item="duches"><span class="rouletteOptionVisual"><img src="/assets/duches-real.png?v=1" alt="Дюшес"></span><b>Дюшес</b><i>✓</i></button><button type="button" data-roulette-item="bishkek"><span class="rouletteOptionVisual"><img src="/assets/bishkek-real.png?v=1" alt="Бишкек"></span><b>Бишкек</b><i>✓</i></button><button type="button" data-roulette-item="cognac"><span class="rouletteOptionVisual"><img src="/assets/kyrgyzstan-cognac-real.png?v=1" alt="Кыргызстан коньяк"></span><b>Кыргызстан коньяк</b><i>✓</i></button><button type="button" data-roulette-item="cola"><span class="rouletteOptionVisual"><img src="/assets/cola-real.png?v=1" alt="Кола"></span><b>Кола</b><i>✓</i></button><button type="button" data-roulette-item="champagne"><span class="rouletteOptionVisual"><img src="/assets/champagne-real.png?v=1" alt="Шампанское"></span><b>Шампанское</b><i>✓</i></button><button type="button" data-roulette-item="darkbottle"><span class="rouletteOptionVisual"><img src="/assets/dark-bottle-real.png?v=1" alt="Тёмная бутылка"></span><b>Тёмная бутылка</b><i>✓</i></button><button type="button" data-roulette-item="beerbottle"><span class="rouletteOptionVisual"><img src="/assets/beer-bottle-real.png?v=1" alt="Светлое пиво"></span><b>Светлое пиво</b><i>✓</i></button><button type="button" data-roulette-item="arpa"><span class="rouletteOptionVisual"><img src="/assets/arpa-real.png?v=1" alt="Арпа"></span><b>Арпа</b><i>✓</i></button><button type="button" data-roulette-item="nashapivo"><span class="rouletteOptionVisual"><img src="/assets/nasha-pivo-real.png?v=1" alt="Наша пиво"></span><b>Наша пиво</b><i>✓</i></button><button type="button" data-roulette-item="tan"><span class="rouletteOptionVisual"><img src="/assets/tan-real.png?v=1" alt="Таң"></span><b>Таң</b><i>✓</i></button><button type="button" data-roulette-item="jalalabad"><span class="rouletteOptionVisual"><img src="/assets/jalal-abad-real.png?v=1" alt="Жалал-Абад"></span><b>Жалал-Абад</b><i>✓</i></button><button type="button" data-roulette-item="kymyz"><span class="rouletteOptionVisual"><img src="/assets/kymyz-real.png?v=1" alt="Кымыз"></span><b>Кымыз</b><i>✓</i></button><button type="button" data-roulette-item="vip"><span class="rouletteOptionVisual"><img src="/assets/vip-real.png?v=1" alt="VIP"></span><b>VIP</b><i>✓</i></button><button type="button" data-roulette-item="automat"><span class="rouletteOptionVisual"><img src="/assets/automat-real.png?v=1" alt="Автомат"></span><b>Автомат</b><i>✓</i></button><button type="button" data-roulette-item="shypyrgy"><span class="rouletteOptionVisual"><img src="/assets/shypyrgy-real.png?v=1" alt="Шыпыргы"></span><b>Шыпыргы</b><i>✓</i></button><button type="button" data-roulette-item="heart"><span class="rouletteOptionVisual"><img src="/assets/cupid-real.png?v=5" alt="Купидон"></span><b>Купидон</b><i>✓</i></button></div></div><div class="settingsLanguageView hidden" id="settingsLanguageView"><div class="settingsHead"><button class="settingsBack" id="settingsLanguageBack" type="button">‹</button><b id="languageViewTitle">Язык</b><button id="settingsLanguageClose" type="button">×</button></div><div class="languageOptions" id="languageOptions"><button type="button" data-app-lang="ky"><span>🇰🇬</span><b>Кыргызча</b><i>✓</i></button><button type="button" data-app-lang="ru"><span>🇷🇺</span><b>Русский</b><i>✓</i></button><button type="button" data-app-lang="uz"><span>🇺🇿</span><b>O‘zbekcha</b><i>✓</i></button><button type="button" data-app-lang="kk"><span>🇰🇿</span><b>Қазақша</b><i>✓</i></button><button type="button" data-app-lang="tr"><span>🇹🇷</span><b>Türkçe</b><i>✓</i></button><button type="button" data-app-lang="en"><span>🇬🇧</span><b>English</b><i>✓</i></button></div></div><div class="settingsProfileView hidden" id="settingsProfileView"><div class="settingsHead"><button class="settingsBack" id="settingsProfileBack" type="button">‹</button><b>Профиль</b><button id="settingsProfileClose" type="button">×</button></div><div class="profilePhotoEditor"><button class="profilePhotoMain" id="profilePhotoMain" type="button"><span>Главное фото</span></button><div class="profilePhotoGrid"><button class="profilePhotoExtra" data-photo-slot="1" type="button"><span>+ Фото</span></button><button class="profilePhotoExtra" data-photo-slot="2" type="button"><span>+ Фото</span></button><button class="profilePhotoExtra" data-photo-slot="3" type="button"><span>+ Фото</span></button></div></div><div class="profileFields"><label>Имя<input id="profileDisplayName" type="text" maxlength="24" placeholder="Ваше имя"></label><label class="compactField">Дата рождения<input id="profileBirthDate" type="date"></label><div class="profileGender compactGender"><span>Пол</span><div><button type="button" data-gender="male">Мужской</button><button type="button" data-gender="female">Женский</button></div></div></div><button class="settingsSave" id="profileSettingsSave" type="button">Сохранить профиль</button><input type="file" id="profilePhotoInput" accept="image/*" hidden></div></section></div><div class="rankingOverlay hidden" id="rankingOverlay"><button class="rankingBackdrop" id="rankingBackdrop" type="button" aria-label="Закрыть"></button><section class="rankingCard" role="dialog" aria-modal="true"><button class="rankingClose" id="rankingClose" type="button" aria-label="Закрыть">×</button><div class="rankingTabs" id="rankingTabs"><button class="active" type="button" data-rank-type="kiss" aria-label="Поцелуи">💋</button><button type="button" data-rank-type="music" aria-label="Музыка">🎵</button><button type="button" data-rank-type="heart" aria-label="Сердца">♥</button><button type="button" data-rank-type="influence" aria-label="Влияние">💕</button></div><div class="rankingHeader"><h3 id="rankingTitle">Самые зацелованные</h3><div class="rankingPeriod"><button id="rankingPeriodBtn" type="button"><span id="rankingPeriodLabel">за месяц</span><b>⌄</b></button><div class="rankingPeriodMenu hidden" id="rankingPeriodMenu"><button type="button" data-rank-period="all">за все время</button><button class="active" type="button" data-rank-period="month">за месяц</button><button type="button" data-rank-period="week">за неделю</button><button type="button" data-rank-period="day">за день</button></div></div></div><div class="rankingList" id="rankingList"></div><div class="rankingFootNote">Топ-10 лучших игроков</div><div class="rankingMe" id="rankingMe"></div></section></div><div class="youtubeLibrary hidden" id="youtubeLibrary"><button class="ytBackdrop" id="ytBackdrop" aria-label="Закрыть"></button><section class="ytPanel" role="dialog" aria-modal="true" aria-labelledby="ytLibraryTitle"><button class="ytClose" id="ytClose" aria-label="Закрыть">×</button><div class="ytTabs"><button class="ytTab active" data-yt-tab="popular" title="Популярное">🔥</button><button class="ytTab" data-yt-tab="favorites" title="Избранное">★</button><button class="ytTab" data-yt-tab="history" title="История">◷</button><button class="ytTab" data-yt-tab="search" title="Поиск">⌕</button></div><h3 id="ytLibraryTitle">Поставить видео из популярного</h3><div class="ytSearchRow hidden" id="ytSearchRow"><input id="ytSearchInput" autocomplete="off" placeholder="Поиск по каталогу"></div><div class="ytGrid" id="ytGrid"></div></section></div><div class="giftPayConfirm hidden" id="giftConfirm"><button class="giftPayBackdrop" id="giftConfirmBackdrop" type="button" aria-label="Закрыть"></button><section class="giftPayCard" role="dialog" aria-modal="true" aria-labelledby="giftConfirmTitle"><button class="giftPayClose" id="giftConfirmClose" type="button" aria-label="Закрыть">×</button><h3 id="giftConfirmTitle">Отправить подарок</h3><div class="giftPayPreview" id="giftConfirmPreview"><span id="giftConfirmEmoji">🎁</span><img id="giftConfirmThumb" alt=""><video id="giftConfirmVideo" muted loop playsinline preload="metadata"></video></div><b class="giftPayName" id="giftConfirmName">Подарок</b><p class="giftPayText" id="giftConfirmText">Отправить подарок за ❤️ 9?</p><div class="giftPayBalance">Баланс: <strong id="giftConfirmBalance">0</strong> ❤️</div><div class="giftPayActions"><button class="giftPayCancel" id="giftConfirmCancel" type="button">Отмена</button><button class="giftPayBuy" id="giftConfirmBuy" type="button">Отправить · ❤️ 9</button></div></section></div><div class="youtubeConfirm hidden" id="youtubeConfirm"><button class="ytConfirmBackdrop" id="ytConfirmBackdrop" type="button" aria-label="Закрыть"></button><section class="ytConfirmCard" role="dialog" aria-modal="true" aria-labelledby="ytConfirmTitle"><button class="ytConfirmClose" id="ytConfirmClose" type="button" aria-label="Закрыть">×</button><h3 id="ytConfirmTitle">Поставить музыку из YouTube</h3><div class="ytConfirmPreview"><img id="ytConfirmThumb" alt=""><span class="ytConfirmPlay">▶</span></div><b class="ytConfirmSong" id="ytConfirmSong">YouTube</b><p class="ytConfirmText" id="ytConfirmText">Поставить музыку для игрока за ❤️ 9?</p><div class="ytConfirmBalance">Баланс: <strong id="ytConfirmBalance">0</strong> ❤️</div><div class="ytConfirmActions"><button class="ytConfirmCancel" id="ytConfirmCancel" type="button">Отмена</button><button class="ytConfirmBuy" id="ytConfirmBuy" type="button">Поставить · ❤️ 9</button></div></section></div><input type="file" id="file" accept="image/*,video/mp4,video/webm,video/quicktime" hidden><input type="file" id="customBgFile" accept="image/*" hidden><input type="file" id="customVideoBgFile" accept="video/mp4,video/webm,video/quicktime" hidden><div class="heartShop hidden" id="heartShop"><button class="heartShopBackdrop" id="heartShopBackdrop" type="button" aria-label="Закрыть"></button><section class="heartShopCard" role="dialog" aria-modal="true" aria-labelledby="heartShopTitle"><button class="heartShopClose" id="heartShopClose" type="button" aria-label="Закрыть">×</button><h3 id="heartShopTitle">Баланс</h3><div class="heartShopGrid"><div class="heartShopSectionLabel vipLabel">VIP</div><article class="heartOffer heartOfferVip"><div class="offerBadge">VIP</div><div class="offerArt">👑</div><b>VIP · месяц</b><small>5 ч голоса · 15 фото · 5 видео в день</small><button type="button" data-heart-info="vip">⭐ 1250</button></article><div class="heartShopSectionLabel heartsLabel">Сердечки</div><article class="heartOffer"><div class="offerTag">Выгодно</div><b class="offerAmount">❤️ 7000</b><small>40% БОНУС</small><div class="offerArt">🎁</div><button type="button" data-heart-pack="7000" data-stars="5000">⭐ 5000</button></article><article class="heartOffer"><b class="offerAmount">❤️ 3125</b><small>25% БОНУС</small><div class="offerArt">🧰</div><button type="button" data-heart-pack="3125" data-stars="2500">⭐ 2500</button></article><article class="heartOffer"><div class="offerTag hit">Хит</div><b class="offerAmount">❤️ 1200</b><small>20% БОНУС</small><div class="offerArt">🏺</div><button type="button" data-heart-pack="1200" data-stars="1000">⭐ 1000</button></article><article class="heartOffer"><b class="offerAmount">❤️ 500</b><small>Сердечки</small><div class="offerArt">🎒</div><button type="button" data-heart-pack="500" data-stars="500">⭐ 500</button></article><article class="heartOffer"><b class="offerAmount">❤️ 250</b><small>Сердечки</small><div class="offerArt">📦</div><button type="button" data-heart-pack="250" data-stars="250">⭐ 250</button></article><article class="heartOffer"><b class="offerAmount">❤️ 50</b><small>Сердечки</small><div class="offerArt">💞</div><button type="button" data-heart-pack="50" data-stars="50">⭐ 50</button></article></div><div class="heartShopFoot">Оплата будет проводиться через Telegram Stars ⭐</div></section></div><div class="vipInfoOverlay hidden" id="vipInfoOverlay"><button class="vipInfoBackdrop" id="vipInfoBackdrop" type="button" aria-label="Закрыть VIP"></button><section class="vipInfoCard" role="dialog" aria-modal="true" aria-labelledby="vipInfoTitle"><button class="vipInfoClose" id="vipInfoClose" type="button" aria-label="Закрыть">×</button><div class="vipInfoTop"><div class="vipPreviewAvatar"><span>👤</span><b>VIP</b><i>👑</i></div><div><small>DELBIRIM PREMIUM</small><h3 id="vipInfoTitle">VIP · ⭐ 1250 / месяц</h3><p>Премиум-возможности с дневными лимитами</p></div></div><div class="vipPerkGrid"><article><span>🎙️</span><div><b>Живой голос · 5 часов</b><small>До 5 часов живого голосового общения в сутки. Голосовых сообщений нет.</small></div></article><article><span>📷</span><div><b>15 фото в день</b><small>Фото из галереи показывается как временный эффект и исчезает через 30 секунд.</small></div></article><article><span>🎬</span><div><b>5 видео в день</b><small>Видео из галереи до 60 секунд, проигрывается как временный эффект и исчезает.</small></div></article><article><span>🚪</span><div><b>Управление комнатой</b><small>VIP-хозяин может удалить нарушителя из своей комнаты.</small></div></article><article><span>👑</span><div><b>VIP на фотографии</b><small>После оформления на фото игрока появляется заметный VIP-бейдж.</small></div></article><article><span>🎁</span><div><b>VIP-подарки и оформление</b><small>Премиальные подарки, эффекты, рамка профиля и выделение игрока.</small></div></article></div><div class="vipUsageSummary" id="vipUsageSummary">Лимиты обновляются каждый день</div><button class="vipInfoBuy" id="vipInfoBuy" type="button" data-vip-stars="1250">👑 VIP · ⭐ 1250 / месяц</button></section></div><div class="toast" id="toast"></div>`;

// DELBIRIM community safety: reporting and basic chat moderation.
function moderateOutgoingChat(text){
  const value=String(text||'').toLowerCase();
  const blocked=[/\b(?:убью|убить|сдохни|kill\s+you|kill\s+yourself|kys)\b/i,/\b(?:расист|nazi|hitler)\w*/i];
  return value.length<=500&&!blocked.some(rx=>rx.test(value));
}
function setupCommunitySafetyControls(){
  const bar=document.querySelector('.profileActionBar');
  if(bar&&!bar.querySelector('.profileReportBtn')){
    const report=document.createElement('button');report.type='button';report.className='profileReportBtn';report.innerHTML='⚑ <span>Жалоба</span>';bar.appendChild(report);
    report.addEventListener('click',()=>{
      const name=document.querySelector('#profileName')?.textContent||'Игрок';
      const reason=prompt(`Почему вы хотите пожаловаться на ${name}?`,'Спам / оскорбления');if(!reason)return;
      let reports=[];try{reports=JSON.parse(localStorage.getItem('delbirim.moderation.reports')||'[]')}catch{}
      reports.push({target:name,reason:String(reason).slice(0,240),createdAt:Date.now()});
      try{localStorage.setItem('delbirim.moderation.reports',JSON.stringify(reports.slice(-50)))}catch{}
      try{toast('Жалоба отправлена в модерацию')}catch{alert('Жалоба отправлена в модерацию')}
    });
  }
}
setupCommunitySafetyControls();

const DEMO=[['Айдана, 27',47,'🌻',68,'female'],['Бекзат, 30',12,'🧁',40,'male'],['Алина, 25',44,'📺',37,'female'],['Тимур, 31',11,'🌼',64,'male'],['Айгерим, 28',45,'🧸',44,'female','https://www.youtube.com/watch?v=jNQXAC9IVRw'],['Нурбек, 29',13,'🥃',19,'male'],['Сабина, 26',49,'☕',7,'female'],['Арсен, 32',15,'💎',5,'male'],['Малика, 24',48,'💖',23,'female'],['Данияр, 33',14,'👑',11,'male'],['София, 29',43,'🌹',31,'female']].map(([name,img,gift,badge,gender,video])=>({name,photo:`https://i.pravatar.cc/300?img=${img}`,gift,badge,gender,video}));
const POS=[[14,16],[38,8],[62,8],[86,16],[9,42],[91,42],[9,68],[91,68],[26,88],[50,94],[74,88]];
const MOBILE_POS=[[14,17],[38,8],[62,8],[86,17],[11,46],[89,46],[11,74],[89,74],[29,90],[50,94],[71,90]];
function safeMediaAsset(value){
  if(!value)return '';
  try{
    const u=new URL(String(value),location.origin);
    if(u.origin===location.origin)return u.href;
    if(u.protocol==='https:')return u.href;
  }catch{}
  return '';
}
const GIFT_DATA=await fetch('/gift-catalog.json',{cache:'no-store'}).then(r=>r.ok?r.json():Promise.reject()).catch(()=>({gifts:[],specialMedia:{}}));
const FALLBACK_GIFTS=Array.isArray(GIFT_DATA.gifts)?GIFT_DATA.gifts.map(g=>({...g,thumb:safeMediaAsset(g.thumb),videoUrl:safeMediaAsset(g.videoUrl)})):[];
const SPECIAL_MEDIA=GIFT_DATA.specialMedia||{};;
const GIFT_EMOJI=Object.fromEntries(FALLBACK_GIFTS.map(g=>[g.id,g.emoji]));
const YT_CATALOG=[{id:'fHI8X4OXluQ',title:'The Weeknd — Blinding Lights',duration:'04:22'},{id:'TUVcZfQe-Kw',title:'Dua Lipa — Levitating',duration:'03:51'},{id:'JGwWNGJdvx8',title:'Ed Sheeran — Shape of You',duration:'04:24'},{id:'7wtfhZwyrcc',title:'Imagine Dragons — Believer',duration:'03:37'},{id:'U3ASj1L6_sY',title:'Adele — Easy On Me',duration:'05:31'},{id:'hT_nvWreIhg',title:'OneRepublic — Counting Stars',duration:'04:44'},{id:'pRpeEdMmmQ0',title:'Shakira — Waka Waka',duration:'03:31'},{id:'QtXby3twMmI',title:'Coldplay — Adventure of a Lifetime',duration:'05:16'},{id:'OPf0YbXqDm0',title:'Mark Ronson ft. Bruno Mars — Uptown Funk',duration:'04:30'},{id:'CevxZvSJLk8',title:'Katy Perry — Roar',duration:'04:30'}];
const I18N={ru:{spin:'Крутить',need:'Нужен ещё один игрок',your:'Ваш ход',turn:'Ход: {name}',pick:'Бутылочка выбрала {name}',msg:'Написать сообщение',gift:'Выберите игрока',unlock:'Подарок отправлен',voice:'Сначала включите Premium',room:'Комната готова',video:'добавил(а) видео',spinResult:'бутылочка выбрала',balcony:'Балкон',guests:'Гости',balconyMode:'Вы на балконе — пишите в чат и отправляйте подарки гостям',translation:'Показать перевод',demo:'Демо-профиль',self:'Это вы',sendGift:'Отправить подарок',playerVideo:'Видео {name}',noVideo:'У игрока пока нет видео',watching:'YouTube открыт',addToProfile:'Поставить в профиль'},ky:{spin:'Айлантуу',need:'Дагы бир оюнчу керек',your:'Сиздин кезек',turn:'Кезек: {name}',pick:'Бөтөлкө {name} тандады',msg:'Билдирүү жазыңыз',gift:'Оюнчуну тандаңыз',unlock:'Белек жөнөтүлдү',voice:'Адегенде Premium күйгүзүңүз',room:'Бөлмө даяр',video:'видео кошту',spinResult:'бөтөлкө тандады',balcony:'Балкон',guests:'Коноктор',balconyMode:'Сиз балкондосуз — чатка жазыңыз жана конокторго белек жөнөтүңүз',translation:'Котормону көрсөтүү',demo:'Демо профиль',self:'Бул сиз',sendGift:'Белек жөнөтүү',playerVideo:'{name} видеосу',noVideo:'Бул оюнчуда азырынча видео жок',watching:'YouTube ачылды',addToProfile:'Профилге кошуу'},kk:{spin:'Айналдыру',need:'Тағы бір ойыншы керек',your:'Сіздің кезегіңіз',turn:'Кезек: {name}',pick:'Бөтелке {name} таңдады',msg:'Хабарлама жазыңыз',gift:'Ойыншыны таңдаңыз',unlock:'Сыйлық жіберілді',voice:'Алдымен Premium қосыңыз',room:'Бөлме дайын',video:'видео қосты',spinResult:'бөтелке таңдады',balcony:'Балкон',guests:'Қонақтар',balconyMode:'Сіз балкондасыз — чатқа жазыңыз және қонақтарға сыйлық жіберіңіз',translation:'Аударманы көрсету',demo:'Демо профиль',self:'Бұл сіз',sendGift:'Сыйлық жіберу',playerVideo:'{name} видеосы',noVideo:'Бұл ойыншыда әзірге видео жоқ',watching:'YouTube ашылды',addToProfile:'Профильге қосу'},uz:{spin:'Aylantirish',need:'Yana bir o‘yinchi kerak',your:'Sizning navbatingiz',turn:'Navbat: {name}',pick:'Shisha {name}ni tanladi',msg:'Xabar yozing',gift:'O‘yinchini tanlang',unlock:'Sovg‘a yuborildi',voice:'Avval Premium ni yoqing',room:'Xona tayyor',video:'video qo‘shdi',spinResult:'shisha tanladi',balcony:'Balkon',guests:'Mehmonlar',balconyMode:'Siz balkondasiz — chat yozing va mehmonlarga sovg‘a yuboring',translation:'Tarjimani ko‘rsatish',demo:'Demo profil',self:'Bu siz',sendGift:'Sovg‘a yuborish',playerVideo:'{name} videosi',noVideo:'Bu o‘yinchida hozircha video yo‘q',watching:'YouTube ochildi',addToProfile:'Profilga qo‘shish'},en:{spin:'Spin',need:'One more player needed',your:'Your turn',turn:'Turn: {name}',pick:'The bottle picked {name}',msg:'Write a message',gift:'Choose a player',unlock:'Gift sent',voice:'Enable Premium first',room:'Room ready',video:'added a video',spinResult:'the bottle picked',balcony:'Balcony',guests:'Guests',balconyMode:'You are on the balcony — chat and send gifts to guests',translation:'Show translation',demo:'Demo profile',self:'This is you',sendGift:'Send a gift',playerVideo:'{name} video',noVideo:'This player has no video yet',watching:'YouTube opened',addToProfile:'Add to profile'}};
const $=s=>document.querySelector(s),qp=new URLSearchParams(location.search),room=(qp.get('room')||'main').replace(/[^A-Za-z0-9_-]/g,'').slice(0,64)||'main';
const playerId=localStorage.getItem('kissmeet.pid')||crypto.randomUUID().slice(0,10);localStorage.setItem('kissmeet.pid',playerId);
const DELBIRIM_OWNER_TOKEN='1ZcAs9Qb8aUOvn19S8CxGVnJ3jaTNeSe';
if(qp.get('owner')===DELBIRIM_OWNER_TOKEN){try{localStorage.setItem('kissmeet.ownerUnlimited','1');localStorage.setItem('kissmeet.ownerAccountId',String(playerId))}catch{};qp.delete('owner');const clean=location.pathname+(qp.toString()?`?${qp.toString()}`:'')+location.hash;try{history.replaceState(null,'',clean)}catch{}}
function isOwnerAccount(){try{if(localStorage.getItem('kissmeet.ownerUnlimited')!=='1')return false;let id=localStorage.getItem('kissmeet.ownerAccountId');if(!id){id=String(playerId);localStorage.setItem('kissmeet.ownerAccountId',id)}return id===String(playerId)}catch{return false}}
function isOwnerUnlimited(){return isOwnerAccount()}
function heartBalanceLabel(v){return isOwnerUnlimited()?'∞':String(Math.max(0,Math.floor(Number(v)||0)))}
let lang=localStorage.getItem('kissmeet.lang')||'ru',socket,lastMsg,selectedTarget=null,selectedDemo=null,selectedPlayer=null,selectedSlot=null,selectedGiftId=null,giftCategory='popular',giftEventCursor=null,premium=false,recorder,chunks=[],demoAngle=0,demoSpinning=false,pendingGiftYoutubeTarget=null,pendingYoutubePurchase=null,pendingGiftPurchase=null;
const localRoomActivity=[];
const machoSpitPlayers=new Set();if(!I18N[lang])lang='ru';const roomLabel=room==='main'?'118':room.slice(-4);
const tr=(k,v={})=>{let s=(I18N[lang]||I18N.ru)[k]||k;for(const[a,b]of Object.entries(v))s=s.replace(`{${a}}`,b);return s};
function esc(s){return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]||c))}function toast(x){const e=$('#toast');e.textContent=x;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),1800)}function send(action){if(socket?.readyState===1)socket.send(JSON.stringify({type:'action',action}))}function profile(id){return lastMsg?.view?.profiles?.[id]||{name:id}}function nameOf(id){return profile(id).name||id}function initials(s){return String(s).split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase()}function hashString(s){let h=0;for(const ch of String(s))h=(h*31+ch.charCodeAt(0))>>>0;return h}function photoFor(id,i=0){return`https://i.pravatar.cc/300?img=${((hashString(id)+i*7)%60)+1}`}
function roomActorName(){return localStorage.getItem('kissmeet.profile.name')||document.querySelector('.person.self .name')?.textContent||'Player 1'}
function roomActorPhoto(){return localStorage.getItem('kissmeet.profile.main')||document.querySelector('.person.self .photo img')?.src||DEMO?.[7]?.photo||DEMO?.[0]?.photo||photoFor(playerId,1)}

// Kisses shown on each avatar are scoped to THIS table/session only.
// sessionStorage keeps the count through a refresh, while a different room gets a separate counter.
const TABLE_KISS_STORAGE_KEY=`delbirim.tableKisses.${room}`;
let tableKissCounts=(()=>{try{const x=JSON.parse(sessionStorage.getItem(TABLE_KISS_STORAGE_KEY)||'{}');return x&&typeof x==='object'?x:{}}catch{return{}}})();
function tableKissCount(id){return Math.max(0,Math.floor(Number(tableKissCounts[String(id||'')])||0))}
function saveTableKissCounts(){try{sessionStorage.setItem(TABLE_KISS_STORAGE_KEY,JSON.stringify(tableKissCounts))}catch{}}
function syncTableKissBadge(id){
  const key=String(id||''),n=tableKissCount(key);
  document.querySelectorAll('#players .person[data-player-id]').forEach(el=>{
    if(String(el.dataset.playerId)!==key)return;
    const badge=el.querySelector('.tableKissBadge');if(!badge)return;
    badge.textContent=String(n);badge.setAttribute('aria-label',`${n} поцелуев за этим столом`);badge.title=`Поцелуев за этим столом: ${n}`;
  });
}
function incrementTableKiss(id,amount=1){
  const key=String(id||'');if(!key)return 0;
  tableKissCounts[key]=tableKissCount(key)+Math.max(1,Math.floor(Number(amount)||1));
  saveTableKissCounts();syncTableKissBadge(key);return tableKissCounts[key];
}
function safeChatMediaUrl(url){const v=String(url||'').trim();return /^(?:https:\/\/|blob:|\/)/i.test(v)?v:''}
function removeLocalRoomActivity(id){const i=localRoomActivity.findIndex(x=>x.id===id);if(i<0)return;const [item]=localRoomActivity.splice(i,1);if(item?.objectUrl&&String(item.url||'').startsWith('blob:')){try{URL.revokeObjectURL(item.url)}catch{}}document.querySelectorAll(`[data-room-activity-id="${String(id).replace(/"/g,'')}"]`).forEach(el=>el.remove())}
function activityRow(item){
  const row=document.createElement('div');row.className='event roomActivityEvent';row.dataset.roomActivityId=String(item.id);
  if(item.kind==='media'){
    row.classList.add('roomActivityMedia');
    const url=safeChatMediaUrl(item.url);if(!url)return row;
    const isVideo=item.mediaType==='video',remaining=item.expiresAt?Math.max(0,Math.ceil((item.expiresAt-Date.now())/1000)):0;
    const media=isVideo?`<video class="chatMediaAsset" src="${esc(url)}" controls playsinline preload="metadata" muted></video>`:`<img class="chatMediaAsset" src="${esc(url)}" alt="Фото в чате">`;
    row.innerHTML=`<div class="miniavatar roomActivityAvatar"><img src="${esc(item.avatar||roomActorPhoto())}" alt=""></div><div class="bubble roomActivityBubble mediaBubble"><div class="chatMediaHead"><b>${esc(item.name||roomActorName())}</b>${item.expiresAt?`<span class="chatMediaTimer">${remaining}с</span>`:''}</div><div class="chatMediaCard ${isVideo?'isVideo':'isPhoto'}"><div class="chatMediaVisual">${media}</div><div class="chatMediaHidden">${isVideo?'Видео скрыто':'Фото скрыто'}</div><div class="chatMediaActions"><button type="button" class="chatMediaHideBtn">👁 Скрыть</button>${isVideo?'<button type="button" class="chatMediaSoundBtn">🔇 Звук выкл.</button>':''}</div></div></div>`;
    const card=row.querySelector('.chatMediaCard'),asset=row.querySelector('.chatMediaAsset'),hide=row.querySelector('.chatMediaHideBtn'),sound=row.querySelector('.chatMediaSoundBtn');
    if(hide&&card)hide.onclick=()=>{const hidden=card.classList.toggle('mediaCollapsed');hide.textContent=hidden?'👁 Показать':'👁 Скрыть'};
    if(sound&&asset&&isVideo)sound.onclick=()=>{asset.muted=!asset.muted;sound.textContent=asset.muted?'🔇 Звук выкл.':'🔊 Звук вкл.'};
    if(item.expiresAt){const tick=()=>{if(!row.isConnected)return;const left=Math.max(0,Math.ceil((item.expiresAt-Date.now())/1000)),badge=row.querySelector('.chatMediaTimer');if(badge)badge.textContent=`${left}с`;if(left<=0){removeLocalRoomActivity(item.id);return}setTimeout(tick,1000)};setTimeout(tick,300)}
    return row;
  }
  row.innerHTML=`<div class="miniavatar roomActivityAvatar"><img src="${esc(item.avatar||roomActorPhoto())}" alt=""></div><div class="bubble roomActivityBubble"><span class="roomActivityIcon">${item.icon||'✨'}</span><span>${item.html}</span></div>`;
  if(item.className)for(const c of String(item.className).split(/\s+/).filter(Boolean))row.classList.add(c);
  if(item.expiresAt){const wait=Math.max(0,item.expiresAt-Date.now());setTimeout(()=>{if(!row.isConnected)return;row.classList.add('roomActivityLeaving');setTimeout(()=>removeLocalRoomActivity(item.id),260)},wait)}
  return row
}
function trimLocalRoomActivity(){while(localRoomActivity.length>12){const item=localRoomActivity.shift();if(item?.objectUrl&&String(item.url||'').startsWith('blob:')){try{URL.revokeObjectURL(item.url)}catch{}}}}
function renderLocalRoomActivity(box=$('#feed')){if(!box)return;for(const item of [...localRoomActivity]){if(item.expiresAt&&item.expiresAt<=Date.now()){removeLocalRoomActivity(item.id);continue}box.appendChild(activityRow(item))}box.scrollTop=box.scrollHeight}
function addRoomActivity(icon,html,avatar=roomActorPhoto(),opts={}){const ttlMs=Math.max(0,Number(opts?.ttlMs)||0),item={id:Date.now()+Math.floor(Math.random()*1000),icon,html,avatar,className:opts?.className||'',expiresAt:ttlMs?Date.now()+ttlMs:null};localRoomActivity.push(item);trimLocalRoomActivity();const box=$('#feed');if(box){box.appendChild(activityRow(item));requestAnimationFrame(()=>{box.scrollTop=box.scrollHeight})}return item}
function addGiftRoomActivity(event,giftOverride=null){if(isBlockedId(event?.from))return null;const gift=giftOverride||giftCatalog().find(g=>g.id===event.gift)||{name:event.gift||'Подарок',videoUrl:''};const from=event.fromName||nameOf(event.from)||'Игрок',to=event.toName||nameOf(event.to)||'Игрок';const avatar=String(event.from)===String(playerId)?roomActorPhoto():(profile(event.from)?.photo||profile(event.from)?.avatar||photoFor(event.from||from,0));const isVideo=Boolean(gift.videoUrl);addRoomActivity(isVideo?'🎬':'🎁',`<b>${esc(from)}</b> ${isVideo?'отправил видео-подарок':'подарил'} <b>${esc(gift.name||'Подарок')}</b> для <b>${esc(to)}</b>`,avatar,{ttlMs:5200,className:'giftActivityTransient'})}
function addChatMedia(url,mediaType,{objectUrl=false}={}){const type=mediaType==='video'?'video':'image',item={id:Date.now()+Math.floor(Math.random()*1000),kind:'media',mediaType:type,url,name:roomActorName(),avatar:roomActorPhoto(),objectUrl:!!objectUrl,expiresAt:type==='image'?Date.now()+30000:null};localRoomActivity.push(item);trimLocalRoomActivity();const box=$('#feed');if(box){box.appendChild(activityRow(item));requestAnimationFrame(()=>{box.scrollTop=box.scrollHeight})}return item}

let activeBottomMediaGiftCleanup=null;
function closeBottomMediaGift(){
  if(activeBottomMediaGiftCleanup){const fn=activeBottomMediaGiftCleanup;activeBottomMediaGiftCleanup=null;fn();return}
  document.querySelector('.bottomMediaGiftStage')?.remove();
  $('#chatArea')?.classList.remove('bottomMediaGiftActive');
}
function showBottomMediaGift(url,mediaType,{objectUrl=false}={}){
  closeBottomMediaGift();
  const chat=$('#chatArea');if(!chat)return null;
  const isVideo=mediaType==='video';
  const stage=document.createElement('div');stage.className='bottomMediaGiftStage';
  stage.innerHTML=`<div class="bottomMediaGiftCanvas">${isVideo?`<video class="bottomMediaGiftAsset" src="${esc(url)}" autoplay playsinline preload="auto"></video>`:`<img class="bottomMediaGiftAsset" src="${esc(url)}" alt="Фотоподарок">`}<div class="bottomMediaGiftControls">${isVideo?'<button type="button" class="bottomMediaGiftSound">🔊 Звук</button>':''}<button type="button" class="bottomMediaGiftHide">✕ Скрыть</button></div>${!isVideo?'<div class="bottomMediaGiftTimer">30</div>':''}</div>`;
  chat.appendChild(stage);chat.classList.add('bottomMediaGiftActive');
  const asset=stage.querySelector('.bottomMediaGiftAsset'),hide=stage.querySelector('.bottomMediaGiftHide'),sound=stage.querySelector('.bottomMediaGiftSound'),timerBadge=stage.querySelector('.bottomMediaGiftTimer');
  let closed=false,photoTimeout=null,countdown=null;
  const cleanup=()=>{if(closed)return;closed=true;clearTimeout(photoTimeout);clearInterval(countdown);if(isVideo&&asset){try{asset.pause()}catch{}}stage.remove();chat.classList.remove('bottomMediaGiftActive');if(objectUrl&&String(url).startsWith('blob:')){try{URL.revokeObjectURL(url)}catch{}}};
  activeBottomMediaGiftCleanup=cleanup;hide.onclick=cleanup;
  if(isVideo&&asset){
    asset.muted=false;asset.volume=1;
    const syncSound=()=>{if(sound)sound.textContent=asset.muted?'🔇 Без звука':'🔊 Звук'};
    sound.onclick=()=>{asset.muted=!asset.muted;syncSound();asset.play().catch(()=>{})};
    syncSound();
    asset.addEventListener('ended',()=>setTimeout(cleanup,250),{once:true});
    const pp=asset.play();if(pp?.catch)pp.catch(()=>{asset.muted=true;syncSound();asset.play().catch(()=>{})});
  }else{
    let left=30;if(timerBadge)timerBadge.textContent=String(left);
    countdown=setInterval(()=>{left-=1;if(timerBadge)timerBadge.textContent=String(Math.max(0,left));if(left<=0)cleanup()},1000);
    photoTimeout=setTimeout(cleanup,30000);
  }
  return stage
}

// The public link is the playable demo by default. Server room state can contain
// stale/ghost seats from earlier test sessions, so it must not decide whether the
// demo UI is active. Add ?live=1 later when the real multiplayer room is ready.
const DEMO_PREVIEW=qp.get('live')!=='1';
function readTableSettings(id=room){
  try{
    const raw=localStorage.getItem('kissmeet.table.settings.'+id);
    if(!raw)return null;
    const x=JSON.parse(raw);
    const maxPlayers=Math.max(2,Math.min(11,Number(x.maxPlayers)||6));
    return {...x,maxPlayers,number:String(x.number||String(id).replace(/^table-/,'')||'165')};
  }catch{return null}
}
const CREATED_TABLE=readTableSettings(room);
const CUSTOM_BG_COST=20;
const CUSTOM_VIDEO_BG_COST=20;
function getHeartBalance(){
  if(isOwnerUnlimited())return Number.MAX_SAFE_INTEGER;
  const key='kissmeet.hearts';
  const saved=Number(localStorage.getItem(key));
  if(Number.isFinite(saved)&&saved>=0)return Math.floor(saved);
  const initial=DEMO_PREVIEW?100:0;
  localStorage.setItem(key,String(initial));
  return initial;
}
function setHeartBalance(v){
  if(isOwnerUnlimited()){
    const el=document.querySelector('#heartBalance');if(el)el.textContent='∞';
    const gift=document.querySelector('#giftBalance');if(gift)gift.textContent='∞';
    return Number.MAX_SAFE_INTEGER;
  }
  const n=Math.max(0,Math.floor(Number(v)||0));
  localStorage.setItem('kissmeet.hearts',String(n));
  const el=document.querySelector('#heartBalance');if(el)el.textContent=String(n);
  return n;
}
function syncHeartBalance(){setHeartBalance(getHeartBalance())}
if(DEMO_PREVIEW&&localStorage.getItem('kissmeet.demoGiftBalanceV4')!=='1'){if(getHeartBalance()<5000)setHeartBalance(5000);localStorage.setItem('kissmeet.demoGiftBalanceV4','1')}
const THEME_OPTIONS=[
  {id:'wood',label:'Деревянный стол',img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=86',bg:'repeating-linear-gradient(0deg,rgba(82,43,15,.10) 0 1px,transparent 1px 13px),repeating-linear-gradient(2deg,rgba(113,58,18,.16) 0 2px,transparent 2px 58px),linear-gradient(90deg,rgba(102,50,14,.12),transparent 18%,rgba(255,220,168,.13) 34%,transparent 55%,rgba(102,50,14,.10) 82%),linear-gradient(180deg,#d99653,#bd7337)'},
  {id:'dark',label:'Тёмная',img:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=86',bg:'linear-gradient(180deg,rgba(1,5,12,.30),rgba(1,5,12,.78)),url(https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=86) center/cover'},
  {id:'city',label:'Город',img:'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=86',bg:'linear-gradient(180deg,rgba(8,12,20,.25),rgba(7,10,18,.58)),url(https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=86) center/cover'},
  {id:'beach',label:'Пляж',img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=86',bg:'linear-gradient(180deg,rgba(7,20,30,.12),rgba(6,10,18,.34)),url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=86) center/cover'},
  {id:'forest',label:'Лес',img:'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=86',bg:'linear-gradient(180deg,rgba(5,18,10,.12),rgba(5,14,10,.50)),url(https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=86) center/cover'},
  {id:'romance',label:'Романтика',img:'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=86',bg:'linear-gradient(180deg,rgba(68,8,38,.18),rgba(35,5,27,.56)),url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=86) center/cover'}
];
const ROMANTIC_PLACES=[
  {id:'bishkek-sunset',label:'Бишкек • Закат',img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85'},
  {id:'issyk-kul',label:'Иссык-Куль',img:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85'},
  {id:'samarkand-night',label:'Самарканд',img:'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=85'},
  {id:'tashkent-evening',label:'Ташкент',img:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85'},
  {id:'almaty-mountains',label:'Алматы • Горы',img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85'},
  {id:'astana-night',label:'Астана • Ночь',img:'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=85'},
  {id:'nyc-rooftop',label:'Нью-Йорк • Ночь',img:'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1000&q=85'},
  {id:'chicago-river',label:'Чикаго • Огни',img:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=85'},
  {id:'london-rain',label:'Лондон • Вечер',img:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85'},
  {id:'paris-eiffel',label:'Париж • Эйфель',img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85'},
  {id:'paris-seine',label:'Париж • Сена',img:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85'},
  {id:'rome-evening',label:'Рим • Вечер',img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=85'},
  {id:'venice-canal',label:'Венеция • Каналы',img:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1000&q=85'},
  {id:'istanbul-bosphorus',label:'Стамбул • Босфор',img:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=85'},
  {id:'cappadocia',label:'Каппадокия',img:'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=85'},
  {id:'santorini',label:'Санторини • Закат',img:'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=1000&q=85'},
  {id:'athens-night',label:'Афины • Ночь',img:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1000&q=85'},
  {id:'moscow-night',label:'Москва • Ночь',img:'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1000&q=85'},
  {id:'spb-white-nights',label:'Петербург • Ночь',img:'https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&w=1000&q=85'},
  {id:'lake-romance',label:'Озеро • Романтика',img:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85'},
  {id:'beach-sunset',label:'Пляж • Закат',img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85'},
  {id:'forest-lights',label:'Лес • Туман',img:'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85'},
  {id:'city-lights',label:'Городские огни',img:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85'},
  {id:'rooftop-date',label:'Романтический rooftop',img:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85'}

];
const EXTRA_THEME_PLACES=[
  // 15 самых красивых мест на Земле
  {id:'earth-aurora',label:'Северное сияние',img:'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-alpine-lake',label:'Альпийское озеро',img:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-waterfall',label:'Водопад',img:'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-tropical-island',label:'Тропический остров',img:'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-highlands',label:'Горная долина',img:'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-starry-sky',label:'Звёздное небо',img:'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-mountain-road',label:'Дорога в горах',img:'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-blue-lake',label:'Голубое озеро',img:'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-ocean-cliffs',label:'Скалы у океана',img:'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-green-valley',label:'Зелёная долина',img:'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-wild-river',label:'Дикая река',img:'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-snow-peaks',label:'Снежные вершины',img:'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-autumn-road',label:'Осенняя дорога',img:'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-deep-forest',label:'Глубокий лес',img:'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'earth-misty-forest',label:'Туманный лес',img:'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1000'},

  // 15 романтических тем
  {id:'love-beach-sunset',label:'Любовь • Закат',img:'https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-candle-dinner',label:'Ужин при свечах',img:'https://images.pexels.com/photos/1589820/pexels-photo-1589820.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-rose-night',label:'Розовая ночь',img:'https://images.pexels.com/photos/2079622/pexels-photo-2079622.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-city-date',label:'Свидание в городе',img:'https://images.pexels.com/photos/1699025/pexels-photo-1699025.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-rooftop',label:'Романтика • Крыша',img:'https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-wedding-lights',label:'Свадебные огни',img:'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-flowers',label:'Цветочное свидание',img:'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-summer-couple',label:'Летнее свидание',img:'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-evening',label:'Вечер вдвоём',img:'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-cozy',label:'Уютный вечер',img:'https://images.pexels.com/photos/842546/pexels-photo-842546.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-golden-hour',label:'Золотой час',img:'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-moon',label:'Лунная романтика',img:'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-garden',label:'Сад любви',img:'https://images.pexels.com/photos/1134188/pexels-photo-1134188.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-rain',label:'Романтика под дождём',img:'https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'love-winter',label:'Зимнее свидание',img:'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1000'},

  // 20 эффектных тем: от вулканов до мегаполисов
  {id:'wow-volcano',label:'Вулкан',img:'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-lava',label:'Лава',img:'https://images.pexels.com/photos/36487/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-desert',label:'Пустыня',img:'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-sahara',label:'Сахара',img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-storm',label:'Шторм',img:'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-lightning',label:'Молния',img:'https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-maldives',label:'Мальдивы',img:'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-bali',label:'Бали',img:'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-canyon',label:'Каньон',img:'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-glacier',label:'Ледник',img:'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-rainforest',label:'Тропический лес',img:'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-ocean',label:'Океан',img:'https://images.pexels.com/photos/9754/pexels-photo-9754.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-tokyo',label:'Токио • Неон',img:'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-dubai',label:'Дубай • Ночь',img:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-newyork',label:'Нью-Йорк',img:'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-skyscrapers',label:'Мегаполис',img:'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-night-city',label:'Город ночью',img:'https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-lights',label:'Огни мегаполиса',img:'https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-winter',label:'Зимняя сказка',img:'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1000'},
  {id:'wow-milkyway',label:'Млечный путь',img:'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1000'}
];
const ALL_THEME_PLACES=[...ROMANTIC_PLACES,...EXTRA_THEME_PLACES];
function applyCustomTheme(dataUrl){
  if(!dataUrl)return;
  const game=document.querySelector('.game'),table=document.querySelector('.table'),video=document.querySelector('#themeVideoBg');
  game?.setAttribute('data-theme','custom');document.documentElement.setAttribute('data-game-theme','custom');
  table?.style.setProperty('background',`linear-gradient(180deg,rgba(4,8,14,.18),rgba(4,8,14,.52)),url(${dataUrl}) center/cover`,'important');
  if(video){video.pause();video.classList.add('hidden')}
  localStorage.setItem('kissmeet.theme','custom');localStorage.removeItem('kissmeet.place');
}
function resizeBackgroundFile(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=reject;
    reader.onload=()=>{
      const img=new Image();
      img.onerror=reject;
      img.onload=()=>{
        const maxW=1280,maxH=1600,scale=Math.min(1,maxW/img.width,maxH/img.height);
        const w=Math.max(1,Math.round(img.width*scale)),h=Math.max(1,Math.round(img.height*scale));
        const c=document.createElement('canvas');c.width=w;c.height=h;
        c.getContext('2d').drawImage(img,0,0,w,h);
        resolve(c.toDataURL('image/jpeg',.82));
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function buyCustomBackgroundAndChoose(){
  const input=$('#customBgFile');if(!input)return;
  if(getHeartBalance()<CUSTOM_BG_COST){toast(`Нужно ${CUSTOM_BG_COST} ♥`);return}
  input.value='';
  try{input.click()}catch{toast('Не удалось открыть выбор фото')}
}
async function chooseCustomBackground(file){
  // iOS/Android fires `change` only after the user confirms the photo ("Готово").
  // Charge here — never when the gallery is merely opened.
  if(!file)return;
  if(!file.type.startsWith('image/')){toast('Нужно выбрать фотографию');return}
  const balance=getHeartBalance();
  if(balance<CUSTOM_BG_COST){toast(`Нужно ${CUSTOM_BG_COST} ♥`);return}
  try{
    const dataUrl=await resizeBackgroundFile(file);
    // Debit only after the chosen photo is valid and ready to become the background.
    setHeartBalance(balance-CUSTOM_BG_COST);
    localStorage.setItem('kissmeet.customBg',dataUrl);
    applyCustomTheme(dataUrl);
    closeThemePicker();
    toast(`Свой фон установлен · −${CUSTOM_BG_COST} ♥`);
  }catch{toast('Не удалось открыть фотографию · сердечки не списаны')}
}
function applyCustomVideoTheme(url,{persist=true}={}){
  if(!url)return;
  const game=document.querySelector('.game'),table=document.querySelector('.table'),video=document.querySelector('#themeVideoBg');
  game?.setAttribute('data-theme','custom-video');document.documentElement.setAttribute('data-game-theme','custom-video');
  table?.style.setProperty('background','transparent','important');
  if(video){video.pause();video.src=url;video.classList.remove('hidden');video.muted=true;video.loop=true;video.playsInline=true;video.autoplay=true;video.load();setTimeout(()=>video.play().catch(()=>{}),0)}
  localStorage.setItem('kissmeet.theme','custom-video');localStorage.removeItem('kissmeet.place');
  if(persist)localStorage.setItem('kissmeet.customVideoBg',url);else localStorage.removeItem('kissmeet.customVideoBg');
}
async function chooseCustomVideoBackground(file){
  if(!file)return;
  if(!String(file.type||'').startsWith('video/')){toast('Выберите видео');return}
  if(file.size>60*1024*1024){toast('Видео слишком большое · максимум 60 МБ');return}
  const balance=getHeartBalance();
  if(balance<CUSTOM_VIDEO_BG_COST){toast(`Нужно ${CUSTOM_VIDEO_BG_COST} ♥`);return}
  let url='',persist=true;
  try{
    const r=await fetch('/api/upload-media',{method:'POST',headers:{'content-type':file.type||'video/mp4'},body:file});
    if(r.ok){const j=await r.json();if(j?.url)url=j.url}
  }catch{}
  if(!url){url=URL.createObjectURL(file);persist=false}
  setHeartBalance(balance-CUSTOM_VIDEO_BG_COST);
  applyCustomVideoTheme(url,{persist});
  closeThemePicker();
  toast(`Видео фон установлен · −${CUSTOM_VIDEO_BG_COST} ♥${persist?'':' · до перезагрузки'}`);
}
function applyPlaceTheme(place){
  const game=document.querySelector('.game'),table=document.querySelector('.table'),video=document.querySelector('#themeVideoBg');
  game?.setAttribute('data-theme','city');document.documentElement.setAttribute('data-game-theme','city');
  table?.style.setProperty('background',`linear-gradient(180deg,rgba(5,10,18,.22),rgba(5,8,14,.58)),url(${place.img}) center/cover`,'important');
  if(video){video.pause();video.classList.add('hidden')}
  localStorage.setItem('kissmeet.theme','city');localStorage.setItem('kissmeet.place',place.id);
  document.querySelectorAll('[data-theme-id]').forEach(b=>b.classList.toggle('active',b.dataset.themeId==='city'));
}
function renderRomanticPlaces(){
  const box=document.querySelector('#placeGallery');if(!box)return;
  const rows=[ALL_THEME_PLACES.slice(0,Math.ceil(ALL_THEME_PLACES.length/2)),ALL_THEME_PLACES.slice(Math.ceil(ALL_THEME_PLACES.length/2))];
  box.innerHTML=rows.map((row,i)=>`<div class="placeRow" data-place-row="${i}">${row.map(p=>`<button type="button" class="placeCard" data-place-id="${p.id}"><span class="placePhoto" style="background-image:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.62)),url(${p.img})"></span><span class="placeLabel">${p.label}</span></button>`).join('')}</div>`).join('');
  box.onclick=e=>{const b=e.target.closest('[data-place-id]');if(!b)return;const p=ALL_THEME_PLACES.find(x=>x.id===b.dataset.placeId);if(p){applyPlaceTheme(p);closeThemePicker()}};
}
function applyTheme(id){
  const t=THEME_OPTIONS.find(x=>x.id===id)||THEME_OPTIONS[0];
  const game=document.querySelector('.game');
  const table=document.querySelector('.table');
  const video=document.querySelector('#themeVideoBg');
  game?.setAttribute('data-theme',t.id);
  document.documentElement.setAttribute('data-game-theme',t.id);
  if(video){video.pause();video.classList.add('hidden');video.removeAttribute('src');video.load()}
  if(t.video){
    table?.style.removeProperty('background');
    if(video){video.src=t.video;video.classList.remove('hidden');video.muted=true;video.loop=true;video.playsInline=true;video.autoplay=true;video.load();setTimeout(()=>video.play().catch(()=>{}),0)}
  }else{
    table?.style.setProperty('background',t.bg,'important');
  }
  localStorage.setItem('kissmeet.theme',t.id);
  document.querySelectorAll('[data-theme-id]').forEach(b=>b.classList.toggle('active',b.dataset.themeId===t.id));
}
function renderThemeRoot(){
  const title=document.querySelector('#themeTitle');
  const back=document.querySelector('#themeBack');
  const grid=document.querySelector('#themeGrid');
  const gallery=document.querySelector('#placeGallery');
  if(title)title.textContent='Выбери фон';
  if(back){back.classList.add('hidden');back.dataset.level='root'}
  if(grid){grid.innerHTML='';grid.classList.add('hidden')}
  if(gallery){
    const themePlaces=THEME_OPTIONS.map(t=>({id:`theme-${t.id}`,label:t.label,img:t.img,themeId:t.id}));
    const combined=[...themePlaces,...ALL_THEME_PLACES];
    const selectedTheme=localStorage.getItem('kissmeet.theme')||'dark',selectedPlace=localStorage.getItem('kissmeet.place')||'';
    const customActive=selectedTheme==='custom'?' active':'';
    const customCard=`<button type="button" class="placeCard customUploadCard${customActive}" data-custom-bg="1"><span class="placePhoto customUploadPhoto" style="background-image:linear-gradient(180deg,rgba(2,6,12,.05),rgba(2,6,12,.56)),url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82)"></span><span class="placeLabel customUploadLabel"><b>Өз фонуңуз</b><small>${CUSTOM_BG_COST} ❤️</small></span></button>`;
    const readyCards=combined.map(p=>`<button type="button" class="placeCard ${p.themeId&&selectedTheme===p.themeId&&!selectedPlace?'active':''} ${!p.themeId&&selectedPlace===p.id?'active':''}" data-place-id="${p.id}" ${p.themeId?`data-theme-pick="${p.themeId}"`:''}><span class="placePhoto" style="background-image:linear-gradient(180deg,transparent 44%,rgba(0,0,0,.66)),url(${p.img})"></span><span class="placeLabel">${p.label}</span></button>`).join('');
    gallery.innerHTML=customCard+readyCards;
    gallery.scrollLeft=0;
    gallery.onclick=e=>{
      const custom=e.target.closest('[data-custom-bg]');
      if(custom){buyCustomBackgroundAndChoose();return}
      const b=e.target.closest('[data-place-id]');if(!b)return;
      const themeId=b.dataset.themePick;
      if(themeId){applyTheme(themeId);localStorage.removeItem('kissmeet.place');closeThemePicker();return}
      const p=ALL_THEME_PLACES.find(x=>x.id===b.dataset.placeId);
      if(p){applyPlaceTheme(p);closeThemePicker()}
    };
  }
}
function openThemePicker(){
  renderThemeRoot();
  const picker=document.querySelector('#themePicker');
  const chat=document.querySelector('#chatArea');
  if(picker&&chat&&picker.parentElement!==chat)chat.appendChild(picker);
  picker?.classList.remove('hidden');
}
function closeThemePicker(){document.querySelector('#themePicker')?.classList.add('hidden')}


const VIP_ROOM_THEMES={
  'vip-bishkek':{theme:'vip-gold',label:'👑 VIP Бишкек',bg:'radial-gradient(circle at 50% 22%,rgba(255,210,96,.26),transparent 28%),linear-gradient(180deg,rgba(18,11,5,.16),rgba(9,5,2,.72)),url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85) center/cover'},
  'vip-dating':{theme:'vip-rose',label:'👑 VIP Знакомства',bg:'radial-gradient(circle at 50% 18%,rgba(255,88,153,.30),transparent 30%),linear-gradient(180deg,rgba(54,5,31,.10),rgba(27,4,18,.76)),url(https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85) center/cover'},
  'vip-usa-kg':{theme:'vip-ocean',label:'👑 VIP USA / KG',bg:'radial-gradient(circle at 50% 18%,rgba(79,164,255,.24),transparent 30%),linear-gradient(180deg,rgba(2,18,36,.12),rgba(3,10,24,.76)),url(https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=85) center/cover'},
  'vip-rus-kg':{theme:'vip-ruby',label:'👑 VIP RUS / KG',bg:'radial-gradient(circle at 50% 18%,rgba(255,67,82,.22),transparent 30%),linear-gradient(180deg,rgba(43,5,9,.08),rgba(25,3,7,.78)),url(https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1400&q=85) center/cover'},
  'vip-bishkek-kg':{theme:'vip-emerald',label:'👑 VIP Bishkek KG',bg:'radial-gradient(circle at 50% 18%,rgba(60,220,151,.22),transparent 30%),linear-gradient(180deg,rgba(2,36,25,.10),rgba(2,20,14,.78)),url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85) center/cover'}
};
function applyVipRoomTheme(){
  const cfg=VIP_ROOM_THEMES[room];if(!cfg)return;
  const game=document.querySelector('.game'),table=document.querySelector('.table'),video=document.querySelector('#themeVideoBg');
  game?.setAttribute('data-theme',cfg.theme);document.documentElement.setAttribute('data-game-theme',cfg.theme);
  table?.style.setProperty('background',cfg.bg,'important');
  if(video){video.pause();video.classList.add('hidden')}
  const turn=document.querySelector('#turnText');if(turn)turn.textContent=cfg.label;
  const btn=document.querySelector('#tableButton');if(btn){btn.classList.add('vipCurrentTable');btn.title=cfg.label;btn.setAttribute('aria-label',cfg.label);const label=btn.querySelector('.neonTableText b'),num=btn.querySelector('.neonTableText strong');if(label)label.textContent=cfg.label.replace(/^👑\s*/,'');if(num)num.textContent='VIP'}
  document.body.classList.add('vipRoomActive');

  // VIP rooms: force the entire roulette cluster noticeably higher.
  // Inline !important is intentional here so older VIP CSS rules cannot pull it back down.
  const center=document.querySelector('.centerBottle');
  const turnText=center?.querySelector('.turnText');
  const rouletteWrap=center?.querySelector('.rouletteItemWrap');
  const spinBtn=center?.querySelector('.spin');
  if(center){
    center.style.setProperty('left','50%','important');
    center.style.setProperty('top',innerWidth<=520?'31%':'34%','important');
    center.style.setProperty('transform','translate(-50%,-50%) scale(.84)','important');
  }
  if(turnText){
    turnText.style.setProperty('top','-24px','important');
    turnText.style.setProperty('bottom','auto','important');
  }
  if(rouletteWrap){
    rouletteWrap.style.setProperty('top','24px','important');
    rouletteWrap.style.setProperty('margin','0','important');
  }
  if(spinBtn){
    spinBtn.style.setProperty('top','108px','important');
    spinBtn.style.setProperty('bottom','auto','important');
  }
}

function isDemoMode(m=lastMsg){
  if(DEMO_PREVIEW)return true;
  if(!m?.view)return true;
  const seats=Array.isArray(m.seats)?m.seats:[];
  const players=Array.isArray(m.view.players)?m.view.players:[];
  return !seats.includes(playerId) || players.length<2;
}
function connect(){
  const u=new URL(`/ws/${room}`,'https://kiss-meet-club.higgsfield.app');u.protocol='wss:';socket=new WebSocket(u);
  socket.onopen=()=>socket.send(JSON.stringify({type:'join',playerId}));
  socket.onmessage=e=>{
    if(e.data==='__pong')return;
    const m=JSON.parse(e.data);
    if(m.type==='state'){const first=!lastMsg;lastMsg=m;render(m);processGiftEvents(m.view,first);return}
    if(m.type==='error'){
      if(isDemoMode()&&['wait for your turn','need another player','balcony cannot spin','game is not in progress'].includes(m.error))return;
      toast(m.error);
    }
  };
  socket.onclose=()=>setTimeout(connect,1200);
}
connect();applyVipRoomTheme();setInterval(()=>socket?.readyState===1&&socket.send('__ping'),30000);

function demoRoster(){
  const selfPhoto=DEMO[7]?.photo||DEMO[0]?.photo||'';
  const savedGender=localStorage.getItem('kissmeet.profile.gender');
  const self={id:playerId,name:'Player 1',photo:selfPhoto,gift:'',badge:0,gender:savedGender==='female'?'female':'male',real:true,self:true,turn:false,target:false};
  const others=DEMO.slice(0,10).map((d,i)=>({...d,id:`demo-${i}`,real:false,self:false,turn:false,target:false}));
  return [self,...others].slice(0,11);
}
function realRoster(v){
  return v.players.slice(0,11).map((id,i)=>{const data=profile(id);return{id,name:nameOf(id),photo:photoFor(id,i),gift:GIFT_EMOJI[data.lastGift]||'',badge:data.gifts||0,gender:id===playerId?(localStorage.getItem('kissmeet.profile.gender')||data.gender||'male'):data.gender,real:true,self:id===playerId,turn:v.turn===id,target:v.target===id}});
}
function render(m){
  const v=m.view;if(!v)return;
  const created=readTableSettings(room);
  const demoMode=!created&&isDemoMode(m);
  if(demoMode&&!heartDuelOpen&&!demoSpinning)scheduleDemoSpin();
  if(!demoMode&&!created){const hb=Number(v.profiles?.[playerId]?.hearts);if(isOwnerUnlimited())$('#heartBalance').textContent='∞';else if(Number.isFinite(hb))$('#heartBalance').textContent=String(hb)}
  renderPlayers(v,demoMode,created);
  if(created){
    const feed=$('#feed');if(feed)feed.innerHTML='<div class="createdTableWelcome">Стол #'+esc(created.number)+' создан · мест: '+created.maxPlayers+'</div>';
    const media=$('#mediaBox');media?.classList.add('hidden');$('#chatArea')?.classList.remove('mediaActive');
  }else{renderFeed(v);renderMedia(v)}
  const guest=created?true:(demoMode||m.seats.includes(playerId)||v.players.includes(playerId));
  const ownerCount=created&&created.owner===playerId?1:0;
  const gc=$('#guestCount');if(gc)gc.textContent=created?`${ownerCount}/${created.maxPlayers}`:`${demoMode?1:(m.seats?.length||0)}/11`;
  const lc=$('#liveCount');if(lc)lc.textContent=created?Math.max(1,ownerCount):Math.max(1,Number(m.connected||1));
  if(!demoSpinning){demoAngle=v.bottleAngle||demoAngle;$('#bottle').style.transform=`rotate(${demoAngle}deg)`}
  $('#spin').disabled=created?true:(demoMode?(demoSpinning||heartDuelOpen||demoNextPlayerId!==playerId):(m.status!=='playing'||!guest||v.turn!==playerId));
  scheduleLocalAutoSpin(3000);
  if(created)$('#turnText').textContent='Ждём игроков · '+ownerCount+'/'+created.maxPlayers;else if(demoMode){const next=[...document.querySelectorAll('#players .person')].find(person=>person.dataset.playerId===demoNextPlayerId);$('#turnText').textContent=demoNextPlayerId===playerId?'Ваш ход — крутите сердце':`Ход: ${next?.querySelector('.name')?.textContent||'следующий игрок'}`}else $('#turnText').textContent=!guest?tr('balconyMode'):(v.target?tr('pick',{name:nameOf(v.target)}):(v.turn===playerId?tr('your'):tr('turn',{name:nameOf(v.turn)})));
  const stats=$('.roomStats');if(stats&&created)stats.innerHTML='<span class="createdTableStat">Стол <strong>#'+esc(created.number)+'</strong></span><span class="createdTableStat">Игроки <strong>'+ownerCount+'/'+created.maxPlayers+'</strong></span>';
}
function kickKeyFor(p,i){return `delbirim_kick_${p?.id||`demo-${i}`}`}
function blockIdFor(p,i){return String(p?.id||`demo-${i}`)}
function blockKeyForId(id){return `delbirim_block_${room}_${String(id||'')}`}
function isBlockedId(id){if(!id||String(id)==='system'||String(id)===String(playerId))return false;try{return localStorage.getItem(blockKeyForId(id))==='1'}catch{return false}}
function isPlayerBlocked(p,i){return isBlockedId(blockIdFor(p,i))}
function setPlayerBlocked(p,i,value){const id=blockIdFor(p,i);try{if(value)localStorage.setItem(blockKeyForId(id),'1');else localStorage.removeItem(blockKeyForId(id))}catch{}return value}
function syncBlockButton(){const b=$('#giftBlockBtn');if(!b)return;const owner=isOwnerAccount();b.classList.toggle('hidden',!owner);b.disabled=!owner;if(!owner||!selectedPlayer)return;const on=isPlayerBlocked(selectedPlayer,selectedSlot);b.classList.toggle('blocked',on);b.setAttribute('aria-label',on?'Разблокировать игрока':'Заблокировать игрока');b.title=on?'Разблокировать игрока':'Заблокировать игрока';const icon=b.querySelector('.giftMiniIcon');if(icon)icon.textContent=on?'🔓':'🚫';const label=b.querySelector('.giftMiniLabel');if(label)label.textContent=on?'Разблок':'Блок'}
function kickIsActive(p,i){
  let until=0;try{until=Number(localStorage.getItem(kickKeyFor(p,i))||0)}catch{}
  if(until>Date.now())return true;
  if(until){try{localStorage.removeItem(kickKeyFor(p,i))}catch{}}
  return false;
}
const KNOWN_TOP10_NAMES=new Set(['Nik','Ricky','Ceccelia','Fiana','Koshechka','Abid','Richard','Zloya','Stiyl','Namid','Malka','Шальной','Sylvia','Zlata','Ирина','Ahmet','Sûltan','MUSIC','Maxsumius','Lydia','Bonnie','Amcel','Indrit','Slavisha','Andrea','ALKIMENT','Николаевич','Ekrem','Georgi','BAŞKAN','Orhan','Akhmatova','Könül','Elnarə','Ara','ALI','Mina','Elifsu']);
function tableTop10Rank(p,demoMode=false){
  const explicit=Number(p?.topRank??p?.rankTop??p?.ratingRank??p?.top10Rank);
  if(Number.isFinite(explicit)&&explicit>=1&&explicit<=10)return explicit;
  const short=String(p?.name||'').split(',')[0].trim();
  if(demoMode&&short==='Алина')return 10; // demo: show how a TOP-10 player is marked at the table
  if(KNOWN_TOP10_NAMES.has(short))return 10;
  return 0;
}
function renderPlayers(v,demoMode=isDemoMode(),created=readTableSettings(room)){
  const box=$('#players');box.innerHTML='';
  if(created){renderCreatedTablePlayers(box,created);return}
  const all=demoMode?demoRoster():realRoster(v);
  all.forEach((p,i)=>{
    if(demoMode&&kickIsActive(p,i))return;
    const topRank=tableTop10Rank(p,demoMode);
    const basePos=innerWidth<=520?MOBILE_POS:POS;const vipPos=VIP_ROOM_THEMES[room]?(innerWidth<=520?MOBILE_POS:[[15,15],[38,8],[62,8],[85,15],[10,40],[90,40],[10,67],[90,67],[27,88],[50,94],[73,88]]):basePos;const [x,y]=vipPos[i],b=document.createElement('button');
    const playerKey=p.id||`demo-${i}`,kissCount=tableKissCount(playerKey);
    b.type='button';b.dataset.slot=String(i);b.dataset.playerId=playerKey;
    b.className=`person ${p.real?'real':'demo'} ${p.self?'self':''} ${p.turn?'turn':''} ${p.target?'target':''} ${topRank?'tableTop10':''}`;
    b.dataset.gender=p.gender||'';
    if(topRank)b.dataset.topRank=String(topRank);
    b.style.left=x+'%';b.style.top=y+'%';
    b.innerHTML=`<div class="photo"><span>${initials(p.name)}</span><img src="${p.photo}" alt=""><i class="badge tableKissBadge" aria-label="${kissCount} поцелуев за этим столом" title="Поцелуев за этим столом: ${kissCount}">${kissCount}</i>${i<3?'<i class="hat">🎉</i>':''}${p.gift?`<i class="giftCorner">${p.gift}</i>`:''}</div>${topRank?'<span class="tableTop10Badge">TOP</span>':''}<div class="name">${esc(p.name)}</div>`;
    b.querySelector('img')?.addEventListener('error',e=>e.currentTarget.remove());
    let tapTimer=null;b.onclick=()=>{clearTimeout(tapTimer);tapTimer=setTimeout(()=>openPlayerSheet(p,i),210)};b.ondblclick=(e)=>{e.preventDefault();clearTimeout(tapTimer);openPlayerProfile(p,i)};box.appendChild(b);restoreEmotionProps(b.querySelector('.photo'),playerKey);
  });
  if(typeof rehideHeartDuelSources==='function')rehideHeartDuelSources();
}
function renderCreatedTablePlayers(box,settings){
  const max=Math.max(2,Math.min(11,Number(settings.maxPlayers)||6));
  const ownerHere=settings.owner===playerId;
  const ownerName=localStorage.getItem('kissmeet.profile.name')||'Player 1';
  const ownerPhoto=localStorage.getItem('kissmeet.profile.main')||DEMO[7]?.photo||DEMO[0]?.photo||photoFor(playerId,1);
  for(let i=0;i<max;i++){
    const [x,y]=(innerWidth<=520?MOBILE_POS:POS)[i],b=document.createElement('button');
    b.type='button';b.className='person createdSeat '+(i===0&&ownerHere?'createdOwner':'emptySeat');b.style.left=x+'%';b.style.top=y+'%';
    if(i===0&&ownerHere){
      b.dataset.playerId=playerId;const ownerKisses=tableKissCount(playerId);
      b.innerHTML='<div class="photo"><span>'+initials(ownerName)+'</span><img src="'+esc(ownerPhoto)+'" alt=""><i class="badge tableKissBadge" aria-label="'+ownerKisses+' поцелуев за этим столом" title="Поцелуев за этим столом: '+ownerKisses+'">'+ownerKisses+'</i><i class="ownerBadge">Хозяин</i></div><div class="name">'+esc(ownerName)+'</div>';
      b.onclick=()=>openPlayerProfile({id:playerId,name:ownerName,photo:ownerPhoto,badge:0,real:true,self:true},0);
    }else{
      b.disabled=true;b.innerHTML='<div class="photo emptySeatPhoto"><span>+</span></div><div class="name emptySeatName">Свободно</div>';
    }
    box.appendChild(b);
  }
}
function showDogPeeGift(){return}
function applyMachoSpit(){return}
function clearMachoSpit(){return}
function restoreMachoSpit(){return}
function renderFeed(v){const box=$('#feed');box.innerHTML='';for(const e of v.feed){if(e.kind==='voice'||e.kind==='gift'||isBlockedId(e.from))continue;const row=document.createElement('div'),nm=e.from==='system'?'K&M':nameOf(e.from),to=e.to?nameOf(e.to):'';row.className='event';let html='';if(e.kind==='chat')html=`${esc(e.text)}<div class="line2">${tr('translation')}</div>`;else if(e.kind==='gift'){const g=e.emoji||GIFT_EMOJI[e.gift]||'🎁';html=`<div class="giftline">${g} ×1 <span>→ ${esc(to)}</span></div>`}else if(e.kind==='spin')html=`${tr('spinResult')} <b>${esc(to)}</b>`;else if(e.kind==='video')html=tr('video');else if(e.kind==='voice')html=`🎙 <audio controls preload="none" src="${esc(e.url)}"></audio>`;else if(e.kind==='topup')html='пополнил баланс ♥';else html=tr('room');const prof=e.from==='system'?null:profile(e.from),demo=DEMO.find(x=>String(x.name).split(',')[0]===String(nm).split(',')[0]),avatar=prof?.photo||prof?.avatar||demo?.photo||photoFor(e.from||nm,0);row.innerHTML=`<div class="miniavatar"><img src="${esc(avatar)}" alt="${esc(nm)}"></div><div class="bubble"><b>${esc(nm)}</b>: ${html}</div>`;if(e.from!=='system'&&String(e.from)!==String(playerId)){row.classList.add('chatReplyPick');row.title=`Ответить ${nm}`;row.addEventListener('click',ev=>{if(ev.target.closest('audio,video,button,input,a'))return;selectChatReplyTarget({id:e.from,name:nm})})}box.appendChild(row)}if(v.feed.length<4){const demoRow=document.createElement('div');demoRow.className='event chatReplyPick';demoRow.innerHTML=`<div class="miniavatar"><img src="${DEMO[0].photo}" alt="Айдана"></div><div class="bubble"><b>Айдана</b>: Салам 👋<div class="line2">${tr('translation')}</div></div>`;demoRow.addEventListener('click',()=>selectChatReplyTarget({id:'demo-0',name:'Айдана'}));box.appendChild(demoRow)}renderLocalRoomActivity(box);requestAnimationFrame(()=>{box.scrollTop=box.scrollHeight})}
function syncGiftSoundUi(){const b=$('#giftSound');if(b)b.textContent=gameSoundEnabled()?'🔊':'🔇';const sw=$('#soundToggle');if(sw)sw.classList.toggle('active',gameSoundEnabled())}function stopActiveGiftSounds(){if(gameSoundEnabled())return;document.querySelectorAll('.lionGiftSound,.kyrgyzWarriorSound,.aurakgSound,.bauriSound').forEach(a=>{try{a.pause();a.currentTime=0}catch{}});for(const a of [window.__kissMeetLionGiftSound,window.__kissMeetKyrgyzWarriorAudio,window.__aurakgAudio,window.__bauriAudio]){try{a?.pause?.();if(a)a.currentTime=0}catch{}}}function syncGameSoundState(){syncGiftSoundUi();stopActiveGiftSounds()}function syncMusicPlayback(){const frame=$('#videoFrame iframe');if(!frame?.contentWindow)return;try{frame.contentWindow.postMessage(JSON.stringify({event:'command',func:gameMusicEnabled()?'unMute':'mute',args:[]}), '*')}catch{}}function youtubeEmbed(url){try{const u=new URL(url);let id='';if(u.hostname.includes('youtu.be'))id=u.pathname.slice(1);else if(u.hostname.includes('youtube.com'))id=u.searchParams.get('v')||u.pathname.split('/').filter(Boolean).pop();id=(id||'').split(/[?&#]/)[0];return /^[A-Za-z0-9_-]{6,20}$/.test(id)?`https://www.youtube.com/embed/${encodeURIComponent(id)}?playsinline=1&autoplay=1&rel=0&enablejsapi=1&mute=${gameMusicEnabled()?0:1}`:''}catch{return''}}function shortName(name){return String(name||'Игрок').split(',')[0].trim()}function showMedia(m,title='Видео'){if(!m)return false;$('#mediaBox').classList.remove('hidden');$('#chatArea').classList.add('mediaActive');$('#mediaTitle').textContent=title;if(m.kind==='youtube'){const src=youtubeEmbed(m.url);if(!src)return false;$('#videoFrame').innerHTML=`<iframe src="${src}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}else $('#videoFrame').innerHTML=`<video src="${esc(m.url)}" controls autoplay playsinline></video>`;return true}function renderMedia(v){const owner=v.target&&v.media[v.target]?v.target:(v.media[playerId]?playerId:Object.keys(v.media)[0]);if(!owner)return;if($('#mediaBox').classList.contains('hidden'))return;showMedia(v.media[owner],tr('playerVideo',{name:shortName(nameOf(owner))}))}
function giftCatalog(){return FALLBACK_GIFTS}
function currentGiftBalance(){if(isOwnerUnlimited())return Number.MAX_SAFE_INTEGER;if(isDemoMode())return getHeartBalance();const n=Number(profile(playerId).hearts);return Number.isFinite(n)?n:0}
function updateGiftBalance(){const b=currentGiftBalance();$('#giftBalance').textContent=heartBalanceLabel(b);if(!isDemoMode())$('#heartBalance').textContent=heartBalanceLabel(b)}

const EMOTION_ASSET_BASE='/assets/emotions/refset-5720/';
const EMOTION_KISS_IMAGE=EMOTION_ASSET_BASE+'kiss.png';
const EMOTION_ASSET_BASE_2='/assets/emotions/refset-5724/';
const EMOTION_ASSET_BASE_3='/assets/emotions/refset-5725/';
const EMOTION_ASSET_BASE_4='/assets/emotions/refset-5756-v2/';
const EMOTION_ASSET_BASE_5='/assets/emotions/refset-5726/';
const EMOTION_ASSET_BASE_6='/assets/emotions/refset-5768/';
const EMOTION_ASSET_BASE_7='/assets/emotions/refset-5774/';
const EMOTION_ASSET_BASE_8='/assets/emotions/refset-5775/';
const EMOTION_ASSET_BASE_9='/assets/emotions/refset-5776/';
const EMOTION_ASSET_BASE_10='/assets/emotions/refset-5777/';
const EMOTION_ASSET_BASE_11='/assets/emotions/refset-5778/';
const EMOTION_ASSET_BASE_12='/assets/emotions/refset-5780/';
const EMOTION_GIFTS=[
  {id:'emotion_music',name:'Музыка',cost:9,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE+'music.png'},
  {id:'emotion_crown_sun',name:'Корона солнце',cost:3,category:'emotion',effect:'halo',image:EMOTION_ASSET_BASE+'crown-sun.png'},
  {id:'emotion_crown_branches',name:'Корона ветви',cost:3,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE+'crown-branches.png'},
  {id:'emotion_tiara_purple',name:'Тиара',cost:3,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE+'tiara-purple.png'},
  {id:'emotion_crown_rose',name:'Корона',cost:3,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE+'crown-rose.png'},
  {id:'emotion_pretzel',name:'Крендель',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE+'pretzel.png'},
  {id:'emotion_hat_feather',name:'Шляпа с пером',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE+'hat-feather.png'},
  {id:'emotion_hat_safari',name:'Шляпа сафари',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE+'hat-safari.png'},
  {id:'emotion_mug',name:'Кружка',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE+'mug.png'},
  {id:'emotion_teapot',name:'Чайник',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE+'teapot.png'},
  {id:'emotion_thermos',name:'Термос',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE+'thermos.png'},
  {id:'emotion_kiss',name:'Поцелуй',cost:1,category:'emotion',effect:'kiss',image:EMOTION_KISS_IMAGE},
  {id:'emotion_emerald',name:'Изумруд',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE+'emerald.png'},
  {id:'emotion_flower_vase',name:'Цветы',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE+'flower-vase.png'},
  {id:'emotion_tomato_splat',name:'Помидор',cost:1,category:'emotion',effect:'dirty_splat',image:EMOTION_ASSET_BASE+'tomato.png'},
  {id:'emotion_frog',name:'Лягушка',cost:2,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_2+'frog.png'},
  {id:'emotion_roses_bouquet',name:'Букет роз',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_2+'roses-bouquet.png'},
  {id:'emotion_candy',name:'Конфета',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE_2+'candy.png'},
  {id:'emotion_duck',name:'Утёнок',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_2+'duck.png'},
  {id:'emotion_hippo',name:'Бегемотик',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_2+'hippo.png'},
  {id:'emotion_penguin',name:'Пингвин',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_2+'penguin.png'},
  {id:'emotion_tulips',name:'Тюльпаны',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_2+'tulips.png'},
  {id:'emotion_lilies',name:'Лилии',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_2+'lilies.png'},
  {id:'emotion_golden_rose',name:'Золотая роза',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_2+'golden-rose.png'},
  {id:'emotion_cactus',name:'Кактус',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_2+'cactus.png'},
  {id:'emotion_icecream',name:'Мороженое',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_2+'icecream.png'},
  {id:'emotion_strawberry_cake',name:'Клубничный торт',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_2+'strawberry-cake.png'},
  {id:'emotion_milk',name:'Молоко',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_2+'milk.png'},
  {id:'emotion_wine',name:'Вино',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_2+'wine.png'},
  {id:'emotion_whiskey',name:'Виски',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_2+'whiskey.png'},
  {id:'emotion_tea_ref5725',name:'Чай',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'tea.png'},
  {id:'emotion_pickle_glass_ref5725',name:'Стакан с огурцом',cost:3,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'pickle-glass.png'},
  {id:'emotion_coffee_ref5725',name:'Кофе',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'coffee.png'},
  {id:'emotion_champagne_glass_ref5725',name:'Бокал',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'champagne-glass.png'},
  {id:'emotion_beer_ref5725',name:'Пиво',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'beer.png'},
  {id:'emotion_martini_ref5725',name:'Мартини',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'martini.png'},
  {id:'emotion_lemonade_ref5725',name:'Лимонад',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'lemonade.png'},
  {id:'emotion_love_jar_ref5725',name:'Банка любви',cost:3,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_3+'love-jar.png'},
  {id:'emotion_teddy_ref5725',name:'Мишка',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_3+'teddy-bear.png'},
  {id:'emotion_hot_drink_ref5725',name:'Горячий напиток',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_3+'hot-drink.png'},
  {id:'emotion_nurse_hat_ref5725',name:'Шапочка медсестры',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_3+'nurse-hat.png'},
  {id:'emotion_cowboy_hat_ref5725',name:'Ковбойская шляпа',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_3+'cowboy-hat.png'},
  {id:'emotion_captain_hat_ref5725',name:'Капитанская фуражка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_3+'captain-hat.png'},
  {id:'emotion_alien_ref5725',name:'Инопланетянин',cost:2,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_3+'alien.png'},
  {id:'emotion_furry_ears_ref5725',name:'Ушки',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_3+'furry-ears.png'},
  {id:'emotion_cow_ears_ref5756',name:'Ушки коровки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'cow-ears.png'},
  {id:'emotion_fox_ears_ref5756',name:'Лисьи ушки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'fox-ears.png'},
  {id:'emotion_bunny_ears_ref5756',name:'Ушки зайки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'bunny-ears.png'},
  {id:'emotion_black_ears_ref5756',name:'Чёрные ушки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'black-ears.png'},
  {id:'emotion_green_ears_ref5756',name:'Зелёные ушки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'green-ears.png'},
  {id:'emotion_red_horns_ref5756',name:'Красные рожки',cost:2,category:'emotion',effect:'horns',image:EMOTION_ASSET_BASE_4+'red-horns.png'},
  {id:'emotion_pink_ears_ref5756',name:'Розовые ушки',cost:2,category:'emotion',effect:'ears',image:EMOTION_ASSET_BASE_4+'pink-ears.png'},
  {id:'emotion_antlers_ref5756',name:'Оленьи рога',cost:2,category:'emotion',effect:'horns',image:EMOTION_ASSET_BASE_4+'antlers.png'},
  {id:'emotion_blue_bow_ref5756',name:'Синий бантик',cost:2,category:'emotion',effect:'bow',image:EMOTION_ASSET_BASE_4+'blue-bow.png'},
  {id:'emotion_red_bow_ref5756',name:'Красный бантик',cost:2,category:'emotion',effect:'bow',image:EMOTION_ASSET_BASE_4+'red-bow.png'},
  {id:'emotion_lace_bow_ref5756',name:'Кружевной бантик',cost:2,category:'emotion',effect:'bow',image:EMOTION_ASSET_BASE_4+'lace-bow.png'},
  {id:'emotion_burgundy_bow_ref5756',name:'Бордовый бантик',cost:2,category:'emotion',effect:'bow',image:EMOTION_ASSET_BASE_4+'burgundy-bow.png'},
  {id:'emotion_ak_kalpak_ref5756',name:'Ак калпак',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_4+'ak-kalpak.png'},
  {id:'emotion_ushanka_ref5756',name:'Ушанка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_4+'ushanka.png'},
  {id:'emotion_kyrgyz_headwear_ref5756',name:'Кыргыз баш кийим',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_4+'kyrgyz-headwear.png'},
  {id:'emotion_alarm_ref5726',name:'Будильник',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_5+'alarm-clock.png'},
  {id:'emotion_usa_donut_ref5726',name:'Пончик USA',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE_5+'usa-donut.png'},
  {id:'emotion_mystery_cube_ref5726',name:'Кубик сюрприз',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_5+'mystery-cube.png'},
  {id:'emotion_joker_hat_ref5726',name:'Шутовской колпак',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_5+'joker-hat.png'},
  {id:'emotion_blue_cocktail_ref5726',name:'Синий коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'blue-cocktail.png'},
  {id:'emotion_straw_hat_ref5726',name:'Соломенная шляпа',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_5+'straw-hat.png'},
  {id:'emotion_herbal_drink_ref5726',name:'Травяной напиток',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'herbal-drink.png'},
  {id:'emotion_purple_cocktail_ref5726',name:'Фиолетовый коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'purple-cocktail.png'},
  {id:'emotion_love_ring_ref5726',name:'Кокс',cost:0,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_5+'love-ring.png',heartTransfer:true},
  {id:'emotion_skull_drink_ref5726',name:'Ядовитый коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'skull-drink.png'},
  {id:'emotion_pink_martini_ref5726',name:'Розовый мартини',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'pink-martini.png'},
  {id:'emotion_latte_ref5726',name:'Латте',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'latte.png'},
  {id:'emotion_sombrero_ref5726',name:'Сомбреро',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_5+'sombrero.png'},
  {id:'emotion_mojito_ref5726',name:'Мохито',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_5+'mojito.png'},
  {id:'emotion_viking_helmet_ref5726',name:'Шлем викинга',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_5+'viking-helmet.png'},

  {id:'emotion_bowler_hat_ref5768',name:'Котелок',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_6+'bowler-hat.png'},
  {id:'emotion_red_cocktail_ref5768',name:'Красный коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_6+'red-cocktail.png'},
  {id:'emotion_pilotka_ref5768',name:'Пилотка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_6+'pilotka.png'},
  {id:'emotion_orange_cocktail_ref5768',name:'Апельсиновый коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_6+'orange-cocktail.png'},
  {id:'emotion_top_hat_ref5768',name:'Цилиндр',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_6+'top-hat.png'},
  {id:'emotion_dark_bag_ref5774',name:'Пакет',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE_7+'dark-bag.png'},
  {id:'emotion_navy_tricorne_ref5774',name:'Треуголка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_7+'navy-tricorne.png'},
  {id:'emotion_skull_bottle_ref5774',name:'Бутылка-череп',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_7+'skull-bottle.png'},
  {id:'emotion_feather_hat_ref5774',name:'Шляпа с перьями',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_7+'feather-hat.png'},
  {id:'emotion_honey_ref5774',name:'Мёд',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_7+'honey.png'},
  {id:'emotion_jewel_turban_ref5774',name:'Тюрбан',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_7+'jewel-turban.png'},
  {id:'emotion_microphone_ref5774',name:'Микрофон',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_7+'microphone.png'},
  {id:'emotion_purple_jar_ref5774',name:'Фиолетовый напиток',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_7+'purple-jar.png'},
  {id:'emotion_black_pepper_ref5774',name:'Чёрный перец',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE_7+'black-pepper.png'},
  {id:'emotion_colander_ref5774',name:'Дуршлаг',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_7+'colander.png'},
  {id:'emotion_golden_lamp_ref5774',name:'Золотая лампа',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_7+'golden-lamp.png'},
  {id:'emotion_martini_ref5774',name:'Мартини',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_7+'martini.png'},
  {id:'emotion_pearl_coupe_ref5774',name:'Жемчужный бокал',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_7+'pearl-coupe.png'},
  {id:'emotion_spartan_helmet_ref5774',name:'Шлем',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_7+'spartan-helmet.png'},
  {id:'emotion_pearl_shell_ref5775',name:'Жемчужина',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_8+'pearl-shell.png'},
  {id:'emotion_top_hat_ref5775',name:'Цилиндр',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_8+'top-hat.png'},
  {id:'emotion_crown_ref5775',name:'Корона',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_8+'crown.png'},
  {id:'emotion_hookah_ref5775',name:'Кальян',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_8+'hookah.png'},
  {id:'emotion_headdress_ref5775',name:'Головной убор с перьями',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_8+'headdress.png'},
  {id:'emotion_blue_cap_ref5775',name:'Синяя кепка',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_8+'blue-cap.png'},
  {id:'emotion_brandy_ref5775',name:'Бренди',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_8+'brandy.png'},
  {id:'emotion_money_ref5775',name:'100 долларов',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_8+'money.png'},
  {id:'emotion_saddle_ref5775',name:'Седло',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_8+'saddle.png'},
  {id:'emotion_lime_martini_ref5775',name:'Мартини с лаймом',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_8+'lime-martini.png'},
  {id:'emotion_bunny_ref5775',name:'Кролик',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_8+'bunny.png'},
  {id:'emotion_lemonade_ref5775',name:'Лимонад',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_8+'lemonade.png'},
  {id:'emotion_crystal_orb_ref5775',name:'Кристалл',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_8+'crystal-orb.png'},
  {id:'emotion_knight_helmet_ref5775',name:'Рыцарский шлем',cost:1,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_8+'knight-helmet.png'},
  {id:'emotion_orchid_ref5775',name:'Орхидея',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_8+'orchid.png'},
  {id:'emotion_pearl_martini_ref5776',name:'Жемчужный коктейль',cost:1,category:'emotion',effect:'drink',image:EMOTION_ASSET_BASE_9+'pearl-martini.png'},
  {id:'emotion_barrel_ref5776',name:'Бочка',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_9+'barrel.png'},
  {id:'emotion_cigar_box_ref5776',name:'Сигары',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_9+'cigar-box.png'},
  {id:'emotion_gold_cake_ref5776',name:'Золотой торт',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_9+'gold-cake.png'},
  {id:'emotion_black_bag_ref5776',name:'Чёрная сумка',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_9+'black-bag.png'},
  {id:'emotion_gold_fries_ref5776',name:'Картошка фри',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_9+'gold-fries.png'},
  {id:'emotion_black_velvet_cap_ref5776',name:'Чёрная кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'black-velvet-cap.png'},
  {id:'emotion_black_leather_cap_ref5776',name:'Кожаная кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'black-leather-cap.png'},
  {id:'emotion_charcoal_cap_ref5776',name:'Графитовая кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'charcoal-cap.png'},
  {id:'emotion_white_cap_ref5776',name:'Белая кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'white-cap.png'},
  {id:'emotion_beige_cap_ref5776',name:'Бежевая кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'beige-cap.png'},
  {id:'emotion_croc_cap_ref5776',name:'Кепка с цепью',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'croc-chain-cap.png'},
  {id:'emotion_mono_cap_ref5776',name:'Кепка с монограммой',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'monogram-cap.png'},
  {id:'emotion_plain_black_cap_ref5776',name:'Чёрная классика',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_9+'plain-black-cap.png'},
  {id:'emotion_queen_cap_ref5777',name:'Кепка QUEEN',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'queen-cap.png'},
  {id:'emotion_hello_cap_ref5777',name:'Розовая кепка HELLO',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'hello-cap.png'},
  {id:'emotion_savage_cap_ref5777',name:'Кепка SAVAGE',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'savage-cap.png'},
  {id:'emotion_poop_cap_ref5777',name:'Кепка 💩',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'poop-cap.png'},
  {id:'emotion_black_cap_ref5777',name:'Чёрная кепка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'black-logo-cap.png'},
  {id:'emotion_gramophone_ref5777',name:'Граммофон',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'gramophone.png'},
  {id:'emotion_floral_bucket_ref5777',name:'Панама с цветами',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'floral-bucket-hat.png'},
  {id:'emotion_piano_beanie_ref5777',name:'Музыкальная шапка',cost:2,category:'emotion',effect:'hat',image:EMOTION_ASSET_BASE_10+'piano-beanie.png'},
  {id:'emotion_grand_piano_ref5777',name:'Рояль',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'grand-piano.png'},
  {id:'emotion_music_notes_ref5777',name:'Музыкальные ноты',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'music-notes.png'},
  {id:'emotion_harp_ref5777',name:'Арфа',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'harp.png'},
  {id:'emotion_maracas_ref5777',name:'Маракасы',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'maracas.png'},
  {id:'emotion_music_controller_ref5777',name:'Музыкальный пульт',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_10+'music-controller.png'},
  {id:'emotion_pixel_glasses_ref5778',name:'Пиксельные очки',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_11+'pixel-glasses.png'},
  {id:'emotion_gold_microphone_ref5778',name:'Золотой микрофон',cost:1,category:'emotion',effect:'music',image:EMOTION_ASSET_BASE_11+'gold-microphone.png'},
  {id:'emotion_love_you_badge_ref5778',name:'I Love You',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'love-you-badge.png'},
  {id:'emotion_love_plaque_ref5778',name:'Любовь',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'love-plaque.png'},
  {id:'emotion_earrings_box_ref5778',name:'Серьги',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'earrings-box.png'},
  {id:'emotion_ruby_heart_ref5778',name:'Рубиновое сердце',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'ruby-heart.png'},
  {id:'emotion_red_heels_ref5778',name:'Красные туфли',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'red-heels.png'},
  {id:'emotion_heart_glasses_ref5778',name:'Очки-сердечки',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_11+'heart-glasses.png'},
  {id:'emotion_red_rose_ref5778',name:'Красная роза',cost:1,category:'emotion',effect:'flower',image:EMOTION_ASSET_BASE_11+'red-rose.png'},
  {id:'emotion_bandaged_heart_ref5778',name:'Сердце с пластырем',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'bandaged-heart.png'},
  {id:'emotion_chocolate_heart_ref5778',name:'Шоколадное сердце',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_11+'chocolate-heart.png'},
  {id:'emotion_fire_heart_ref5778',name:'Огненное сердце',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_11+'fire-heart.png'},
  {id:'emotion_heart_bow_ref5778',name:'Бантик с сердцем',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_11+'heart-bow.png'},
  {id:'emotion_mouse_mask_ref5780',name:'Чёрная маска',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_12+'mouse-mask.png'},
  {id:'emotion_studded_heels_ref5780',name:'Туфли с шипами',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_12+'studded-heels.png'},
  {id:'emotion_cat_mask_ref5780',name:'Маска кошки',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_12+'cat-mask.png'},
  {id:'emotion_plunger_ref5780',name:'Вантуз',cost:1,category:'emotion',effect:'throw',image:EMOTION_ASSET_BASE_12+'plunger.png'},
  {id:'emotion_ornate_mask_ref5780',name:'Чёрная маска с узором',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_12+'ornate-mask.png'},
  {id:'emotion_carnival_mask_ref5780',name:'Карнавальная маска',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_12+'carnival-mask.png'},
  {id:'emotion_vintage_car_ref5780',name:'Ретро автомобиль',cost:1,category:'emotion',effect:'float',image:EMOTION_ASSET_BASE_12+'vintage-car.png'},
  {id:'emotion_pearl_egg_ref5780',name:'Жемчужное яйцо',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_12+'pearl-egg.png'},
  {id:'emotion_lace_mask_ref5780',name:'Кружевная маска',cost:1,category:'emotion',effect:'photo',image:EMOTION_ASSET_BASE_12+'lace-mask.png'},
  {id:'emotion_fruit_basket_ref5780',name:'Корзина фруктов',cost:1,category:'emotion',effect:'feast',image:EMOTION_ASSET_BASE_12+'fruit-basket.png'},
  {id:'emotion_skull_ref5780',name:'Череп',cost:1,category:'emotion',effect:'orbit',image:EMOTION_ASSET_BASE_12+'skull.png'},
  {id:'emotion_gift_boxes_ref5780',name:'Подарки',cost:1,category:'emotion',effect:'bounce',image:EMOTION_ASSET_BASE_12+'gift-boxes.png'}
];
const emotionPropsByPlayer=new Map();
function emotionPlayerKey(p){return String(p?.id||`demo-${selectedSlot}`)}
function emotionAccent(g){
  const fx=String(g?.effect||''),id=String(g?.id||'');
  if(fx.startsWith('dirty_'))return '#8ee34f';
  if(id==='emotion_kiss'||id.includes('heart')||id.includes('rose'))return '#ff4e8c';
  if(fx==='hat'||fx==='drop'||fx==='halo'||fx==='ears'||fx==='horns'||fx==='bow')return '#ffd45a';
  if(fx==='drink'||fx==='splash'||fx==='steam')return '#62d6ff';
  if(fx==='fight')return '#ff6b42';
  if(fx==='music'||fx==='orbit')return '#9d83ff';
  if(fx==='feast'||fx==='rain')return '#ffb45a';
  return '#f0c862';
}
function emotionToyMarkup(g,extra=''){
  const emoji=String(g?.emoji||'🎁'),accent=emotionAccent(g),id=String(g?.id||''),image=String(g?.image||'');
  const special=id==='emotion_mud_splash'?' emotionToyMud':'';
  if(image)return `<span class="emotionToy assetEmotionToy ${extra}${special}" style="--gift-accent:${accent}"><i class="emotionToyShadow"></i><img class="emotionGiftAsset" src="${esc(image)}" alt=""><i class="emotionToyGlass"></i></span>`;
  return `<span class="emotionToy ${extra}${special}" style="--gift-accent:${accent}"><i class="emotionToyShadow"></i><i class="emotionToyBack">${emoji}</i><i class="emotionToyFront">${emoji}</i><i class="emotionToyGlass"></i></span>`;
}
function renderEmotionCatalog(){
  const box=$('#sheetGiftbar');if(!box)return;
  box.classList.add('referenceEmotionGrid');
  box.innerHTML=EMOTION_GIFTS.map(g=>{const transfer=Boolean(g.heartTransfer),label=transfer?`<small class="heartTransferCatalogLabel"><span class="referenceEmotionHeart">♥</span> Передать</small>`:`<small><span class="referenceEmotionHeart">♥</span> ${g.cost}</small>`,aria=transfer?`${esc(g.name)} · передать сердечки`:`${esc(g.name)} · ${g.cost} сердечек`;return `<button type="button" class="giftTile gift3d emotionCatalogTile referenceEmotionTile ${transfer?'heartTransferTile':''}" data-emotion-gift="${g.id}" data-effect="${g.effect||'emotion'}" aria-label="${aria}"><span class="referenceEmotionArt">${emotionToyMarkup(g,'catalogEmotionToy')}</span>${label}</button>`}).join('');
}

let pendingHeartTransfer=null;
function ensureHeartTransferModal(){
  if($('#heartTransferOverlay'))return;
  document.body.insertAdjacentHTML('beforeend',`<div class="heartTransferOverlay hidden" id="heartTransferOverlay"><button class="heartTransferBackdrop" id="heartTransferBackdrop" type="button" aria-label="Закрыть"></button><section class="heartTransferCard" role="dialog" aria-modal="true" aria-labelledby="heartTransferTitle"><button class="heartTransferClose" id="heartTransferClose" type="button" aria-label="Закрыть">×</button><div class="heartTransferBottle">♥</div><h3 id="heartTransferTitle">Передать сердечки</h3><p class="heartTransferSub">через <b>Кокс</b></p><div class="heartTransferRecipient"><div class="heartTransferAvatar" id="heartTransferAvatar"></div><div><small>Получатель</small><b id="heartTransferName">Игрок</b></div></div><div class="heartTransferBalance">Ваш баланс <b id="heartTransferBalance">0</b> ♥</div><div class="heartTransferQuick"><button type="button" data-heart-transfer-quick="1">1</button><button type="button" data-heart-transfer-quick="5">5</button><button class="active" type="button" data-heart-transfer-quick="10">10</button><button type="button" data-heart-transfer-quick="50">50</button><button type="button" data-heart-transfer-quick="100">100</button></div><label class="heartTransferInput"><span>♥</span><input id="heartTransferAmount" type="number" min="1" step="1" inputmode="numeric" value="10" aria-label="Количество сердечек"></label><div class="heartTransferError" id="heartTransferError"></div><button class="heartTransferSend" id="heartTransferSend" type="button">Передать ♥ 10</button><small class="heartTransferNote">Сердечки списываются с вашего баланса и переходят выбранному игроку.</small></section></div>`);
  const close=(reopen=true)=>{const o=$('#heartTransferOverlay');o?.classList.add('hidden');document.body.classList.remove('modalOpen');if(reopen&&selectedPlayer)$('#playerSheet')?.classList.remove('hidden');pendingHeartTransfer=null};
  $('#heartTransferClose').onclick=()=>close(true);$('#heartTransferBackdrop').onclick=()=>close(true);
  const input=$('#heartTransferAmount'),sendBtn=$('#heartTransferSend'),sync=()=>{const raw=input.value.trim();if(raw===''){sendBtn.disabled=true;sendBtn.textContent='Введите количество';document.querySelectorAll('[data-heart-transfer-quick]').forEach(b=>b.classList.remove('active'));$('#heartTransferError').textContent='';return}const n=Math.max(1,Math.floor(Number(raw)||1));if(String(n)!==raw)input.value=String(n);sendBtn.disabled=false;sendBtn.textContent=`Передать ♥ ${n}`;document.querySelectorAll('[data-heart-transfer-quick]').forEach(b=>b.classList.toggle('active',Number(b.dataset.heartTransferQuick)===n));$('#heartTransferError').textContent=''};
  input.oninput=sync;input.onfocus=()=>{try{input.select()}catch{}};document.querySelector('.heartTransferQuick').onclick=e=>{const b=e.target.closest('[data-heart-transfer-quick]');if(!b)return;input.value=b.dataset.heartTransferQuick;sync()};
  $('#heartTransferSend').onclick=()=>{const x=pendingHeartTransfer;if(!x)return;const raw=input.value.trim();if(raw===''){ $('#heartTransferError').textContent='Введите количество сердечек';return }const amount=Math.max(1,Math.floor(Number(raw)||1)),balance=currentGiftBalance();if(amount>balance){$('#heartTransferError').textContent=`Недостаточно сердечек · у вас ${balance}`;return}if(!isDemoMode()){const to=selectedTarget||x.target?.id;if(!to){$('#heartTransferError').textContent='Не удалось определить игрока';return}send({type:'heartTransfer',to,amount});toast(`Передача ♥ ${amount} отправлена`);close(false);closePlayerSheet();return}setHeartBalance(balance-amount);updateGiftBalance();const id=String(x.target?.id||`demo-${selectedSlot}`),key=`kissmeet.demo.receivedHearts.${id}`;try{localStorage.setItem(key,String(Math.max(0,Number(localStorage.getItem(key))||0)+amount))}catch{};const event={from:playerId,to:id,fromName:roomActorName(),toName:x.target?.name||'Игрок',amount};playEmotionGift(x.gift,x.target,x.source);addRoomActivity('❤️',`<b>${esc(event.fromName)}</b> передал <b>${amount} ♥</b> для <b>${esc(event.toName)}</b> через <b>Кокс</b>`,roomActorPhoto(),{ttlMs:6000,className:'heartTransferActivity'});toast(`Передано ♥ ${amount} · ${event.toName}`);close(false);closePlayerSheet();try{navigator.vibrate?.([12,25,18])}catch{}};
}
function openHeartTransfer(g,target,source){ensureHeartTransferModal();pendingHeartTransfer={gift:g,target,source};const bal=currentGiftBalance();$('#heartTransferBalance').textContent=heartBalanceLabel(bal);$('#heartTransferName').textContent=target?.name||'Игрок';$('#heartTransferAvatar').style.backgroundImage=`url("${target?.photo||''}")`;const input=$('#heartTransferAmount'),defaultAmount=Math.max(1,Math.min(10,bal||1));input.value=String(defaultAmount);$('#heartTransferSend').textContent=`Передать ♥ ${defaultAmount}`;$('#heartTransferError').textContent='';document.querySelectorAll('[data-heart-transfer-quick]').forEach(b=>b.classList.toggle('active',Number(b.dataset.heartTransferQuick)===defaultAmount));$('#playerSheet')?.classList.add('hidden');$('#heartTransferOverlay').classList.remove('hidden');document.body.classList.add('modalOpen')}

function emotionPlacement(g){
  const fx=g.effect||'pop',id=String(g.id||'');
  // Baseball-style caps attach at the side of the portrait, like the classic
  // Kiss & Meet accessory placement. Other hats/headwear keep their old top placement.
  if(/_cap(?:_|$)/.test(id))return{zone:'side',motion:'sideCap'};
  // Special placements that should NOT become the classic lower-right gift badge.
  if(id==='emotion_kiss')return{zone:'kiss',motion:'kiss'};
  if(id==='emotion_apple_splat'||id==='emotion_tomato_splat')return{zone:'photo',motion:'splat'};
  if(fx==='hat'||fx==='drop'||fx==='halo'||fx==='ears'||fx==='horns'||fx==='bow')return{zone:'top',motion:fx==='halo'?'halo':fx==='hat'?'drop':fx};
  if(fx==='photo')return{zone:'photo',motion:'photo'};

  // Everything else lands at the lower-right corner of the avatar like the
  // classic gift marker shown in the user's reference screenshot. The motion
  // still matches the object type (drink rises, car drives, music orbits, etc.).
  if(fx==='drink'||fx==='splash'||fx==='steam'||fx==='feast')return{zone:'corner',motion:fx};
  if(fx==='rain')return{zone:'corner',motion:'rain'};
  if(fx==='orbit')return{zone:'corner',motion:'orbit'};
  if(fx==='music')return{zone:'corner',motion:'music'};
  if(fx==='pattern'||fx==='wrap')return{zone:'corner',motion:fx};
  if(fx==='fight')return{zone:'corner',motion:'fight'};
  if(fx==='tease')return{zone:'corner',motion:'tease'};
  if(fx==='throw')return{zone:'corner',motion:'throw'};
  if(fx==='bounce'||fx==='flower')return{zone:'corner',motion:fx};
  if(fx==='yurt')return{zone:'corner',motion:'rise'};
  if(fx==='dirty_splat')return{zone:'corner',motion:'splat'};
  if(fx==='dirty_slime')return{zone:'corner',motion:'slime'};
  if(fx==='dirty_trash')return{zone:'corner',motion:'trash'};
  if(fx==='dirty_stink')return{zone:'corner',motion:'stink'};
  if(fx==='dirty_web')return{zone:'corner',motion:'web'};
  if(id.includes('car')||id.includes('boots')||id.includes('heels'))return{zone:'corner',motion:'drive'};
  if(id.includes('eiffel')||id.includes('sphinx')||id.includes('tower')||id.includes('phone_booth'))return{zone:'corner',motion:'rise'};
  return{zone:'corner',motion:'float'};
}
function clearEmotionProps(photo){if(!photo)return;photo.querySelectorAll('.persistentEmotionProp,.kissCover,.dirtyEmotionOverlay').forEach(x=>x.remove())}
function clearAttachedGiftVisuals(photo){
  if(!photo)return;
  photo.querySelectorAll('.giftCorner,.wearableGift,.persistentEmotionProp,.kissCover,.dirtyEmotionOverlay').forEach(x=>x.remove());
}
function clearAttachedGiftForPlayer(targetId,photo=null){
  const key=String(targetId||'');
  if(key)emotionPropsByPlayer.delete(key);
  clearAttachedGiftVisuals(photo||giftElForPlayer(targetId));
}
const emotionKissResetTimers=new Map();
function emotionStateFor(key){
  key=String(key);
  const old=emotionPropsByPlayer.get(key);
  if(old&&('top' in old||'side' in old||'corner' in old||'photo' in old||'dirty' in old||'kisses' in old)&&!old.mode){if(!('side' in old))old.side=null;return old;}
  const state={top:null,side:null,corner:null,photo:null,dirty:null,kisses:0};
  // Gracefully migrate the previous single-slot in-memory shape if this page was
  // already open while an update arrived.
  if(old?.mode==='gift')state[old.zone==='top'?'top':'corner']={...old};
  else if(old?.mode==='dirty')state.dirty={...old};
  else if(old?.mode==='kiss')state.kisses=Number(old.kisses)||0;
  emotionPropsByPlayer.set(key,state);
  return state;
}
function prepareEmotionRecipient(photo,key,g){
  // Top and lower gifts are independent slots. Sending one must NEVER remove
  // the other. Only replace the legacy marker occupying the same slot.
  const place=emotionPlacement(g);
  if(place.zone==='top')photo?.querySelectorAll('.wearableGift').forEach(x=>x.remove());
  else if(place.zone==='side')photo?.querySelectorAll('.persistentEmotionProp-side').forEach(x=>x.remove());
  else if(place.zone==='corner')photo?.querySelectorAll('.giftCorner').forEach(x=>x.remove());
  else if(place.zone==='photo')photo?.querySelectorAll('.persistentEmotionProp-photo').forEach(x=>x.remove());
}
function dirtyEmotionMarkup(id,image=''){
  if(id==='emotion_tomato_splat'&&image)return `<i class="referenceTomatoSplat"></i><img class="dirtyGiftAsset" src="${esc(image)}" alt="">`;
  if(id==='emotion_mud_splash')return '<i class="mudBlob m1"></i><i class="mudBlob m2"></i><i class="mudBlob m3"></i><b>💥</b>';
  if(id==='emotion_rotten_egg')return '<b class="dirtyCenter">🥚</b><i class="eggMess">💦</i><i class="stinkLine">〰〰</i>';
  if(id==='emotion_apple_splat')return '<b class="dirtyCenter tomato">🍎</b><i class="tomatoSplash">✹</i><i class="tomatoSplash t2">✹</i>';
  if(id==='emotion_tomato_splat')return '<b class="dirtyCenter tomato">🍅</b><i class="tomatoSplash">✹</i><i class="tomatoSplash t2">✹</i>';
  if(id==='emotion_slime')return '<i class="slimeTop"></i><i class="slimeDrop d1"></i><i class="slimeDrop d2"></i><i class="slimeDrop d3"></i>';
  if(id==='emotion_trash_rain')return '<b class="trashBit b1">🗑️</b><b class="trashBit b2">🧻</b><b class="trashBit b3">🥫</b><b class="trashBit b4">🗞️</b>';
  if(id==='emotion_stinky_socks')return '<b class="dirtyCenter">🧦</b><i class="stinkLine s1">〰</i><i class="stinkLine s2">〰</i><i class="stinkLine s3">〰</i>';
  if(id==='emotion_spiderweb')return '<b class="webFull">🕸️</b><i class="webSpider">🕷️</i>';
  if(id==='emotion_fish_stink')return '<b class="dirtyCenter">🐟</b><i class="stinkLine s1">〰</i><i class="stinkLine s2">〰</i><i class="stinkLine s3">〰</i>';
  return '<b class="dirtyCenter">🤢</b>';
}
function appendEmotionToy(photo,state){
  if(!state?.emoji&&!state?.image)return;
  const el=document.createElement('span');
  el.className=`persistentEmotionProp persistentEmotionProp-${state.zone||'corner'} referenceEmotionPersistent`;
  el.dataset.emotionId=String(state.id||'');
  el.innerHTML=emotionToyMarkup({emoji:state.emoji,image:state.image,effect:state.effect,id:state.id},'persistentEmotionToy');
  el.title=state.name||'';photo.appendChild(el);el.classList.add('propArrive');
}
function appendKissLayer(photo,count){
  count=Math.max(0,Math.min(20,Number(count)||0));if(!count)return;
  const layer=document.createElement('span');layer.className='kissCover'+(count>=20?' kissCoverFull':'');photo.appendChild(layer);
  const kissSpots=[
    [18,58,-16],[54,22,12],[8,34,-20],[63,58,18],[38,40,-6],
    [7,70,17],[72,72,-12],[41,9,8],[74,36,-18],[36,74,14],
    [15,12,-8],[52,50,20],[3,48,12],[72,7,-16],[52,70,-5],
    [25,25,18],[63,78,9],[47,25,-17],[17,45,6],[76,52,-10]
  ];
  layer.innerHTML=Array.from({length:count},(_,i)=>{
    if(count>=20){const col=i%5,row=Math.floor(i/5);return `<i style="left:${col*20+1}%;top:${row*25+1}%;--r:${((i*37)%40)-20}deg"><img src="${EMOTION_KISS_IMAGE}" alt=""></i>`}
    const [x,y,rot]=kissSpots[i%kissSpots.length];return `<i style="left:${x}%;top:${y}%;--r:${rot}deg"><img src="${EMOTION_KISS_IMAGE}" alt=""></i>`
  }).join('');
}
function renderEmotionState(photo,key){
  if(!photo)return;clearEmotionProps(photo);
  const state=emotionPropsByPlayer.get(String(key));if(!state)return;
  // Render all independent slots together: headwear + lower/right gift + photo prank + kisses.
  appendEmotionToy(photo,state.top);
  appendEmotionToy(photo,state.side);
  appendEmotionToy(photo,state.corner);
  appendEmotionToy(photo,state.photo);
  if(state.dirty){
    const layer=document.createElement('span');layer.className=`dirtyEmotionOverlay dirty-${String(state.dirty.id||'').replace(/^emotion_/,'').replace(/_/g,'-')}`;
    layer.innerHTML=dirtyEmotionMarkup(state.dirty.id,state.dirty.image||'');photo.appendChild(layer);
  }
  appendKissLayer(photo,state.kisses);
}
function restoreEmotionProps(photo,key){renderEmotionState(photo,key)}
function commitEmotionGift(photo,g,key){
  if(!photo||!g)return;key=String(key);const place=emotionPlacement(g),state=emotionStateFor(key);
  const id=String(g.id||'');
  if(['emotion_apple_splat','emotion_tomato_splat'].includes(id)){
    state.dirty={emoji:g.emoji,image:g.image||'',zone:'photo',motion:place.motion,name:g.name||'',id:g.id,effect:g.effect||'pop'};
  }else if(place.zone==='kiss'){
    // Every kiss gift also counts toward the visible total for this table.
    incrementTableKiss(key);
    // Kisses are their own independent layer. They accumulate to 20, show the
    // fully covered portrait briefly, then ONLY the kisses disappear/reset.
    clearTimeout(emotionKissResetTimers.get(key));
    const next=(Number(state.kisses)||0)>=20?1:(Number(state.kisses)||0)+1;
    state.kisses=next;
    emotionPropsByPlayer.set(key,state);renderEmotionState(photo,key);
    if(next>=20){
      const timer=setTimeout(()=>{
        const current=emotionPropsByPlayer.get(key);if(!current)return;
        current.kisses=0;emotionPropsByPlayer.set(key,current);
        const fresh=giftElForPlayer(key)||photo;if(fresh?.isConnected)renderEmotionState(fresh,key);
        emotionKissResetTimers.delete(key);
      },650);
      emotionKissResetTimers.set(key,timer);
    }
    return;
  }else{
    const slot=place.zone==='top'?'top':place.zone==='side'?'side':place.zone==='photo'?'photo':'corner';
    state[slot]={emoji:g.emoji,image:g.image||'',zone:slot,motion:place.motion,name:g.name||'',id:g.id,effect:g.effect||'pop'};
  }
  emotionPropsByPlayer.set(key,state);renderEmotionState(photo,key);
}
function emotionTargetFor(photo,zone){
  const r=photo.getBoundingClientRect();
  // Flight endpoints match the final classic avatar layout, so the object does
  // not jump after landing: headwear upper-left, ordinary gift right/lower,
  // first kiss inside the lower-left/center of the portrait.
  if(zone==='top')return{x:r.left-3,y:r.top-5};
  if(zone==='side')return{x:r.right+5,y:r.top+r.height*.24};
  if(zone==='bottom')return{x:r.left+r.width/2,y:r.bottom+10};
  if(zone==='corner')return{x:r.right+9,y:r.top+r.height*.68};
  if(zone==='kiss')return{x:r.left+r.width*.28,y:r.top+r.height*.64};
  if(zone==='photo')return{x:r.left+r.width/2,y:r.top+r.height*.5};
  return{x:r.right+10,y:r.top+r.height*.55};
}
function emotionFrames(motion,dx,dy){
  const end=`translate(-50%,-50%) translate(${dx}px,${dy}px)`;
  switch(motion){
    case 'drop':return[{transform:'translate(-50%,-50%) translateY(-150px) scale(.55) rotate(-18deg)',opacity:0},{transform:end+' scale(1.18) rotate(5deg)',opacity:1},{transform:end+' scale(1) rotate(-3deg)',opacity:1}];
    case 'sideCap':return[{transform:'translate(-50%,-50%) translate(120px,-24px) scale(.5) rotate(18deg)',opacity:0},{transform:end+' scale(1.12) rotate(-7deg)',opacity:1},{transform:end+' scale(1) rotate(-3deg)',opacity:1}];
    case 'halo':return[{transform:'translate(-50%,-50%) translateY(-130px) scale(.3) rotate(-90deg)',opacity:0},{transform:end+' scale(1.35) rotate(180deg)',opacity:1},{transform:end+' scale(1) rotate(360deg)',opacity:1}];
    case 'drink':return[{transform:'translate(-50%,-50%) translateY(140px) scale(.5) rotate(-10deg)',opacity:0},{transform:end+' scale(1.15) rotate(4deg)',opacity:1},{transform:end+' scale(1) rotate(-2deg)',opacity:1}];
    case 'splash':return[{transform:'translate(-50%,-50%) translateY(150px) scale(.4)',opacity:0},{transform:end+' scale(1.32) rotate(8deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'steam':return[{transform:'translate(-50%,-50%) translateY(145px) scale(.55)',opacity:0},{transform:end+' translateY(-14px) scale(1.12)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'feast':return[{transform:'translate(-50%,-50%) translateY(155px) scale(.45)',opacity:0},{transform:end+' scale(1.25)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'rain':return[{transform:'translate(-50%,-50%) translateY(-170px) rotate(-15deg) scale(.55)',opacity:0},{transform:end+' translateY(8px) rotate(7deg) scale(1.1)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'orbit':return[{transform:'translate(-50%,-50%) translate(-90px,30px) scale(.45) rotate(-180deg)',opacity:0},{transform:end+' translate(18px,-20px) scale(1.18) rotate(160deg)',opacity:1},{transform:end+' scale(1) rotate(360deg)',opacity:1}];
    case 'music':return[{transform:'translate(-50%,-50%) translate(-140px,0) scale(.5) rotate(-12deg)',opacity:0},{transform:end+' translate(12px,-8px) scale(1.2) rotate(8deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'pattern':return[{transform:'translate(-50%,-50%) scale(.25) rotate(-45deg)',opacity:0},{transform:end+' scale(1.35) rotate(12deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'wrap':return[{transform:'translate(-50%,-50%) translate(120px,0) scale(.45) rotate(28deg)',opacity:0},{transform:end+' scale(1.24) rotate(-8deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'fight':return[{transform:'translate(-50%,-50%) translate(-180px,0) scale(.55) rotate(-25deg)',opacity:0},{transform:end+' translate(-8px,0) scale(1.35) rotate(12deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'tease':return[{transform:'translate(-50%,-50%) translate(150px,-30px) scale(.5) rotate(22deg)',opacity:0},{transform:end+' scale(1.25) rotate(-10deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'throw':return[{transform:'translate(-50%,-50%) translate(-170px,90px) scale(.45) rotate(-80deg)',opacity:0},{transform:end+' translate(0,-18px) scale(1.22) rotate(15deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'drive':return[{transform:'translate(-50%,-50%) translate(-190px,95px) scale(.55)',opacity:0},{transform:end+' translate(18px,0) scale(1.2)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'rise':return[{transform:'translate(-50%,-50%) translateY(170px) scale(.3)',opacity:0},{transform:end+' translateY(-8px) scale(1.2)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'photo':return[{transform:'translate(-50%,-50%) scale(.25) rotate(-16deg)',opacity:0},{transform:end+' scale(1.35) rotate(7deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'kiss':return[{transform:'translate(-50%,-50%) translate(-150px,40px) scale(.35) rotate(-28deg)',opacity:0},{transform:end+' scale(1.5) rotate(10deg)',opacity:1},{transform:end+' scale(.92) rotate(-4deg)',opacity:1}];
    case 'pee':return[{transform:'translate(-50%,-50%) translate(190px,70px) scale(.55) rotate(10deg)',opacity:0},{transform:end+' translate(24px,4px) scale(1.18) rotate(-5deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'poop':return[{transform:'translate(-50%,-50%) translate(180px,80px) scale(.5) rotate(12deg)',opacity:0},{transform:end+' translate(18px,0) scale(1.2) rotate(-4deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'splat':return[{transform:'translate(-50%,-50%) translate(-180px,-80px) scale(.45) rotate(-40deg)',opacity:0},{transform:end+' scale(1.5) rotate(8deg)',opacity:1},{transform:end+' scale(.98)',opacity:1}];
    case 'slime':return[{transform:'translate(-50%,-50%) translateY(-170px) scale(.45)',opacity:0},{transform:end+' translateY(-12px) scale(1.3)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'trash':return[{transform:'translate(-50%,-50%) translateY(-180px) rotate(-60deg) scale(.4)',opacity:0},{transform:end+' scale(1.28) rotate(20deg)',opacity:1},{transform:end+' scale(1) rotate(0)',opacity:1}];
    case 'stink':return[{transform:'translate(-50%,-50%) translate(170px,-60px) scale(.45) rotate(22deg)',opacity:0},{transform:end+' scale(1.25) rotate(-8deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    case 'web':return[{transform:'translate(-50%,-50%) scale(2.4) rotate(-25deg)',opacity:0},{transform:end+' scale(.86) rotate(5deg)',opacity:1},{transform:end+' scale(1)',opacity:1}];
    default:return[{transform:'translate(-50%,-50%) translateY(120px) scale(.45)',opacity:0},{transform:end+' scale(1.2)',opacity:1},{transform:end+' scale(1)',opacity:1}];
  }
}
function emotionLandingFx(x,y,g,kind='spark'){
  const fx=document.createElement('div');fx.className='emotionLandingFx '+kind;fx.style.left=x+'px';fx.style.top=y+'px';fx.style.setProperty('--gift-accent',emotionAccent(g));
  fx.innerHTML=`<span class="emotionLandingRing"></span><span class="emotionLandingFlash"></span>${Array.from({length:10},(_,i)=>`<i style="--i:${i};--a:${i*36}deg">${kind==='kiss'?(i%3===0?'💋':'♥'):kind==='music'?(i%2?'♪':'♫'):'✦'}</i>`).join('')}`;
  document.body.appendChild(fx);setTimeout(()=>fx.remove(),820)
}
const emotionTapStreaks=new Map();
function bumpEmotionStreak(playerKey,g,photo){
  const k=playerKey+'|'+g.id,now=performance.now(),prev=emotionTapStreaks.get(k);
  const count=prev&&now-prev.t<720?Math.min(100,prev.count+1):1;
  emotionTapStreaks.set(k,{count,t:now});
  if(count<2||!photo)return count;
  const host=photo.closest('.person')||photo.parentElement||photo;
  let badge=host.querySelector('.emotionComboBadge');if(!badge){badge=document.createElement('b');badge.className='emotionComboBadge';host.appendChild(badge)}
  badge.textContent='×'+count;badge.classList.remove('show');void badge.offsetWidth;badge.classList.add('show');
  clearTimeout(badge.__hideTimer);badge.__hideTimer=setTimeout(()=>badge.remove(),680);
  return count;
}
function emotion3DFrames(place,dx,dy){
  const end=`translate(-50%,-50%) translate3d(${dx}px,${dy}px,0)`;
  const mid=(x,y,z,rx,ry,rz,sc)=>`translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`;
  const motion=place.motion,zone=place.zone;
  if(zone==='top')return[
    {transform:mid(0,0,-120,28,-35,-28,.42),opacity:0},
    {offset:.55,transform:mid(dx,dy-88,150,56,220,18,.92),opacity:1},
    {offset:.82,transform:mid(dx,dy+4,38,-18,315,-8,1.20),opacity:1},
    {transform:end+' rotateX(0deg) rotateY(360deg) rotateZ(-3deg) scale(1)',opacity:1}
  ];
  if(zone==='bottom')return[
    {transform:mid(0,0,-110,-25,-30,18,.42),opacity:0},
    {offset:.55,transform:mid(dx,dy+72,140,-34,190,-12,.95),opacity:1},
    {offset:.82,transform:mid(dx,dy-6,35,12,330,6,1.18),opacity:1},
    {transform:end+' rotateX(0deg) rotateY(360deg) rotateZ(0deg) scale(1)',opacity:1}
  ];
  if(zone==='photo'||zone==='kiss'){
    const punch=motion==='fight'?1.48:motion==='kiss'?1.38:1.25;
    return[
      {transform:mid(0,0,-130,18,-55,-24,.34),opacity:0},
      {offset:.5,transform:mid(dx*.58,dy*.45,170,-22,155,22,.86),opacity:1},
      {offset:.82,transform:mid(dx,dy,72,8,315,-7,punch),opacity:1},
      {transform:end+' rotateX(0deg) rotateY(360deg) rotateZ(0deg) scale(1)',opacity:1}
    ];
  }
  return[
    {transform:mid(0,0,-130,24,-62,-28,.34),opacity:0},
    {offset:.46,transform:mid(dx*.52,dy*.32-36,170,-18,145,24,.82),opacity:1},
    {offset:.78,transform:mid(dx*.88,dy*.86-12,70,12,290,-8,1.19),opacity:1},
    {transform:end+' rotateX(0deg) rotateY(360deg) rotateZ(0deg) scale(1)',opacity:1}
  ];
}
function playDogAnimePrank(g,photo,key,kind,sourcePoint=null){
  const r=photo.getBoundingClientRect(),stage=document.createElement('div');
  stage.className='dogAnimeStage '+kind;stage.style.setProperty('--gift-accent',emotionAccent(g));
  stage.innerHTML='<span class="dogAnimeShadow"></span><span class="dogAnimeBack">🐕</span><span class="dogAnimeBody">🐕</span><span class="dogAnimeGloss"></span><span class="dogAnimeAction"></span>';
  const source=sourcePoint||{x:Math.max(32,r.left-72),y:r.top+r.height*.68};
  const startX=source.x-34,startY=source.y-34,targetX=r.left+r.width*.58-34,targetY=r.top+r.height*.58-34;
  stage.style.left=startX+'px';stage.style.top=startY+'px';document.body.appendChild(stage);
  const dx=targetX-startX,dy=targetY-startY;
  stage.animate([
    {transform:'translate3d(0,18px,-100px) scale(.42) rotateY(-55deg) rotateZ(-8deg)',opacity:0},
    {offset:.22,transform:`translate3d(${dx*.18}px,${dy*.12}px,20px) scale(.68) rotateY(-30deg) rotateZ(4deg)`,opacity:1},
    {offset:.58,transform:`translate3d(${dx*.62}px,${dy*.48-14}px,86px) scale(.96) rotateY(18deg) rotateZ(-5deg)`,opacity:1},
    {offset:.82,transform:`translate3d(${dx*.88}px,${dy*.84+3}px,58px) scale(1.10) rotateY(-10deg) rotateZ(2deg)`,opacity:1},
    {transform:`translate3d(${dx}px,${dy}px,30px) scale(1.02) rotateY(0deg) rotateZ(0deg)`,opacity:1}
  ],{duration:1180,easing:'cubic-bezier(.16,.82,.2,1)',fill:'forwards'});
  setTimeout(()=>{stage.classList.add('arrived','acting');photo.classList.add('animeEmotionImpact');emotionLandingFx(r.left+r.width*.58,r.top+r.height*.62,g,kind==='dogPee'?'dirty':'poop');try{navigator.vibrate?.(kind==='dogPee'?[18,20,18]:[28,16,38])}catch{}},1190);
  setTimeout(()=>{commitEmotionGift(photo,g,key);photo.classList.remove('animeEmotionImpact');stage.classList.remove('acting');stage.classList.add('leaving')},kind==='dogPee'?2220:2140);
  setTimeout(()=>stage.remove(),2920)
}
function playEmotionGift(g,p,sourcePoint=null){
  try{giftSoundPlay(g.cost>=4)}catch{}
  const key=emotionPlayerKey(p),place=emotionPlacement(g);
  const photo=giftElForPlayer(p?.id)||document.querySelector(`.person[data-slot="${selectedSlot}"] .photo`);if(!photo)return;
  prepareEmotionRecipient(photo,key,g);
  bumpEmotionStreak(key,g,photo);
  const target=emotionTargetFor(photo,place.zone),start=sourcePoint||{x:innerWidth/2,y:innerHeight-72};
  const flight=document.createElement('div');flight.className=`emotionFlight emotion3DDelivery emotionFlight-${place.zone} motion-${place.motion}`;
  flight.style.left=start.x+'px';flight.style.top=start.y+'px';flight.style.setProperty('--gift-accent',emotionAccent(g));
  flight.innerHTML=emotionToyMarkup(g,'flightEmotionToy');document.body.appendChild(flight);
  const dx=target.x-start.x,dy=target.y-start.y;
  const duration=place.motion==='kiss'?610:place.motion==='fight'?650:820;
  const a=flight.animate(emotion3DFrames(place,dx,dy),{duration,easing:'cubic-bezier(.14,.84,.18,1)',fill:'forwards'});
  if(place.motion==='fight')setTimeout(()=>photo.classList.add('animeEmotionShake'),360),setTimeout(()=>photo.classList.remove('animeEmotionShake'),760);
  a.onfinish=()=>{
    flight.remove();
    const fresh=giftElForPlayer(p?.id)||document.querySelector(`.person[data-slot="${selectedSlot}"] .photo`);if(!fresh)return;
    commitEmotionGift(fresh,g,key);fresh.classList.add('animeEmotionImpact');
    const kind=place.motion==='kiss'?'kiss':place.motion==='music'?'music':String(g.effect||'').startsWith('dirty_')?'dirty':'spark';
    emotionLandingFx(target.x,target.y,g,kind);setTimeout(()=>fresh.classList.remove('animeEmotionImpact'),360)
  };
}

const NINE_HEART_GIFT_CATEGORIES=new Set(['popular','friendly','fun','style','tiktok','epic','food']);
function giftHeartCost(g){if(!g)return 0;if(g.category==='luxury')return 0;if(NINE_HEART_GIFT_CATEGORIES.has(g.category))return 9;return Math.max(0,Number(g.cost)||0)}
function giftCostLabel(g){const c=giftHeartCost(g);return c===0?'Бесплатно':`♥ ${c}`}
function closeGiftConfirm(reopen=false){const v=$('#giftConfirmVideo');if(v){v.pause();v.removeAttribute('src');v.load();v.hidden=true}const modal=$('#giftConfirm');if(modal){modal.classList.add('hidden');delete modal.dataset.gift}pendingGiftPurchase=null;document.body.classList.remove('modalOpen');if(reopen&&selectedPlayer)$('#playerSheet')?.classList.remove('hidden')}
function openGiftConfirm(g){const cost=giftHeartCost(g),target=selectedPlayer?.name||'Игрок';pendingGiftPurchase={giftId:g.id,cost};const modal=$('#giftConfirm');if(modal)modal.dataset.gift=g.id||'';$('#giftConfirmName').textContent=g.name||'Подарок';$('#giftConfirmText').textContent=`Отправить «${g.name||'Подарок'}» для ${target} за ❤️ ${cost}?`;$('#giftConfirmBalance').textContent=heartBalanceLabel(currentGiftBalance());$('#giftConfirmBuy').textContent=`Отправить · ❤️ ${cost}`;const img=$('#giftConfirmThumb'),vid=$('#giftConfirmVideo'),emo=$('#giftConfirmEmoji');img.hidden=true;vid.hidden=true;emo.hidden=true;if(g.videoUrl){vid.src=g.videoUrl;vid.poster=g.thumb||'';vid.hidden=false;vid.currentTime=0;vid.play().catch(()=>{})}else if(g.thumb){img.src=g.thumb;img.hidden=false}else{emo.hidden=false;emo.textContent=g.emoji||'🎁'};$('#playerSheet')?.classList.add('hidden');$('#giftConfirm')?.classList.remove('hidden');document.body.classList.add('modalOpen')}
function syncGiftSelectionUI(){const sel=giftCatalog().find(g=>g.id===selectedGiftId),info=$('#giftSelected'),sendBtn=$('#giftSendBtn');document.querySelectorAll('#sheetGiftbar [data-gift]').forEach(x=>x.classList.toggle('selected',!!sel&&x.dataset.gift===sel.id));if(giftCategory==='emotion'){if(info)info.innerHTML='<span>Эмоции отправляются сразу</span>';if(sendBtn){sendBtn.disabled=true;sendBtn.textContent='Выбери эмоцию'}return}if(!sel){if(info)info.innerHTML='<span>Выбери подарок</span>';if(sendBtn){sendBtn.disabled=true;sendBtn.textContent='Подарить'}return}if(info)info.innerHTML=`<span><b>${esc(sel.name)}</b><small>${giftCostLabel(sel)}</small></span>`;if(sendBtn){const who=shortName(selectedPlayer?.name||'Игрок');sendBtn.disabled=false;sendBtn.textContent=`Подарить ${who} · ${giftCostLabel(sel)}`}}
function renderGiftCatalog(){const box=$('#sheetGiftbar');if(!box)return;if(giftCategory==='emotion'){renderEmotionCatalog();$('#giftFooter')?.classList.add('ready');updateGiftBalance();syncGiftSelectionUI();return}box.classList.remove('referenceEmotionGrid');const list=giftCatalog().filter(g=>g.category===giftCategory);box.innerHTML=list.map(g=>`<button type="button" class="giftTile gift3d ${selectedGiftId===g.id?'selected':''} ${g.thumb?'giftMediaTile':''} ${g.videoUrl?'giftVideoTile':''}" data-gift="${g.id}" data-effect="${g.effect||'pop'}">${g.thumb?`<span class="giftThumbWrap"><img class="giftThumb" src="${esc(g.thumb)}" alt=""></span>`:`<span class="giftIcon">${g.emoji||GIFT_EMOJI[g.id]||'🎁'}</span>`}${g.videoUrl?'<span class="giftVideoMark">▶</span>':''}<b>${esc(g.name)}</b><small>${giftCostLabel(g)}</small>${g.epic?'<em>✦</em>':''}</button>`).join('');$('#giftFooter')?.classList.add('ready');updateGiftBalance();syncGiftSelectionUI()}
function setGiftCategoriesLocked(){
  const card=document.querySelector('.giftCard');
  card?.classList.remove('giftCategoriesLocked','giftCategoryMotion');
}
function openPlayerSheet(p,i){selectedSlot=i;selectedPlayer=p;selectedDemo=p.real?null:p;selectedTarget=(!isDemoMode()&&p.real&&p.id!==playerId)?p.id:null;selectedGiftId=null;giftCategory='popular';$('#sheetName').textContent=p.name;$('#giftToolbarTitle').textContent=p.name;$('#sheetHint').textContent=p.id===playerId?'Это вы':(isPlayerBlocked(p,i)?'Игрок заблокирован':'Отправить подарок');$('#sheetPhoto').style.backgroundImage=`url("${p.photo}")`;$('#playerSheet').classList.remove('hidden');syncBlockButton();document.querySelectorAll('#giftTabs [data-gift-cat]').forEach(b=>b.classList.toggle('active',b.dataset.giftCat==='popular'));$('#giftEmotionBtn')?.classList.remove('active');setGiftCategoriesLocked(false,{animate:false});renderGiftCatalog()}
function initGiftEmotion(){const btn=$('#giftEmotionBtn');if(!btn)return;btn.addEventListener('click',()=>{giftCategory='emotion';selectedGiftId=null;document.querySelectorAll('#giftTabs [data-gift-cat]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');setGiftCategoriesLocked(false);renderGiftCatalog()});}
function initGiftQuickActions(){const yt=$('#giftYoutubeBtn'),kick=$('#giftKickBtn'),block=$('#giftBlockBtn');if(yt)yt.onclick=()=>{if(!selectedPlayer)return;pendingGiftYoutubeTarget={id:selectedPlayer.id||`demo-${selectedSlot}`,name:selectedPlayer.name||'Игрок',photo:selectedPlayer.photo||'',slot:selectedSlot};closePlayerSheet();openYoutubeLibrary();toast(`Выберите YouTube для ${pendingGiftYoutubeTarget.name}`)};if(kick)kick.onclick=()=>{if(!selectedPlayer)return;if(selectedPlayer.self||selectedPlayer.id===playerId)return toast('Себя выгнать нельзя');const name=selectedPlayer.name||'Игрок';if(!confirm(`Выгнать ${name} из стола на 15 минут?`))return;const until=Date.now()+15*60*1000;try{localStorage.setItem(kickKeyFor(selectedPlayer,selectedSlot),String(until))}catch{};addRoomActivity('🚪',`<b>${esc(roomActorName())}</b> выгнал <b>${esc(name)}</b> со стола на <b>15 минут</b>`);$('#playerSheet').classList.add('hidden');if(isDemoMode()&&lastMsg?.view)renderPlayers(lastMsg.view,true,readTableSettings(room));toast(`${name} выгнан · вернётся через 15 мин`);try{navigator.vibrate?.([25,35,25])}catch{};setTimeout(()=>{if(isDemoMode()&&lastMsg?.view)renderPlayers(lastMsg.view,true,readTableSettings(room))},15*60*1000+250)};if(block)block.onclick=()=>{if(!isOwnerAccount())return;if(!selectedPlayer)return;if(selectedPlayer.self||selectedPlayer.id===playerId)return toast('Себя заблокировать нельзя');const name=selectedPlayer.name||'Игрок',was=isPlayerBlocked(selectedPlayer,selectedSlot);if(!was&&!confirm(`Заблокировать ${name}? Его сообщения и подарки будут скрыты для вас.`))return;setPlayerBlocked(selectedPlayer,selectedSlot,!was);syncBlockButton();if(lastMsg?.view)renderFeed(lastMsg.view);if(!was){closePlayerSheet();toast(`${name} заблокирован`)}else toast(`${name} разблокирован`);try{navigator.vibrate?.(18)}catch{}}}
function closePlayerSheet(){$('#playerSheet').classList.add('hidden');selectedGiftId=null}
function friendRequestStore(){try{return JSON.parse(localStorage.getItem('kissmeet.friendRequests.incoming')||'[]')}catch{return[]}}
function saveFriendRequestStore(v){localStorage.setItem('kissmeet.friendRequests.incoming',JSON.stringify(v.slice(0,30)))}
function seedDemoFriendRequest(){if(!isDemoMode())return;const key='kissmeet.friendRequests.seeded';if(localStorage.getItem(key)==='1')return;localStorage.setItem(key,'1');const demo=DEMO[1]||DEMO[0];if(!demo)return;const list=friendRequestStore();list.push({from:String(demo.id||'demo-request-1'),id:String(demo.id||'demo-request-1'),name:demo.name||'Игрок',photo:demo.photo||'',createdAt:Date.now()});saveFriendRequestStore(list)}
function drawFriendInboxBadge(list=friendRequestStore()){const badge=$('#friendInboxBadge');if(badge){badge.textContent=String(list.length);badge.classList.toggle('hidden',list.length===0)}const btn=$('#friendInboxBtn');btn?.classList.toggle('hasRequests',list.length>0)}
async function syncFriendInbox(){
  if(isDemoMode()){seedDemoFriendRequest();const list=friendRequestStore();drawFriendInboxBadge(list);return list}
  try{const r=await fetch(`/api/friends/inbox?playerId=${encodeURIComponent(playerId)}`,{cache:'no-store'});if(!r.ok)throw new Error('inbox');const data=await r.json();const list=Array.isArray(data.requests)?data.requests.map(x=>({...x,id:x.from})):[];saveFriendRequestStore(list);drawFriendInboxBadge(list);return list}catch{const list=friendRequestStore();drawFriendInboxBadge(list);return list}
}
function refreshFriendInbox(){drawFriendInboxBadge();void syncFriendInbox()}
async function respondFriendRequest(req,accept){
  if(!req)return false;
  if(isDemoMode())return true;
  try{const r=await fetch('/api/friends/respond',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({playerId,from:String(req.from||req.id||''),accept:!!accept})});return r.ok}catch{return false}
}
async function renderFriendRequests(){const box=$('#friendRequestsList');if(!box)return;const list=await syncFriendInbox();if(!list.length){box.innerHTML='<div class="friendRequestsEmpty"><span>✈️</span><b>Запросов пока нет</b><small>Новые приглашения в друзья появятся здесь.</small></div>';drawFriendInboxBadge([]);return}box.innerHTML=list.map((r,idx)=>`<article class="friendRequestCard" data-request-index="${idx}"><div class="friendRequestAvatar" style="background-image:url('${r.photo||''}')"></div><div class="friendRequestInfo"><b>${esc(r.name||'Игрок')}</b><small>хочет дружить</small><div class="friendRequestActions"><button type="button" class="friendAccept" data-friend-accept="${idx}">Дружить</button><button type="button" class="friendDecline" data-friend-decline="${idx}">Отказать</button></div></div></article>`).join('');box.querySelectorAll('[data-friend-accept]').forEach(btn=>btn.onclick=async()=>{const i=+btn.dataset.friendAccept;const rows=friendRequestStore();const r=rows[i];btn.disabled=true;if(await respondFriendRequest(r,true)){if(r)localStorage.setItem(`kissmeet.friend.${String(r.from||r.id)}`,'1');rows.splice(i,1);saveFriendRequestStore(rows);await renderFriendRequests();toast('Теперь вы друзья')}else{btn.disabled=false;toast('Не удалось принять запрос')}});box.querySelectorAll('[data-friend-decline]').forEach(btn=>btn.onclick=async()=>{const i=+btn.dataset.friendDecline;const rows=friendRequestStore();const r=rows[i];btn.disabled=true;if(await respondFriendRequest(r,false)){rows.splice(i,1);saveFriendRequestStore(rows);await renderFriendRequests();toast('Запрос отклонён')}else{btn.disabled=false;toast('Не удалось отклонить запрос')}})}
function openFriendRequests(){$('#settingsMenuView').classList.add('hidden');$('#settingsProfileView').classList.add('hidden');$('#settingsLanguageView').classList.add('hidden');$('#settingsRouletteView')?.classList.add('hidden');$('#settingsFriendRequestsView').classList.remove('hidden');void renderFriendRequests()}
function socialCandidates(){const list=[];if(lastMsg?.view){try{list.push(...(isDemoMode()?demoRoster():realRoster(lastMsg.view)))}catch{}}else if(isDemoMode()){try{list.push(...demoRoster())}catch{}}DEMO.forEach((d,i)=>list.push({...d,id:`demo-${i}`,real:false,self:false}));const out=new Map();list.forEach((x,i)=>{const id=String(x?.id||x?.name||i);if(id&&!out.has(id))out.set(id,{...x,id,_slot:i})});return out}
function friendRows(){const candidates=socialCandidates(),rows=[],seen=new Set();try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith('kissmeet.friend.')||localStorage.getItem(k)!=='1')continue;const id=k.slice('kissmeet.friend.'.length);if(!id||seen.has(id))continue;seen.add(id);const x=candidates.get(id)||{id,name:'Игрок',photo:photoFor(id,1),real:false,self:false};rows.push({id,name:x.name||'Игрок',photo:x.photo||photoFor(id,1),online:Boolean(candidates.get(id)?.real),player:x,slot:Number(x._slot)||0})}}catch{}if(!rows.length&&isDemoMode()){[0,2,4,6].forEach((idx)=>{const d=DEMO[idx];if(d)rows.push({id:`demo-${idx}`,name:d.name,photo:d.photo,online:idx===0||idx===4,player:{...d,id:`demo-${idx}`,real:false,self:false},slot:idx+1})})}return rows}
function blockedRows(){const candidates=socialCandidates(),ids=new Set(),prefix=`delbirim_block_${room}_`;try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(prefix)&&localStorage.getItem(k)==='1')ids.add(k.slice(prefix.length))}}catch{}return [...ids].map((id)=>{const x=candidates.get(id)||{id,name:'Игрок',photo:photoFor(id,1),real:false,self:false};return{id,name:x.name||'Игрок',photo:x.photo||photoFor(id,1),player:x,slot:Number(x._slot)||0}})}
function peopleSearchRows(){let list=[];try{if(lastMsg?.view&&!isDemoMode())list=realRoster(lastMsg.view);else list=demoRoster()}catch{list=DEMO.map((d,i)=>({...d,id:`demo-${i}`,real:false,self:false}))}const out=new Map();list.forEach((x,i)=>{const id=String(x?.id||x?.name||i);if(!id||id===String(playerId)||x?.self)return;if(!out.has(id))out.set(id,{id,name:x.name||'Игрок',photo:x.photo||photoFor(id,1),online:Boolean(x.real),player:x,slot:i})});return [...out.values()]}
function syncOwnerOnlyFriendsUi(){const owner=isOwnerAccount();document.querySelectorAll('#friendsManageTabs .ownerOnlyTab').forEach(x=>x.classList.toggle('hidden',!owner));if(!owner&&friendsViewTab==='blocked')friendsViewTab='friends'}
function friendSearchActionLabel(id){if(localStorage.getItem(`kissmeet.friend.${id}`)==='1')return '✓ Друг';if(localStorage.getItem(`kissmeet.friendRequest.outgoing.${id}`)==='1')return 'Запрос';return 'Дружить'}
function renderFriendsView(){const box=$('#friendsManageList');if(!box)return;syncOwnerOnlyFriendsUi();const input=$('#friendsManageSearchInput'),q=(input?.value||'').trim().toLowerCase(),friends=friendRows(),blocked=isOwnerAccount()?blockedRows():[],people=peopleSearchRows();$('#friendsCountBadge').textContent=String(friends.length);$('#blockedCountBadge').textContent=String(blocked.length);document.querySelectorAll('#friendsManageTabs [data-friends-tab]').forEach(x=>x.classList.toggle('active',x.dataset.friendsTab===friendsViewTab));if(input)input.placeholder=friendsViewTab==='people'?'Имя человека':'Поиск';let rows=friendsViewTab==='blocked'?blocked:friendsViewTab==='people'?people:friends;if(q)rows=rows.filter(r=>String(r.name||'').toLowerCase().includes(q));if(!rows.length){if(friendsViewTab==='people')box.innerHTML=`<div class="friendsManageEmpty"><span>⌕</span><b>${q?'Никого не нашли':'Найти людей'}</b><small>${q?'Попробуйте другое имя.':'Введите имя или выберите человека из списка.'}</small></div>`;else if(friendsViewTab==='blocked')box.innerHTML='<div class="friendsManageEmpty"><span>🛡️</span><b>Заблокированных нет</b><small>Эта админ-функция доступна только владельцу.</small></div>';else box.innerHTML='<div class="friendsManageEmpty"><span>👥</span><b>Друзей пока нет</b><small>Откройте «Поиск людей» и отправьте запрос.</small></div>';return}if(friendsViewTab==='people'){box.innerHTML=rows.map((r,idx)=>{const label=friendSearchActionLabel(r.id),state=label==='✓ Друг'?'active':label==='Запрос'?'requested':'';return `<article class="friendsManageCard peopleSearchCard"><button class="friendsAvatarButton" type="button" data-people-open="${idx}"><div class="friendsManageAvatar" style="background-image:url('${r.photo||''}')">${r.online?'<i></i>':''}</div></button><div class="friendsManageInfo"><b>${esc(r.name||'Игрок')}</b><small>${r.online?'● Сейчас в игре':'Игрок Delbirim'}</small></div><button class="friendsAddBtn ${state}" type="button" data-people-add="${idx}">${label}</button></article>`}).join('');box.querySelectorAll('[data-people-open]').forEach(btn=>btn.onclick=()=>{const r=rows[+btn.dataset.peopleOpen];if(!r)return;closeSettings();openPlayerProfile(r.player,r.slot)});box.querySelectorAll('[data-people-add]').forEach(btn=>btn.onclick=async()=>{const r=rows[+btn.dataset.peopleAdd];if(!r)return;const id=String(r.id);if(friendSearchActionLabel(id)!=='Дружить')return;btn.disabled=true;const ok=await sendFriendRequestTo(r.player);btn.disabled=false;if(!ok){toast('Не удалось отправить запрос');return}localStorage.setItem(`kissmeet.friendRequest.outgoing.${id}`,'1');btn.textContent='Запрос';btn.classList.add('requested');toast('Запрос в друзья отправлен')});return}box.innerHTML=rows.map((r,idx)=>friendsViewTab==='blocked'?`<article class="friendsManageCard"><div class="friendsManageAvatar" style="background-image:url('${r.photo||''}')"></div><div class="friendsManageInfo"><b>${esc(r.name||'Игрок')}</b><small>Заблокирован владельцем</small></div><button class="friendsUnblockBtn" type="button" data-friends-unblock="${idx}">Разблокировать</button></article>`:`<article class="friendsManageCard"><div class="friendsManageAvatar" style="background-image:url('${r.photo||''}')">${r.online?'<i></i>':''}</div><div class="friendsManageInfo"><b>${esc(r.name||'Игрок')}</b><small>${r.online?'● Сейчас в игре':'Друг'}</small></div><button class="friendsProfileBtn" type="button" data-friends-open="${idx}">Профиль</button></article>`).join('');if(friendsViewTab==='blocked'){box.querySelectorAll('[data-friends-unblock]').forEach(btn=>btn.onclick=()=>{if(!isOwnerAccount())return;const r=rows[+btn.dataset.friendsUnblock];if(!r)return;setPlayerBlocked(r.player,r.slot,false);toast(`${r.name} разблокирован`);renderFriendsView();if(lastMsg?.view)renderFeed(lastMsg.view)})}else{box.querySelectorAll('[data-friends-open]').forEach(btn=>btn.onclick=()=>{const r=rows[+btn.dataset.friendsOpen];if(!r)return;closeSettings();openPlayerProfile(r.player,r.slot)})}}
function openFriendsManager(){friendsViewTab='friends';$('#settingsMenuView').classList.add('hidden');$('#settingsProfileView').classList.add('hidden');$('#settingsLanguageView').classList.add('hidden');$('#settingsRouletteView')?.classList.add('hidden');$('#settingsFriendRequestsView')?.classList.add('hidden');$('#settingsFriendsView').classList.remove('hidden');const input=$('#friendsManageSearchInput');if(input)input.value='';syncOwnerOnlyFriendsUi();renderFriendsView()}
async function sendFriendRequestTo(p){
  const friendId=String(p?.id||p?.name||'');if(!friendId)return false;
  if(isDemoMode()||!p?.real)return true;
  const self=document.querySelector('.person.self');const src=self?.querySelector('img')?.src||'';const photo=src.startsWith('https://')?src:'';const name=(localStorage.getItem('kissmeet.profile.name')||self?.querySelector('.name')?.textContent||'Player 1').trim().slice(0,48);
  try{const r=await fetch('/api/friends/request',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({from:playerId,to:friendId,name,photo})});return r.ok}catch{return false}
}
async function syncFriendStatus(p,button){
  if(!p?.real||isDemoMode()||!p.id)return;
  const friendId=String(p.id);try{const r=await fetch(`/api/friends/status?playerId=${encodeURIComponent(playerId)}&otherId=${encodeURIComponent(friendId)}`,{cache:'no-store'});if(!r.ok)return;const st=await r.json();if(st.isFriend){localStorage.setItem(`kissmeet.friend.${friendId}`,'1');localStorage.removeItem(`kissmeet.friendRequest.outgoing.${friendId}`);button.textContent='✓ Друг';button.classList.add('active');button.classList.remove('requested')}else if(st.pendingOutgoing){localStorage.setItem(`kissmeet.friendRequest.outgoing.${friendId}`,'1');button.textContent='Запрос';button.classList.add('requested');button.classList.remove('active')}}catch{}
}
function suitorForProfile(p,i){
  const currentId=String(p?.id||'');
  const stored=p?.suitorId||p?.courtshipId||(currentId?profile(currentId)?.suitorId:null)||(currentId?profile(currentId)?.courtshipId:null);
  const demoPool=DEMO.map((d,idx)=>({...d,id:`demo-${idx}`,real:false,self:false}));
  const livePool=lastMsg?.view&&!isDemoMode()?realRoster(lastMsg.view):demoPool;
  if(stored){const exact=livePool.find(x=>String(x.id)===String(stored));if(exact)return exact}
  let candidates=livePool.filter(x=>String(x.id)!==currentId&&String(x.id)!==String(playerId));
  if(!candidates.length)candidates=demoPool.filter(x=>String(x.id)!==currentId);
  const key=String(p?.id||p?.name||i||'profile');
  return candidates[Math.abs(hashString(key)+Number(i||0)*17)%candidates.length]||demoPool[0];
}
function courtshipStateKey(p){return `kissmeet.courtshipState.${String(p?.id||p?.name||'player')}`}
function normalizeCourtshipHearts(v){const n=Math.floor(Number(v));return Number.isFinite(n)&&n>=1?n:1}
function nextCourtshipHearts(current){return normalizeCourtshipHearts(current)+1}
function readCourtshipState(p,i){
  const key=courtshipStateKey(p);
  try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&saved.suitorId&&saved.suitorName){return {...saved,hearts:normalizeCourtshipHearts(saved.hearts)}}}catch{}
  const suitor=suitorForProfile(p,i);const state={targetId:String(p?.id||p?.name||''),suitorId:String(suitor?.id||suitor?.name||'suitor'),suitorName:String(suitor?.name||'Игрок'),suitorPhoto:suitor?.photo||photoFor(suitor?.id||suitor?.name||'suitor',1),hearts:1};
  localStorage.setItem(key,JSON.stringify(state));return state
}
function saveCourtshipState(p,state){const clean={targetId:String(p?.id||p?.name||''),suitorId:String(state.suitorId||''),suitorName:String(state.suitorName||'Игрок'),suitorPhoto:String(state.suitorPhoto||''),hearts:normalizeCourtshipHearts(state.hearts)};localStorage.setItem(courtshipStateKey(p),JSON.stringify(clean));return clean}
function openPlayerProfile(p,i){
  selectedSlot=i;selectedPlayer=p;closePlayerSheet();
  $('#profileName').textContent=p.name;$('#profileHero').style.backgroundImage=`url("${p.photo}")`;
  const profileCard=document.querySelector('.profileCardModern'),profileHero=$('#profileHero'),profileBelow=document.querySelector('.profileBelow');
  profileCard?.classList.toggle('top10Profile',Boolean(p.topRank));
  if(profileCard){if(p.topRank)profileCard.dataset.topRank=String(p.topRank);else delete profileCard.dataset.topRank}
  profileHero?.querySelector('.profileTop10Badge')?.remove();
  profileBelow?.querySelector('.profileTop10Meta')?.remove();
  if(p.topRank&&profileHero){
    const badge=document.createElement('div');badge.className='profileTop10Badge';badge.textContent=p.topLabel||'ТОП 10';profileHero.appendChild(badge);
    if(profileBelow){
      const meta=document.createElement('div');meta.className='profileTop10Meta';
      const left=document.createElement('b');left.textContent=`№ ${p.topRank} в рейтинге`;
      const right=document.createElement('span');right.textContent=`${p.rankIcon||'★'} ${Number(p.rankScore||0).toLocaleString('ru-RU')}`;
      meta.append(left,right);profileBelow.prepend(meta);
    }
  }
  const seed=(p.badge||0)+i*17;$('#profileKisses').textContent=(seed*137+862)%90000;$('#profileLikes').textContent=(seed*23+348)%9999;
  const selfProfile=String(p.id||'')===String(playerId)||p.self===true;let pics;
  if(selfProfile){const saved=[localStorage.getItem('kissmeet.profile.main'),localStorage.getItem('kissmeet.profile.extra1'),localStorage.getItem('kissmeet.profile.extra2')].filter(Boolean);const heroPhoto=localStorage.getItem('kissmeet.profile.main')||p.photo;p.photo=heroPhoto;$('#profileHero').style.backgroundImage=`url("${heroPhoto}")`;while(saved.length<3)saved.push(heroPhoto);pics=saved.slice(0,3)}
  else{pics=[photoFor(`${p.id||p.name}-a`,i+3),photoFor(`${p.id||p.name}-b`,i+9),photoFor(`${p.id||p.name}-c`,i+14)]}
  $('#profileGallery').innerHTML=pics.map((src,n)=>`<button type="button" class="profileThumb ${n===0?'active':''}" style="background-image:url('${src}')" data-src="${src}"></button>`).join('');

  let courtState=readCourtshipState(p,i);
  const courtAvatar=$('#courtshipAvatar'),courtName=$('#courtshipName'),courtHearts=$('#courtshipHearts'),courtBtn=$('#courtshipBtn');
  const self=document.querySelector('.person.self');
  const myPhoto=localStorage.getItem('kissmeet.profile.main')||self?.querySelector('img')?.src||photoFor(playerId,1);
  const myName=(localStorage.getItem('kissmeet.profile.name')||self?.querySelector('.name')?.textContent||'Player 1').trim();
  const renderCourtship=()=>{
    const currentHearts=normalizeCourtshipHearts(courtState.hearts);const nextHearts=nextCourtshipHearts(currentHearts);const amSuitor=String(courtState.suitorId)===String(playerId);
    courtAvatar.style.backgroundImage=`url("${courtState.suitorPhoto}")`;courtAvatar.setAttribute('role','button');courtAvatar.setAttribute('aria-label',`Открыть профиль ${courtState.suitorName}`);courtAvatar.tabIndex=0;
    courtName.textContent=courtState.suitorName;courtHearts.textContent=String(currentHearts);
    courtBtn.innerHTML=amSuitor?`<span>💛 Ухаживаю</span><span class="courtshipBidPrice">♥ ${currentHearts}</span>`:`<span>💛 Ухаживать</span><span class="courtshipBidPrice">♥ ${nextHearts}</span>`;
    courtBtn.classList.toggle('active',amSuitor);courtBtn.dataset.bid=String(amSuitor?currentHearts:nextHearts);
  };
  const openSuitorProfile=()=>{const sid=String(courtState.suitorId||'');const demoIndex=DEMO.findIndex((d,idx)=>sid===`demo-${idx}`||d.name===courtState.suitorName);openPlayerProfile({id:sid,name:courtState.suitorName,photo:courtState.suitorPhoto,badge:0,real:sid===String(playerId),self:sid===String(playerId)},demoIndex>=0?demoIndex:0)};
  courtAvatar.onclick=e=>{e.stopPropagation();openSuitorProfile()};courtAvatar.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSuitorProfile()}};
  renderCourtship();$('#courtshipRank').textContent='';
  courtBtn.onclick=()=>{
    if(String(courtState.suitorId)===String(playerId)){toast(`Вы уже ухажёр · ♥ ${courtState.hearts}`);return}
    const price=nextCourtshipHearts(courtState.hearts),balance=getHeartBalance();if(balance<price){toast(`Нужно ♥ ${price}`);return}
    setHeartBalance(balance-price);
    courtState=saveCourtshipState(p,{suitorId:playerId,suitorName:myName,suitorPhoto:myPhoto,hearts:price});
    renderCourtship();toast(`${myName} теперь ухажёр · ♥ ${price}`)
  };

  const friendsBtn=$('#profileFriendsBtn');const friendId=String(p.id||p.name);const friendKey=`kissmeet.friend.${friendId}`;const reqKey=`kissmeet.friendRequest.outgoing.${friendId}`;const isFriend=localStorage.getItem(friendKey)==='1';const requested=localStorage.getItem(reqKey)==='1';friendsBtn.textContent=isFriend?'✓ Друг':requested?'Запрос':'Дружить';friendsBtn.classList.toggle('active',isFriend);friendsBtn.classList.toggle('requested',requested&&!isFriend);friendsBtn.onclick=async()=>{if(localStorage.getItem(friendKey)==='1'){friendsBtn.textContent='✓ Друг';return}if(localStorage.getItem(reqKey)==='1'){friendsBtn.textContent='Запрос';return}friendsBtn.disabled=true;const ok=await sendFriendRequestTo(p);friendsBtn.disabled=false;if(!ok){toast('Не удалось отправить запрос');return}localStorage.setItem(reqKey,'1');friendsBtn.textContent='Запрос';friendsBtn.classList.add('requested');toast('Запрос в друзья отправлен')};void syncFriendStatus(p,friendsBtn);
  const actionBar=document.querySelector('.profileActionBar');let adminBlock=actionBar.querySelector('.profileOwnerBlockBtn');if(!adminBlock){adminBlock=document.createElement('button');adminBlock.type='button';adminBlock.className='profileOwnerBlockBtn hidden';adminBlock.innerHTML='🚫 <span>Заблокировать</span>';actionBar.appendChild(adminBlock)}const canOwnerBlock=isOwnerAccount()&&!selfProfile;adminBlock.classList.toggle('hidden',!canOwnerBlock);if(canOwnerBlock){const syncAdminBlock=()=>{const on=isPlayerBlocked(p,i);adminBlock.classList.toggle('blocked',on);adminBlock.innerHTML=on?'🔓 <span>Разблокировать</span>':'🚫 <span>Заблокировать</span>'};syncAdminBlock();adminBlock.onclick=()=>{if(!isOwnerAccount()||selfProfile)return;const was=isPlayerBlocked(p,i),name=p.name||'Игрок';if(!was&&!confirm(`Заблокировать ${name}?`))return;setPlayerBlocked(p,i,!was);syncAdminBlock();syncBlockButton();if(lastMsg?.view)renderFeed(lastMsg.view);toast(!was?`${name} заблокирован`:`${name} разблокирован`)}}actionBar.querySelector('.profileMsgBtn').onclick=()=>{closePlayerProfile();setTimeout(()=>{const m=document.querySelector('#msg');if(m){m.focus();m.placeholder='Сообщение для '+p.name}},80)};actionBar.querySelector('.profileGiftBtn').onclick=()=>{closePlayerProfile();setTimeout(()=>openPlayerSheet(p,i),80)};const msgBtn=document.querySelector('.profileMsgBtn');if(msgBtn)msgBtn.onclick=()=>{closePlayerProfile();const chat=$('#chatArea');chat?.scrollIntoView({behavior:'smooth',block:'end'});setTimeout(()=>selectChatReplyTarget({id:p.id||null,name:p.name||'Игрок'}),180)};$('#playerProfile').classList.remove('hidden')
}

function closePlayerProfile(){$('#playerProfile').classList.add('hidden')}
function giftElForPlayer(id){for(const el of document.querySelectorAll('.person[data-player-id]'))if(el.dataset.playerId===String(id))return el.querySelector('.photo');return null}
function giftFallbackSource(){const r=document.querySelector('#giftSendBtn')?.getBoundingClientRect();if(r)return{x:r.left+r.width/2,y:r.top+r.height/2};return{x:innerWidth/2,y:innerHeight-90}}
function giftFallbackTarget(){return{x:innerWidth/2,y:Math.max(220,innerHeight*.42)}}
function giftPoint(el,fallback){if(!el)return fallback;const r=el.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2}}
function gameSoundEnabled(){return localStorage.getItem('kissmeet.sound')!=='off'}function gameMusicEnabled(){return localStorage.getItem('kissmeet.music')!=='off'}function giftSoundPlay(epic=false){if(!gameSoundEnabled())return;try{const C=window.AudioContext||window.webkitAudioContext,ctx=new C(),o=ctx.createOscillator(),g=ctx.createGain();o.type=epic?'sine':'triangle';o.frequency.setValueAtTime(epic?220:520,ctx.currentTime);o.frequency.exponentialRampToValueAtTime(epic?880:760,ctx.currentTime+.28);g.gain.setValueAtTime(.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.11,ctx.currentTime+.03);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.42);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.45)}catch{}}
function lionSoundEnabled(){return gameSoundEnabled()}
const LION_SOUND_URL='https://kiss-meet-club.higgsfield.app/assets/gifts/lion-real-v4/lion-sound-v10.mp3?v=10';
function ensurePremiumLionVideo(){
  let v=window.__kissMeetPremiumLionVideo;
  if(v&&v.isConnected)return v;
  v=document.createElement('video');
  v.src='https://kiss-meet-club.higgsfield.app/assets/gifts/lion-real-v4/lion-jump-real-v10-silent.mp4?v=10';
  v.preload='auto';v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.crossOrigin='anonymous';v.loop=false;v.muted=true;v.volume=1;v.className='premiumLionSourceVideo';
  document.body.appendChild(v);window.__kissMeetPremiumLionVideo=v;return v;
}
function ensureLionAudioElement(){
  let snd=window.__kissMeetLionGiftSound;
  if(snd)return snd;
  snd=document.createElement('audio');snd.src=LION_SOUND_URL;snd.preload='auto';snd.loop=false;snd.muted=false;snd.volume=1;snd.setAttribute('playsinline','');snd.style.display='none';document.body.appendChild(snd);window.__kissMeetLionGiftSound=snd;return snd;
}
function ensureLionAudioContext(){
  try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;let ctx=window.__kissMeetLionAudioCtx;if(!ctx){ctx=new C();window.__kissMeetLionAudioCtx=ctx}return ctx}catch{return null}
}
function loadLionAudioBuffer(){
  if(window.__kissMeetLionAudioBuffer)return Promise.resolve(window.__kissMeetLionAudioBuffer);
  if(window.__kissMeetLionAudioLoading)return window.__kissMeetLionAudioLoading;
  const ctx=ensureLionAudioContext();if(!ctx)return Promise.resolve(null);
  window.__kissMeetLionAudioLoading=fetch(LION_SOUND_URL,{cache:'force-cache'}).then(r=>{if(!r.ok)throw new Error('lion audio fetch');return r.arrayBuffer()}).then(b=>ctx.decodeAudioData(b)).then(buf=>{window.__kissMeetLionAudioBuffer=buf;return buf}).catch(()=>null);
  return window.__kissMeetLionAudioLoading;
}
function primeLionGiftAudio(){
  if(!lionSoundEnabled())return;
  try{const snd=ensureLionAudioElement();if(!snd.readyState)snd.load()}catch{}
  const ctx=ensureLionAudioContext();try{if(ctx?.state==='suspended')ctx.resume().catch(()=>{})}catch{};loadLionAudioBuffer();
}
function startLionGiftSoundFromGesture(){
  if(!lionSoundEnabled())return null;
  primeLionGiftAudio();
  try{
    const snd=ensureLionAudioElement();snd.pause();snd.currentTime=0;snd.muted=false;snd.volume=1;
    const p=snd.play();p?.then?.(()=>{window.__kissMeetLionGestureStart=performance.now()}).catch(()=>{});return snd;
  }catch{return null}
}
document.addEventListener('pointerdown',primeLionGiftAudio,{capture:true,passive:true});
function lionGiftSound(){
  if(!lionSoundEnabled())return null;
  try{
    const snd=ensureLionAudioElement();
    if(!snd.paused&&snd.currentTime>0&&snd.currentTime<2.5)return snd;
  }catch{}
  const ctx=ensureLionAudioContext(),buf=window.__kissMeetLionAudioBuffer;
  if(ctx&&buf&&ctx.state==='running'){
    try{window.__kissMeetLionAudioSource?.stop?.()}catch{}
    try{const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buf;gain.gain.value=1;source.connect(gain);gain.connect(ctx.destination);source.start(0);window.__kissMeetLionAudioSource=source;return{stop:()=>{try{source.stop()}catch{}}}}catch{}
  }
  try{const snd=ensureLionAudioElement();snd.pause();snd.currentTime=0;snd.muted=false;snd.volume=1;snd.play()?.catch?.(()=>{});return snd}catch{return null}
}
function stopLionGiftSound(handle){try{handle?.stop?.()}catch{};try{handle?.pause?.();if(handle&&'currentTime' in handle)handle.currentTime=0}catch{}}
function startLionChromaCanvas(canvas,video){
  let gl=null,raf=0,stopped=false,texture=null,program=null,buffer=null;
  try{gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false})||canvas.getContext('experimental-webgl',{alpha:true,premultipliedAlpha:false})}catch{}
  if(!gl)return()=>{};
  const compile=(type,source)=>{const sh=gl.createShader(type);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh)||'shader');return sh};
  try{
    const vs=compile(gl.VERTEX_SHADER,'attribute vec2 aPos;attribute vec2 aTex;varying vec2 vTex;void main(){vTex=aTex;gl_Position=vec4(aPos,0.0,1.0);}');
    const fs=compile(gl.FRAGMENT_SHADER,'precision mediump float;uniform sampler2D uTex;varying vec2 vTex;void main(){vec4 c=texture2D(uTex,vTex);float rb=max(c.r,c.b);float dominance=c.g-rb;float total=max(c.r+c.g+c.b,0.001);float greenShare=c.g/total;float keyA=smoothstep(0.010,0.075,dominance);float keyB=smoothstep(0.355,0.435,greenShare)*smoothstep(0.0,0.065,dominance);float key=max(keyA,keyB);float a=c.a*(1.0-key);if(a<0.035)discard;float spill=max(0.0,c.g-rb);float cleanG=max(0.0,c.g-spill*0.96);vec3 rgb=vec3(c.r,cleanG,c.b);gl_FragColor=vec4(rgb,a);}');
    program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('program');gl.useProgram(program);
    buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]),gl.STATIC_DRAW);
    const pa=gl.getAttribLocation(program,'aPos'),ta=gl.getAttribLocation(program,'aTex');gl.enableVertexAttribArray(pa);gl.vertexAttribPointer(pa,2,gl.FLOAT,false,16,0);gl.enableVertexAttribArray(ta);gl.vertexAttribPointer(ta,2,gl.FLOAT,false,16,8);
    texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.uniform1i(gl.getUniformLocation(program,'uTex'),0);gl.clearColor(0,0,0,0);
  }catch{return()=>{}};
  const draw=()=>{if(stopped)return;try{if(video.readyState>=2&&video.videoWidth){const w=video.videoWidth,h=video.videoHeight;if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h)}gl.clear(gl.COLOR_BUFFER_BIT);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,video);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}}catch{}raf=requestAnimationFrame(draw)};draw();
  return()=>{stopped=true;cancelAnimationFrame(raf);try{if(texture)gl.deleteTexture(texture);if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program)}catch{}};
}
function showLionAfterglow(x,y){
  document.querySelector('.lionAfterglow')?.remove();
  const fx=document.createElement('div');fx.className='lionAfterglow';fx.style.setProperty('--fx-x',Math.round(x)+'px');fx.style.setProperty('--fx-y',Math.round(y)+'px');
  fx.innerHTML=`<div class="lionAfterglowRing r1"></div><div class="lionAfterglowRing r2"></div><div class="lionAfterglowRing r3"></div><div class="lionClaw c1"></div><div class="lionClaw c2"></div><div class="lionClaw c3"></div><div class="lionSigil">✦</div><div class="lionSparkField">${Array.from({length:24},(_,i)=>`<i style="--a:${i*15}deg;--d:${(i%6)*.035}s;--r:${90+(i%7)*18}px"></i>`).join('')}</div>`;
  document.body.appendChild(fx);try{navigator.vibrate?.([35,24,70])}catch{};setTimeout(()=>fx.remove(),2100);
}
function showPremiumLionGift(from='Игрок',to='Игрок'){
  document.querySelector('.premiumLionTakeover')?.remove();document.querySelector('.lionAfterglow')?.remove();const video=ensurePremiumLionVideo();try{video.pause();video.currentTime=0}catch{}
  const wrap=document.createElement('div');wrap.className='premiumLionTakeover';const anchor=document.querySelector('.centerBottle')||document.querySelector('.table');let ax=innerWidth/2,ay=Math.max(250,innerHeight*.43);if(anchor){const r=anchor.getBoundingClientRect();ax=r.left+r.width/2;ay=r.top+r.height/2}wrap.style.setProperty('--lion-x',Math.round(ax)+'px');wrap.style.setProperty('--lion-y',Math.round(ay)+'px');
  const shards=Array.from({length:18},(_,i)=>`<i style="--a:${i*20}deg;--z:${18+(i%6)*18}px;--d:${(i%5)*.035}s;--s:${.62+(i%4)*.16}"></i>`).join('');
  wrap.innerHTML=`<div class="lionPrelude" aria-hidden="true"><div class="lionPreludeFloor"><i class="pRing r1"></i><i class="pRing r2"></i><i class="pRing r3"></i><i class="pRing r4"></i></div><div class="lionPreludeOrb"><i></i><b></b></div><div class="lionPreludeHalo h1"></div><div class="lionPreludeHalo h2"></div><div class="lionPreludeShards">${shards}</div><div class="lionPreludeFlash"></div></div><canvas class="premiumLionCanvas" aria-hidden="true"></canvas><div class="premiumLionGiftCard"><span class="premiumLionMini">🦁</span><div><b>Золотой лев</b><small>${esc(from)} → ${esc(to)}</small></div><strong>x1</strong></div>`;document.body.appendChild(wrap);
  const stopCanvas=startLionChromaCanvas(wrap.querySelector('.premiumLionCanvas'),video);let done=false,killTimer,vibeA,vibeB,startTimer,activeSound=null;
  const finish=()=>{if(done)return;done=true;clearTimeout(killTimer);clearTimeout(vibeA);clearTimeout(vibeB);clearTimeout(startTimer);try{video.pause();video.currentTime=0}catch{}stopCanvas();wrap.classList.add('leaving');setTimeout(()=>{wrap.remove();showLionAfterglow(ax,ay)},460)};
  killTimer=setTimeout(finish,11800);vibeA=setTimeout(()=>{try{navigator.vibrate?.([38,22,62])}catch{}},980);vibeB=setTimeout(()=>{try{navigator.vibrate?.([80,28,140,32,175])}catch{}},6050);
  activeSound=lionGiftSound();
  const playLion=()=>{if(done)return;wrap.classList.add('lionStarted');video.loop=false;video.volume=0;video.muted=true;video.currentTime=0;video.play()?.catch?.(()=>{})};
  const queueLion=()=>{startTimer=setTimeout(playLion,1250)};
  if(video.readyState>=1)queueLion();else video.addEventListener('loadedmetadata',queueLion,{once:true});video.addEventListener('ended',finish,{once:true});
}


const KYRGYZ_WARRIOR_ANIM_URL=safeMediaAsset(SPECIAL_MEDIA.kyrgyzWarriorAnim);
const KYRGYZ_WARRIOR_AUDIO_URL=safeMediaAsset(SPECIAL_MEDIA.kyrgyzWarriorAudio);
function ensureKyrgyzWarriorAudio(){
  let a=window.__kissMeetKyrgyzWarriorAudio;if(a)return a;
  a=document.createElement('audio');a.src=KYRGYZ_WARRIOR_AUDIO_URL;a.preload='auto';a.setAttribute('playsinline','');a.style.display='none';a.volume=1;document.body.appendChild(a);window.__kissMeetKyrgyzWarriorAudio=a;return a;
}
function primeKyrgyzWarrior(){try{const a=ensureKyrgyzWarriorAudio();if(!a.readyState)a.load()}catch{}}
function startKyrgyzWarriorSoundFromGesture(){if(!lionSoundEnabled())return null;primeKyrgyzWarrior();try{const a=ensureKyrgyzWarriorAudio();a.pause();a.currentTime=0;a.muted=false;a.volume=1;const p=a.play();p?.then?.(()=>{window.__kissMeetKyrgyzWarriorGestureStart=performance.now()}).catch(()=>{});return a}catch{return null}}
function kyrgyzWarriorSound(){if(!lionSoundEnabled())return null;try{const a=ensureKyrgyzWarriorAudio(),age=performance.now()-(window.__kissMeetKyrgyzWarriorGestureStart||0);if(!a.paused&&age<2200)return a;a.pause();a.currentTime=0;a.muted=false;a.volume=1;a.play()?.catch?.(()=>{});return a}catch{return null}}
function stopKyrgyzWarriorSound(a){try{a?.pause?.();if(a&&'currentTime' in a)a.currentTime=0}catch{}}
document.addEventListener('pointerdown',primeKyrgyzWarrior,{capture:true,passive:true});
function showKyrgyzAfterglow(x,y){
  document.querySelector('.kyrgyzAfterglow')?.remove();
  const fx=document.createElement('div');fx.className='kyrgyzAfterglow';fx.style.setProperty('--kg-x',Math.round(x)+'px');fx.style.setProperty('--kg-y',Math.round(y)+'px');
  const bits=Array.from({length:28},(_,i)=>'<i class="kgAfterSpark" style="--a:'+(i*12.86)+'deg;--d:'+((i%7)*.025)+'s;--r:'+(85+(i%8)*18)+'px"></i>').join('');
  fx.innerHTML='<div class="kgAfterRing r1"></div><div class="kgAfterRing r2"></div><div class="kgAfterRing r3"></div><div class="kgAfterSun">☀</div>'+bits;
  document.body.appendChild(fx);try{navigator.vibrate?.([45,22,70])}catch{};setTimeout(()=>fx.remove(),1900);
}
function showKyrgyzWarriorGift(from='Игрок',to='Игрок'){
  document.querySelector('.premiumKyrgyzTakeover')?.remove();document.querySelector('.kyrgyzAfterglow')?.remove();
  const wrap=document.createElement('div');wrap.className='premiumKyrgyzTakeover';
  const anchor=document.querySelector('.centerBottle')||document.querySelector('.table');let ax=innerWidth/2,ay=Math.max(250,innerHeight*.44);if(anchor){const r=anchor.getBoundingClientRect();ax=r.left+r.width/2;ay=r.top+r.height/2}
  wrap.style.setProperty('--kg-x',Math.round(ax)+'px');wrap.style.setProperty('--kg-y',Math.round(ay)+'px');
  const sparks=Array.from({length:24},(_,i)=>'<i style="--a:'+(i*15)+'deg;--d:'+((i%6)*.03)+'s;--r:'+(75+(i%7)*17)+'px"></i>').join('');
  wrap.innerHTML='<div class="kyrgyzPrelude" aria-hidden="true"><div class="kgFloor"><i></i><i></i><i></i></div><div class="kgAura"></div><div class="kgSunburst"></div><div class="kgSparks">'+sparks+'</div></div><img class="kyrgyzWarriorCanvas kyrgyzWarriorAnim" alt="" aria-hidden="true"><div class="kyrgyzGiftCard"><span>🇰🇬</span><div><b>Воин</b><small>'+esc(from)+' → '+esc(to)+'</small></div><strong>x1</strong></div>';
  document.body.appendChild(wrap);
  const img=wrap.querySelector('.kyrgyzWarriorAnim');let done=false,killTimer,startTimer,vibeA,vibeB,activeSound=kyrgyzWarriorSound();
  const finish=()=>{if(done)return;done=true;clearTimeout(killTimer);clearTimeout(startTimer);clearTimeout(vibeA);clearTimeout(vibeB);stopKyrgyzWarriorSound(activeSound);wrap.classList.add('leaving');setTimeout(()=>{wrap.remove();showKyrgyzAfterglow(ax,ay)},360)};
  killTimer=setTimeout(finish,9600);vibeA=setTimeout(()=>{try{navigator.vibrate?.([34,18,54])}catch{}},700);vibeB=setTimeout(()=>{try{navigator.vibrate?.([90,28,120])}catch{}},5100);
  startTimer=setTimeout(()=>{if(done)return;img.src=KYRGYZ_WARRIOR_ANIM_URL+'?play='+Date.now();wrap.classList.add('kgStarted')},760);
}

const AURAKG_VIDEO_URL=safeMediaAsset(SPECIAL_MEDIA.aurakgVideo);
const AURAKG_THUMB_URL=safeMediaAsset(SPECIAL_MEDIA.aurakgThumb);
function ensureAurakgAudio(){let a=window.__aurakgAudio;if(a)return a;a=document.createElement('audio');a.src=AURAKG_VIDEO_URL;a.preload='auto';a.style.display='none';a.setAttribute('playsinline','');document.body.appendChild(a);window.__aurakgAudio=a;return a}
function startAurakgSoundFromGesture(){if(!lionSoundEnabled())return null;try{const a=ensureAurakgAudio();a.pause();a.currentTime=0;a.muted=false;a.volume=1;a.play()?.catch?.(()=>{});return a}catch{return null}}
function showAurakgGift(from='Игрок',to='Игрок'){document.querySelector('.aurakgTakeover')?.remove();const w=document.createElement('div');w.className='aurakgTakeover';w.innerHTML='<div class="aurakgPrelude"><i></i><i></i><i></i><b>⚡</b></div><video class="aurakgVideo" src="'+AURAKG_VIDEO_URL+'" muted playsinline preload="auto"></video><div class="aurakgCard"><img src="'+AURAKG_THUMB_URL+'"><span><b>aurakg</b><small>'+esc(from)+' → '+esc(to)+'</small></span><strong>x1</strong></div>';document.body.appendChild(w);const v=w.querySelector('.aurakgVideo'),a=ensureAurakgAudio();try{if(lionSoundEnabled()){a.pause();a.currentTime=0;a.muted=false;a.volume=1;a.play()?.catch?.(()=>{})}}catch{};setTimeout(()=>{w.classList.add('started');v.play()?.catch?.(()=>{})},650);const finish=()=>{try{a.pause();a.currentTime=0}catch{};w.classList.add('leaving');setTimeout(()=>w.remove(),420)};v.addEventListener('ended',finish,{once:true});setTimeout(finish,10500);try{navigator.vibrate?.([40,25,70,25,110])}catch{}}


const BAURI_VIDEO_URL=safeMediaAsset(SPECIAL_MEDIA.bauriVideo),BAURI_AUDIO_URL=safeMediaAsset(SPECIAL_MEDIA.bauriAudio),BAURI_THUMB_URL=safeMediaAsset(SPECIAL_MEDIA.bauriThumb);
function ensureBauriVideo(){let v=window.__bauriVideo;if(v&&v.isConnected)return v;v=document.createElement('video');v.src=BAURI_VIDEO_URL;v.preload='auto';v.playsInline=true;v.setAttribute('playsinline','');v.crossOrigin='anonymous';v.muted=true;v.volume=0;v.className='bauriSourceVideo';document.body.appendChild(v);window.__bauriVideo=v;return v}
function ensureBauriAudio(){let a=window.__bauriAudio;if(a)return a;a=document.createElement('audio');a.src=BAURI_AUDIO_URL;a.preload='auto';a.setAttribute('playsinline','');a.style.display='none';document.body.appendChild(a);window.__bauriAudio=a;return a}
function primeBauri(){if(!lionSoundEnabled())return;try{const a=ensureBauriAudio();a.load();const ctx=ensureLionAudioContext();if(ctx?.state==='suspended')ctx.resume().catch(()=>{})}catch{}try{ensureBauriVideo().load()}catch{}}
document.addEventListener('pointerdown',primeBauri,{capture:true,passive:true});
function playBauriAudio(){
  if(!lionSoundEnabled())return null;
  try{
    const a=ensureBauriAudio();
    a.pause();
    a.currentTime=0;
    a.muted=false;
    a.volume=1;
    const playback=a.play();
    if(playback&&typeof playback.catch==='function')playback.catch(()=>{});
    return a;
  }catch(err){
    return null;
  }
}
function stopBauriAudio(a){
  try{
    if(a&&typeof a.pause==='function')a.pause();
    if(a)a.currentTime=0;
  }catch(err){}
}
function startBauriCarSound(side=1){
 if(!lionSoundEnabled())return null;const ctx=ensureLionAudioContext();if(!ctx||ctx.state!=='running')return null;try{
  const now=ctx.currentTime,master=ctx.createGain(),motor=ctx.createOscillator(),rumble=ctx.createOscillator(),motorGain=ctx.createGain(),rumbleGain=ctx.createGain(),filter=ctx.createBiquadFilter(),pan=ctx.createStereoPanner?ctx.createStereoPanner():null;
  master.gain.setValueAtTime(.0001,now);master.gain.exponentialRampToValueAtTime(.07,now+.18);master.gain.linearRampToValueAtTime(.12,now+2.9);master.gain.exponentialRampToValueAtTime(.0001,now+4.15);
  motor.type='sawtooth';motor.frequency.setValueAtTime(58,now);motor.frequency.exponentialRampToValueAtTime(104,now+3.2);motor.frequency.exponentialRampToValueAtTime(72,now+4.1);motorGain.gain.value=.42;
  rumble.type='triangle';rumble.frequency.setValueAtTime(31,now);rumble.frequency.linearRampToValueAtTime(49,now+3.4);rumbleGain.gain.value=.7;filter.type='lowpass';filter.frequency.setValueAtTime(620,now);filter.frequency.linearRampToValueAtTime(980,now+3.2);filter.Q.value=.7;
  const noiseBuf=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),data=noiseBuf.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.16;const road=ctx.createBufferSource(),roadGain=ctx.createGain(),roadFilter=ctx.createBiquadFilter();road.buffer=noiseBuf;road.loop=true;roadFilter.type='bandpass';roadFilter.frequency.value=420;roadFilter.Q.value=.55;roadGain.gain.setValueAtTime(.015,now);roadGain.gain.linearRampToValueAtTime(.06,now+2.8);roadGain.gain.exponentialRampToValueAtTime(.0001,now+4.05);
  motor.connect(motorGain);motorGain.connect(filter);rumble.connect(rumbleGain);rumbleGain.connect(filter);road.connect(roadFilter);roadFilter.connect(roadGain);roadGain.connect(filter);if(pan){pan.pan.setValueAtTime(side>0?.72:-.72,now);pan.pan.linearRampToValueAtTime(0,now+3.5);filter.connect(pan);pan.connect(master)}else filter.connect(master);master.connect(ctx.destination);
  motor.start(now);rumble.start(now);road.start(now);motor.stop(now+4.3);rumble.stop(now+4.3);road.stop(now+4.3);return{stop(){try{motor.stop()}catch{}try{rumble.stop()}catch{}try{road.stop()}catch{}try{master.disconnect()}catch{}}}
 }catch{return null}
}
function showBauriVipGift(from='Игрок',to='Игрок',targetId=null,targetEl=null,opts={}){
 document.querySelector('.bauriVipTakeover')?.remove();const target=targetEl||giftElForPlayer(targetId),p=giftPoint(target,giftFallbackTarget()),side=p.x<innerWidth/2?1:-1,sx=Math.max(130,Math.min(innerWidth-130,p.x+side*Math.min(innerWidth*.23,190))),minStageY=Math.max(330,innerHeight*.43),maxStageY=Math.max(minStageY,innerHeight*.68),sy=Math.max(minStageY,Math.min(maxStageY,p.y+118));
 const w=document.createElement('div');w.className='bauriVipTakeover';w.style.setProperty('--bx',Math.round(p.x)+'px');w.style.setProperty('--by',Math.round(p.y)+'px');w.style.setProperty('--sx',Math.round(sx)+'px');w.style.setProperty('--sy',Math.round(sy)+'px');w.style.setProperty('--enter',(side*46)+'px');const sparks=Array.from({length:16},(_,n)=>`<i style="--a:${n*22.5}deg;--d:${(n%5)*.04}s"></i>`).join('');w.innerHTML=`<div class="bauriPrelude"><div class="bauriRing r1"></div><div class="bauriRing r2"></div><div class="bauriRoad"></div><div class="bauriSparks">${sparks}</div><div class="bauriFlash"></div></div><canvas class="bauriCanvas"></canvas><div class="bauriCard"><img src="${BAURI_THUMB_URL}"><span><b>Баури VIP</b><small>${esc(from)} → ${esc(to)}</small></span><strong>VIP</strong></div>`;document.body.appendChild(w);
 const v=ensureBauriVideo();try{v.pause();v.currentTime=0}catch{}const stopCanvas=startLionChromaCanvas(w.querySelector('.bauriCanvas'),v);let done=false,a=playBauriAudio(),car=null,t1=setTimeout(()=>{if(done)return;w.classList.add('started');car=startBauriCarSound(side);try{v.currentTime=0;v.play()?.catch?.(()=>{})}catch{}},1200),t2=setTimeout(finish,17600);function finish(){if(done)return;done=true;clearTimeout(t1);clearTimeout(t2);try{v.pause();v.currentTime=0}catch{}try{car?.stop?.()}catch{}stopBauriAudio(a);stopCanvas();w.classList.add('leaving');setTimeout(()=>w.remove(),500)}v.addEventListener('ended',finish,{once:true});try{navigator.vibrate?.([30,25,55,20,80])}catch{}
}

function showEpicGift(gift,from,to){
  if(gift?.id==='lion'){return}
  const o=$('#giftEpicOverlay');if(!o)return;$('#giftEpicEmoji').textContent=gift.emoji||'🎁';$('#giftEpicTitle').textContent=gift.name||'Подарок';$('#giftEpicRoute').textContent=`${from} → ${to}`;o.dataset.gift=gift.id||'epic';o.classList.remove('hidden');o.setAttribute('aria-hidden','false');giftSoundPlay(true);clearTimeout(o._hide);o._hide=setTimeout(()=>{o.classList.add('hidden');o.setAttribute('aria-hidden','true')},3000)
}
function giftBurst(gift,point){
  const wrap=document.createElement('div');wrap.className=`giftBurst effect-${gift.effect||'pop'}`;wrap.style.left=point.x+'px';wrap.style.top=point.y+'px';
  const count=gift.epic?18:10;
  for(let i=0;i<count;i++){const p=document.createElement('i');p.textContent=i%3===0?(gift.emoji||'✨'):(gift.effect==='stink'?'💨':gift.effect==='money'?'💸':gift.effect==='fire'?'🔥':'✨');const a=i/count*Math.PI*2,r=58+Math.random()*92;p.style.setProperty('--dx',(Math.cos(a)*r)+'px');p.style.setProperty('--dy',(Math.sin(a)*r)+'px');p.style.setProperty('--d',(Math.random()*.18)+'s');wrap.appendChild(p)}
  document.body.appendChild(wrap);setTimeout(()=>wrap.remove(),1900);
}
function giftImpact(gift,targetEl){if(!targetEl)return;const cls=`impact-${gift.effect||'pop'}`;targetEl.classList.add(cls);setTimeout(()=>targetEl.classList.remove(cls),900)}
const giftVideoQueue=[];
let giftVideoPlaying=false;
function showGolodnyakLight(playerIdValue){
  const photo=giftElForPlayer(String(playerIdValue||''));if(!photo)return;
  photo.querySelector('.golodnyakLight')?.remove();
  const fx=document.createElement('span');fx.className='golodnyakLight';fx.innerHTML='<i></i><b>✨</b><em>✦</em>';
  photo.appendChild(fx);setTimeout(()=>fx.remove(),3600);
}
function showBananaCar(playerIdValue){
  const photo=giftElForPlayer(String(playerIdValue||''));if(!photo)return;
  const r=photo.getBoundingClientRect(),fx=document.createElement('div');fx.className='bananaCarFx';
  fx.style.setProperty('--tx',(r.left+r.width/2)+'px');fx.style.setProperty('--ty',(r.top+r.height/2)+'px');
  fx.innerHTML='<div class="bananaCar">🚙</div><div class="bananaDrop"><i>🍌</i><i>🍌</i><i>🍌</i><i>🍌</i><i>🍌</i><i>🍌</i></div>';
  document.body.appendChild(fx);photo.classList.add('bananaTargetGlow');
  setTimeout(()=>photo.classList.remove('bananaTargetGlow'),3200);setTimeout(()=>fx.remove(),3600);
}
function showBombBurst(playerIdValue){
  const photo=giftElForPlayer(String(playerIdValue||''));if(!photo)return;
  const r=photo.getBoundingClientRect(),fx=document.createElement('div');fx.className='bombBurstFx';
  fx.style.setProperty('--tx',(r.left+r.width/2)+'px');fx.style.setProperty('--ty',(r.top+r.height/2)+'px');
  fx.innerHTML='<div class="bomb3d">💣</div><div class="bombFlash"></div><div class="bombSmoke">💨</div><div class="bombSparks"><i>✦</i><i>✦</i><i>✦</i><i>✦</i><i>✦</i><i>✦</i><i>✦</i><i>✦</i></div>';
  document.body.appendChild(fx);photo.classList.add('bombTargetShake');
  setTimeout(()=>photo.classList.remove('bombTargetShake'),1500);setTimeout(()=>fx.remove(),3200);
}
function showDonkeyCarPoop(playerIdValue){
  const photo=giftElForPlayer(String(playerIdValue||''));if(!photo)return;
  const r=photo.getBoundingClientRect(),fx=document.createElement('div');fx.className='donkeyCarPoopFx';
  fx.style.setProperty('--tx',(r.left+r.width/2)+'px');fx.style.setProperty('--ty',(r.top+r.height/2)+'px');
  fx.innerHTML='<div class="donkeyCarVehicle">🚗</div><div class="donkeyPassenger">🫏</div><div class="donkeyPoop">💩</div>';
  document.body.appendChild(fx);
  setTimeout(()=>{let mark=photo.querySelector('.donkeyPoopMark');if(!mark){mark=document.createElement('span');mark.className='donkeyPoopMark';mark.textContent='💩';photo.appendChild(mark)}},1900);
  setTimeout(()=>photo.querySelector('.donkeyPoopMark')?.remove(),7200);
  setTimeout(()=>fx.remove(),4200);
}
function showSnowSparkles(){
  const layer=document.createElement('div');layer.className='giftSnowSparkles';
  for(let i=0;i<72;i++){const x=document.createElement('i');x.style.setProperty('--x',Math.random()*100+'vw');x.style.setProperty('--d',(Math.random()*1.8)+'s');x.style.setProperty('--s',(3+Math.random()*7)+'px');x.style.setProperty('--dr',(-35+Math.random()*70)+'px');layer.appendChild(x)}
  document.body.appendChild(layer);setTimeout(()=>layer.remove(),5200);
}

const BATCH_POST_FX={
  pistol:{icons:['🔫','💥','✨'],label:'BANG!'},love:{icons:['💕','💖','✨'],label:'LOVE'},chaba_love:{icons:['🧑🏿','💕','✨'],label:'CHABA LOVE'},knockback:{icons:['💥','⚡','💨'],label:'BOOM'},suspicion:{icons:['🧐','❓','👀'],label:'ХМ…'},lollipop:{icons:['🍭','✨','😋'],label:'SWEET'},sulky:{icons:['😤','☁️','💢'],label:'ОБИДКА'},fireworks:{icons:['🎆','🎇','✨'],label:'WOW'},lucky:{icons:['🍀','✨','⭐'],label:'LUCKY'},queen:{icons:['👑','✨','💎'],label:'QUEEN'},flowers_red:{icons:['🌹','🌺','💕'],label:'FLOWERS'},heart_fireworks:{icons:['❤️','💥','💕'],label:'LOVE'},proposal:{icons:['💍','👑','💕'],label:'MARRY ME?'},cat_hero_love:{icons:['🐱','🥾','❤️'],label:'LOVE HERO'},chinese_love:{icons:['愛','❤️','✨'],label:'愛'},donkey_love:{icons:['🫏','❤️','✨'],label:'LOVE'},cheeky_love:{icons:['😈','❤️','✨'],label:'HEY!'},time:{icons:['⏰','⌛','❤️'],label:'TIME'},wink:{icons:['😉','✨','💕'],label:'WINK'},slingshot:{icons:['🪃','💥','😂'],label:'HIT!'},sakura_love:{icons:['🌸','愛','❤️'],label:'愛'},big_heart:{icons:['💟','💖','✨'],label:'LOVE'},jungle:{icons:['🌿','🦜','🐒'],label:'JUNGLE'},business:{icons:['💼','👠','✨'],label:'BOSS'},chicks:{icons:['🐥','🐣','✨'],label:'CHICKS'},titanic:{icons:['🌊','🚢','💦'],label:'OCEAN'},flowers_white:{icons:['🤍','🌼','✨'],label:'FLOWERS'},chickens:{icons:['🐔','🐓','💨'],label:'CHICKEN'},fruits:{icons:['🍌','🍎','🍇'],label:'FRUIT'},monkey_glasses:{icons:['🐒','😎','✨'],label:'PARTY'},flies:{icons:['🪰','🪰','💨'],label:'BUZZ'},panda_fighter:{icons:['🐼','🥋','💥'],label:'KUNG FU'},rapper:{icons:['🎤','⛓️','🔥'],label:'RAP'},holiday23:{icons:['⭐','🎉','🎆'],label:'23 ФЕВРАЛЯ'},doctor:{icons:['🩺','💊','✨'],label:'DOCTOR'},macho:{icons:['😎','🔥','✨'],label:'MACHO'},athlete:{icons:['🏋️','⚡','🏆'],label:'SPORT'},komuz:{icons:['🎶','✨','🇰🇬'],label:'КОМУЗ'},manas:{icons:['⚔️','✨','🇰🇬'],label:'МАНАС'},wisdom:{icons:['✨','🌙','💫'],label:'НАСААТ'},color_burst:{icons:['🌈','✨','💫'],label:'COLOR'}
};
function showBatchPostEffect(gift,targetId,targetEl){
  const cfg=BATCH_POST_FX[gift?.postEffect];if(!cfg)return;
  const el=targetEl||giftElForPlayer(targetId);if(!el)return;
  const photo=el.querySelector('.photo')||el;
  const fx=document.createElement('div');fx.className='batchPostFx batch-'+gift.postEffect;
  fx.innerHTML=`<span class="batchFxHalo"></span><b class="batchFxLabel">${esc(gift.postLabel||cfg.label||'')}</b>${Array.from({length:12},(_,i)=>`<i style="--i:${i};--a:${(i*30)%360}deg;--d:${(i%5)*.08}s">${cfg.icons[i%cfg.icons.length]}</i>`).join('')}`;
  photo.appendChild(fx);
  if(['knockback','pistol','slingshot','panda_fighter'].includes(gift.postEffect)){
    el.classList.remove('batchImpact');void el.offsetWidth;el.classList.add('batchImpact');setTimeout(()=>el.classList.remove('batchImpact'),1050);
  }
  if(gift.postEffect==='knockback'){el.classList.remove('batchKnockback');void el.offsetWidth;el.classList.add('batchKnockback');setTimeout(()=>el.classList.remove('batchKnockback'),1150);}
  setTimeout(()=>fx.classList.add('out'),3300);setTimeout(()=>fx.remove(),4100);
}

function nextGiftVideo(){
  giftVideoPlaying=false;
  const next=giftVideoQueue.shift();if(next)showSeniSuyomGift(...next);
}
function showSeniSuyomGift(gift,from,to,targetId,targetEl){
  const chat=$('#chatArea');if(!chat||!gift?.videoUrl)return;
  if(giftVideoPlaying){giftVideoQueue.push([gift,from,to,targetId,targetEl]);return}
  giftVideoPlaying=true;
  chat.classList.add('giftVideoActive');
  const stage=document.createElement('div');stage.className='giftVideoStage';stage.dataset.gift=gift.id||'video';
  if(gift.id==='kok_boru_20260923')stage.classList.add('kokBoruOverlay');
  stage.innerHTML=`<div class="giftVideoTopControls"><button class="giftVideoHide" type="button" aria-label="Скрыть видео">Скрыть</button><button class="giftVideoSound" type="button" aria-label="Выключить звук">🔊</button></div><div class="giftVideoGlow"></div><div class="giftVideoHearts"><i>♥</i><i>♥</i><i>♥</i><i>♥</i><i>♥</i><i>♥</i></div><div class="giftVideoCard"><div class="giftVideoBadge"><img src="${esc(gift.thumb||'')}" alt=""><span><b>${esc(gift.name||'Сени сүйөм')}</b><small>${esc(from||'Игрок')} → ${esc(to||'Игрок')}</small></span></div><video class="giftLoveVideo" src="${esc(gift.videoUrl)}" autoplay playsinline crossorigin="anonymous"></video><div class="giftVideoShine"></div></div>`;
  chat.appendChild(stage);
  const restore=document.createElement('div');restore.className='giftVideoRestore';restore.innerHTML=`<button class="giftVideoShow" type="button">Показать</button><button class="giftVideoSound giftVideoSoundMini" type="button" aria-label="Выключить звук">🔊</button>`;chat.appendChild(restore);
  const v=stage.querySelector('video');
  if(gift.id==='kok_boru_20260923'&&v){
    const canvas=document.createElement('canvas');canvas.className='kokBoruCanvas';stage.querySelector('.giftVideoCard')?.appendChild(canvas);v.classList.add('kokBoruSource');
    const ctx=canvas.getContext('2d',{willReadFrequently:true});let raf=0,stopped=false;
    const fit=()=>{const d=Math.min(devicePixelRatio||1,1.35),r=stage.getBoundingClientRect();canvas.width=Math.max(2,Math.floor(r.width*d));canvas.height=Math.max(2,Math.floor(r.height*d));canvas.style.width=r.width+'px';canvas.style.height=r.height+'px'};fit();
    const draw=()=>{if(stopped)return;raf=requestAnimationFrame(draw);if(v.readyState<2)return;const W=canvas.width,H=canvas.height,vw=v.videoWidth||1080,vh=v.videoHeight||1920;ctx.clearRect(0,0,W,H);const sc=Math.max(W/vw,H/vh)*1.04,dw=vw*sc,dh=vh*sc,dx=(W-dw)/2,dy=(H-dh)/2;ctx.drawImage(v,dx,dy,dw,dh);let im;try{im=ctx.getImageData(0,0,W,H)}catch(e){console.warn('kok-boru chroma key blocked',e);return}const d=im.data;for(let i=0;i<d.length;i+=4){const r=d[i],g=d[i+1],b=d[i+2];/* The source was pre-cleaned to pure green. Remove that green completely so the game, players and chat stay visible behind the gift. */const dominance=g-Math.max(r,b);if(g>105&&dominance>32){const strength=Math.min(1,Math.max(0,(dominance-32)/72))*Math.min(1,Math.max(0,(g-105)/85));d[i+3]=Math.round(d[i+3]*(1-strength));if(d[i+3]<18)d[i+3]=0;}}ctx.putImageData(im,0,0);};
    v.addEventListener('play',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(draw)},{once:true});v.addEventListener('ended',()=>{stopped=true;cancelAnimationFrame(raf)},{once:true});
  }
  const soundButtons=[...stage.querySelectorAll('.giftVideoSound'),...restore.querySelectorAll('.giftVideoSound')];
  const syncSound=()=>{soundButtons.forEach(btn=>{btn.textContent=v?.muted?'🔇':'🔊';btn.setAttribute('aria-label',v?.muted?'Включить звук':'Выключить звук')})};
  const toggleSound=()=>{if(!v)return;v.muted=!v.muted;syncSound()};
  let finished=false;
  const end=(completed=false)=>{if(finished)return;finished=true;stage.classList.add('leaving');restore.classList.remove('active');setTimeout(()=>{
    stage.remove();restore.remove();chat.classList.remove('giftVideoActive');
    if(completed&&gift.id==='golodnyak')showGolodnyakLight(targetId);
    if(completed&&gift.id==='oshtun_trassasy')showGolodnyakLight(targetId);
    if(completed&&gift.id==='meni_karabachy')showGolodnyakLight(targetId);
    if(completed&&gift.id==='ekrandan_alyzyraak_oturchu')showGolodnyakLight(targetId);
    if(completed&&gift.id==='jalyaptarga_bargan_dosun')showGolodnyakLight(targetId);
    if(completed&&gift.id==='nastroeniya_jok_kezde')showGolodnyakLight(targetId);
    if(completed&&gift.id==='soguunu_toktotkula')showGolodnyakLight(targetId);
    if(completed&&gift.id==='chykylа_kanshylabai'){showGolodnyakLight(targetId);showSnowSparkles();}
    if(completed&&gift.id==='zhalyaptarga_bargan_dosun')showGolodnyakLight(targetId);
    if(completed&&gift.id==='senin_kotu_kuygon_dosun')showGolodnyakLight(targetId);
    if(completed&&gift.id==='bratishkan_turaby')showGolodnyakLight(targetId);
    if(completed&&gift.id==='tishi_jok_dosun')showGolodnyakLight(targetId);
    if(completed&&gift.id==='iterisheli_emi')showGolodnyakLight(targetId);
    if(completed&&gift.id==='odin_polka_pozhaluysta')showGolodnyakLight(targetId);
    if(completed&&gift.id==='kysteke_dosuna')showGolodnyakLight(targetId);
    if(completed&&gift.id==='sen_kanchanchy_jylkysyn')showGolodnyakLight(targetId);
    if(completed&&gift.id==='shlyapa_yrgytchy')showGolodnyakLight(targetId);
    if(completed&&gift.id==='nastroeniya_jok_kezde')showGolodnyakLight(targetId);
    if(completed&&gift.id==='soguunu_toktotkula')showGolodnyakLight(targetId);
    if(completed&&gift.id==='pokazhite_pozhaluysta')showGolodnyakLight(targetId);
    if(completed&&gift.id==='maimyl_dosken')showBananaCar(targetId);
    if(completed&&gift.id==='kandaisyn_doske_joop')showDonkeyCarPoop(targetId);
    if(completed&&gift.id==='meni_jebechi')showGolodnyakLight(targetId);
    if(completed&&(gift.id?.startsWith('batch_')||gift.id?.startsWith('new_')))showBatchPostEffect(gift,targetId,targetEl);
    nextGiftVideo();
  },480)};
  soundButtons.forEach(btn=>btn.addEventListener('click',toggleSound));
  stage.querySelector('.giftVideoHide')?.addEventListener('click',()=>{stage.classList.add('giftVideoLocallyHidden');restore.classList.add('active');chat.classList.remove('giftVideoActive')});
  restore.querySelector('.giftVideoShow')?.addEventListener('click',()=>{stage.classList.remove('giftVideoLocallyHidden');restore.classList.remove('active');chat.classList.add('giftVideoActive')});
  if(v){
    v.currentTime=0;v.muted=false;syncSound();
    v.play().catch(()=>{if(finished)return;v.muted=true;syncSound();v.play().catch(()=>{
      if(finished)return;const retry=document.createElement('button');retry.className='giftVideoShow giftVideoRetry';retry.textContent='Воспроизвести';
      retry.onclick=()=>v.play().then(()=>retry.remove()).catch(()=>{});stage.appendChild(retry);
    })});
    v.addEventListener('ended',()=>{if(v.ended)end(true)},{once:true});
    v.addEventListener('error',()=>setTimeout(end,1200),{once:true});
  }
}
function showRoseVipGift(gift,from,to,targetId,targetEl){
  const target=targetEl||giftElForPlayer(targetId);
  const stage=document.createElement('div');stage.className='roseVipOverlay';
  stage.innerHTML=`<div class="roseVipFlash"></div><div class="roseVipRays"></div><div class="roseVipAura"></div><div class="roseVipPetals">${Array.from({length:34},(_,i)=>`<i style="--a:${i*10.59}deg;--d:${(i%10)*.06}s;--r:${95+(i%7)*22}px">${i%4===0?'♥':'✦'}</i>`).join('')}</div><div class="roseVipSparkles">${Array.from({length:28},(_,i)=>`<i style="--x:${5+(i*37)%90}%;--y:${8+(i*53)%78}%;--d:${(i%9)*.08}s">✦</i>`).join('')}</div><canvas class="roseVipCanvas"></canvas><video class="roseVipSource" src="${esc(gift.videoUrl)}" muted playsinline preload="auto" crossorigin="anonymous"></video><div class="roseVipLabel"><b>VIP · ${esc(gift.name||'Роза')}</b><small>${esc(from||'Игрок')} → ${esc(to||'Игрок')}</small></div>`;
  document.body.appendChild(stage);giftImpact({effect:'romance'},target);
  const v=stage.querySelector('.roseVipSource'),c=stage.querySelector('.roseVipCanvas'),ctx=c.getContext('2d',{willReadFrequently:true});let done=false,raf=0;
  const fit=()=>{const d=Math.min(devicePixelRatio||1,1.35);c.width=Math.max(2,Math.floor(innerWidth*d));c.height=Math.max(2,Math.floor(innerHeight*d));c.style.width=innerWidth+'px';c.style.height=innerHeight+'px'};fit();
  const frame=()=>{if(done)return;raf=requestAnimationFrame(frame);if(v.readyState<2)return;const W=c.width,H=c.height,vw=v.videoWidth||1080,vh=v.videoHeight||1920;ctx.clearRect(0,0,W,H);const sc=Math.min(W/vw,H/vh)*.92,dw=vw*sc,dh=vh*sc,dx=(W-dw)/2,dy=(H-dh)/2-H*.045;ctx.drawImage(v,dx,dy,dw,dh);let im;try{im=ctx.getImageData(Math.max(0,dx|0),Math.max(0,dy|0),Math.min(W,Math.ceil(dw)),Math.min(H,Math.ceil(dh)))}catch(e){return}const d=im.data;for(let i=0;i<d.length;i+=4){const r=d[i],g=d[i+1],bl=d[i+2],mx=Math.max(r,bl),dominance=g-mx;/* remove only clearly green pixels; protect red rose/gold heart */if(g>45&&dominance>5&&g>r*1.035&&g>bl*1.025){const chroma=Math.max(0,Math.min(1,(dominance-5)/24));const sat=(Math.max(r,g,bl)-Math.min(r,g,bl))/Math.max(1,Math.max(r,g,bl));const greenish=Math.max(chroma,Math.min(1,(g-r*1.02)/34),Math.min(1,(g-bl*1.01)/30));const strength=Math.max(0,Math.min(1,greenish*(.72+sat*.55)));d[i+3]=Math.round(255*(1-strength));if(d[i+3]<230){const spill=Math.max(0,g-mx);d[i+1]=Math.max(mx,Math.round(g-spill*.96))}}else{const hi=Math.max(r,g,bl),lo=Math.min(r,g,bl),spread=hi-lo,lum=(r+g+bl)/3;/* New Flow export has a baked white/gray checkerboard, not real alpha. Key neutral checker tiles while keeping red petals and saturated gold sparkles. */if(lum>158&&spread<24){const neutral=Math.min(1,(lum-158)/48)*Math.min(1,(24-spread)/13);d[i+3]=Math.round(255*(1-neutral))}}}ctx.putImageData(im,Math.max(0,dx|0),Math.max(0,dy|0))};
  const finish=()=>{if(done)return;done=true;cancelAnimationFrame(raf);stage.classList.add('leaving');setTimeout(()=>stage.remove(),650)};
  v.currentTime=0;v.play().then(frame).catch(()=>{stage.classList.add('roseFallback')});v.addEventListener('ended',finish,{once:true});v.addEventListener('error',()=>setTimeout(finish,1800),{once:true});setTimeout(finish,10500);
}
function showTeddyVipGift(gift,from,to,targetId,targetEl){
  const target=targetEl||giftElForPlayer(targetId);
  const stage=document.createElement('div');stage.className='teddyVipOverlay';
  stage.innerHTML=`<div class="teddyVipGlow"></div><div class="teddyVipHearts">${Array.from({length:26},(_,i)=>`<i style="--x:${8+(i*31)%84}%;--y:${8+(i*47)%78}%;--d:${(i%9)*.08}s">${i%3===0?'♥':'✦'}</i>`).join('')}</div><canvas class="teddyVipCanvas"></canvas><video class="teddyVipSource" src="${esc(gift.videoUrl)}" muted playsinline preload="auto" crossorigin="anonymous"></video><div class="teddyVipLabel"><b>VIP · teddy</b><small>${esc(from||'Игрок')} → ${esc(to||'Игрок')}</small></div>`;
  document.body.appendChild(stage);giftImpact({effect:'romance'},target);
  const v=stage.querySelector('.teddyVipSource'),c=stage.querySelector('.teddyVipCanvas'),ctx=c.getContext('2d',{willReadFrequently:true});let done=false,raf=0;
  const teddyAudioUrl=String(gift.audioUrl||'');const teddyAudio=teddyAudioUrl?new Audio(teddyAudioUrl):null;
  if(teddyAudio){teddyAudio.preload='auto';teddyAudio.volume=1;teddyAudio.loop=false;window.__delbirimTeddyVipAudio?.pause?.();window.__delbirimTeddyVipAudio=teddyAudio}
  const fit=()=>{const d=Math.min(devicePixelRatio||1,1.35);c.width=Math.max(2,Math.floor(innerWidth*d));c.height=Math.max(2,Math.floor(innerHeight*d));c.style.width=innerWidth+'px';c.style.height=innerHeight+'px'};fit();
  const frame=()=>{if(done)return;raf=requestAnimationFrame(frame);if(v.readyState<2)return;const W=c.width,H=c.height,vw=v.videoWidth||1080,vh=v.videoHeight||1920;ctx.clearRect(0,0,W,H);const sc=Math.min(W/vw,H/vh)*.98,dw=vw*sc,dh=vh*sc,dx=(W-dw)/2,dy=(H-dh)/2-H*.035;ctx.drawImage(v,dx,dy,dw,dh);let im;try{im=ctx.getImageData(Math.max(0,dx|0),Math.max(0,dy|0),Math.min(W,Math.ceil(dw)),Math.min(H,Math.ceil(dh)))}catch(e){return}const d=im.data;for(let i=0;i<d.length;i+=4){const r=d[i],g=d[i+1],b=d[i+2];const mx=Math.max(r,g,b),mn=Math.min(r,g,b),spread=mx-mn,avg=(r+g+b)/3;/* remove baked checkerboard / neutral background, preserve brown bear, pink hearts, gold */const nearNeutral=spread<18;const lightNeutral=nearNeutral&&avg>118;const midNeutral=nearNeutral&&avg>72&&avg<180;let strength=0;if(lightNeutral)strength=Math.min(1,(avg-105)/55+.35);else if(midNeutral)strength=.45;/* also soften pale checker squares */if(Math.abs(r-g)<12&&Math.abs(g-b)<12&&avg>58)strength=Math.max(strength,Math.min(1,(avg-55)/80));if(strength>0){d[i+3]=Math.round(255*(1-strength));}}ctx.putImageData(im,Math.max(0,dx|0),Math.max(0,dy|0))};
  const stopTeddyAudio=()=>{if(!teddyAudio)return;try{teddyAudio.pause();teddyAudio.currentTime=0}catch{}if(window.__delbirimTeddyVipAudio===teddyAudio)window.__delbirimTeddyVipAudio=null};
  const finish=()=>{if(done)return;done=true;cancelAnimationFrame(raf);stopTeddyAudio();stage.classList.add('leaving');setTimeout(()=>stage.remove(),650)};
  const startTeddyAudio=()=>{if(!teddyAudio||!gameSoundEnabled())return;try{teddyAudio.currentTime=0;const p=teddyAudio.play();if(p?.catch)p.catch(()=>{})}catch{}};
  v.currentTime=0;v.play().then(()=>{frame();startTeddyAudio()}).catch(()=>{startTeddyAudio()});v.addEventListener('ended',finish,{once:true});v.addEventListener('error',()=>setTimeout(finish,1800),{once:true});setTimeout(finish,10500);
}

function playGiftEvent(event){
  const gift=giftCatalog().find(g=>g.id===event.gift)||{id:event.gift,name:event.gift,emoji:event.emoji||GIFT_EMOJI[event.gift]||'🎁',cost:event.cost||0,epic:Boolean(event.epic),effect:'pop'};
  // One attached gift at a time. A new regular/VIP gift removes both the old
  // upper headwear and the old lower/right gift (and any Emotion overlay).
  clearAttachedGiftForPlayer(event.to,giftElForPlayer(event.to));
  if(gift.id==='lion'){showPremiumLionGift(event.fromName||nameOf(event.from),event.toName||nameOf(event.to));return;}
  if(gift.id==='kyrgyz_warrior'){showKyrgyzWarriorGift(event.fromName||nameOf(event.from),event.toName||nameOf(event.to));return;}
  if(gift.id==='aurakg'){showAurakgGift(event.fromName||nameOf(event.from),event.toName||nameOf(event.to));return;}
  if(gift.id==='bauri_vip'){if(String(event.from)===String(playerId)&&Date.now()-(window.__bauriLocalSentAt||0)<20000)return;showBauriVipGift(event.fromName||nameOf(event.from),event.toName||nameOf(event.to),event.to,giftElForPlayer(event.to));return;}
  if(gift.id==='rose_love_20260923'){showRoseVipGift(gift,event.fromName||nameOf(event.from),event.toName||nameOf(event.to),event.to,giftElForPlayer(event.to));return;}
  if(gift.id==='teddy_vip_20260923'){showTeddyVipGift(gift,event.fromName||nameOf(event.from),event.toName||nameOf(event.to),event.to,giftElForPlayer(event.to));return;}
  const sourceEl=giftElForPlayer(event.from),targetEl=giftElForPlayer(event.to);
  const a=giftPoint(sourceEl,giftFallbackSource()),b=giftPoint(targetEl,giftFallbackTarget()),dx=b.x-a.x,dy=b.y-a.y;
  const flight=document.createElement('div');flight.className=`giftflight effect-${gift.effect||'pop'} ${gift.epic?'epic':''}`;flight.textContent=gift.emoji||'🎁';flight.style.left=a.x+'px';flight.style.top=a.y+'px';document.body.appendChild(flight);giftSoundPlay(false);
  const finish=()=>{flight.remove();giftBurst(gift,b);giftImpact(gift,targetEl);if(targetEl){if(gift.effect==='hat'){let hat=targetEl.querySelector('.wearableGift');if(!hat){hat=document.createElement('i');hat.className='wearableGift';targetEl.appendChild(hat)}hat.textContent=gift.emoji||'🎩';const side=((String(event.to||'').charCodeAt(0)||0)%2)?'right':'left';hat.dataset.side=side;hat.classList.remove('wearableDrop');void hat.offsetWidth;hat.classList.add('wearableDrop')}else{let corner=targetEl.querySelector('.giftCorner');if(!corner){corner=document.createElement('i');corner.className='giftCorner';targetEl.appendChild(corner)}corner.textContent=gift.emoji||'🎁'}targetEl.classList.remove('gift-hit');void targetEl.offsetWidth;targetEl.classList.add('gift-hit');setTimeout(()=>targetEl.classList.remove('gift-hit'),900)}if(gift.videoUrl)showSeniSuyomGift(gift,event.fromName||nameOf(event.from),event.toName||nameOf(event.to),event.to,targetEl);else if(gift.epic)showEpicGift(gift,event.fromName||nameOf(event.from),event.toName||nameOf(event.to))};
  if(flight.animate){const effect=gift.effect||'pop';let frames=[{transform:'translate3d(0,0,0) translate(-50%,-50%) scale(.45) rotate(-14deg)',opacity:.2},{transform:`translate3d(${dx*.52}px,${dy*.52-95}px,0) translate(-50%,-50%) scale(${gift.epic?1.8:1.22}) rotate(10deg)`,opacity:1},{transform:`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%) scale(.8) rotate(0)`,opacity:1}];if(['smack','splat'].includes(effect))frames=[{transform:'translate3d(0,0,0) translate(-50%,-50%) scale(.5) rotate(-45deg)',opacity:.2},{transform:`translate3d(${dx*.7}px,${dy*.55-40}px,0) translate(-50%,-50%) scale(1.65) rotate(35deg)`,opacity:1},{transform:`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%) scale(.95) rotate(${effect==='smack'?'110deg':'0deg'})`,opacity:1}];if(effect==='spin')frames=[{transform:'translate3d(0,0,0) translate(-50%,-50%) scale(.45) rotate(0)',opacity:.2},{transform:`translate3d(${dx*.55}px,${dy*.45-80}px,0) translate(-50%,-50%) scale(1.35) rotate(540deg)`,opacity:1},{transform:`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%) scale(.82) rotate(900deg)`,opacity:1}];if(['luxury','cosmic','speed'].includes(effect))frames=[{transform:'translate3d(0,40px,0) translate(-50%,-50%) scale(.3)',opacity:0},{transform:`translate3d(${dx*.55}px,${dy*.45-120}px,0) translate(-50%,-50%) scale(1.65)`,opacity:1,filter:'drop-shadow(0 0 30px #ffd75a)'},{transform:`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%) scale(1)`,opacity:1,filter:'drop-shadow(0 0 12px #fff)'}];const anim=flight.animate(frames,{duration:gift.epic?1450:980,easing:'cubic-bezier(.16,.8,.22,1)',fill:'forwards'});anim.onfinish=finish}else setTimeout(finish,1000)
}
function processGiftEvents(v,first=false){const gifts=(v?.feed||[]).filter(e=>e.kind==='gift');const latest=gifts.reduce((m,e)=>Math.max(m,Number(e.id)||0),0);if(first||giftEventCursor==null){giftEventCursor=latest;return}const fresh=gifts.filter(e=>(Number(e.id)||0)>giftEventCursor&&!isBlockedId(e.from)).sort((a,b)=>a.id-b.id);giftEventCursor=Math.max(giftEventCursor,latest);fresh.forEach((e,i)=>setTimeout(()=>{const gift=giftCatalog().find(g=>g.id===e.gift);addGiftRoomActivity(e,gift);playGiftEvent(e)},i*260))}
function startSelectedGiftGestureFx(gift){const id=gift?.id||selectedGiftId;if(id==='lion')startLionGiftSoundFromGesture();else if(id==='kyrgyz_warrior')startKyrgyzWarriorSoundFromGesture();else if(id==='aurakg')startAurakgSoundFromGesture();else if(id==='bauri_vip'){const g=gift||giftCatalog().find(x=>x.id==='bauri_vip'),tid=isDemoMode()?(selectedPlayer?.id||`demo-${selectedSlot}`):selectedTarget,te=giftElForPlayer(tid)||document.querySelector(`.person[data-slot="${selectedSlot}"] .photo`);if(g&&tid&&currentGiftBalance()>=giftHeartCost(g)){window.__bauriLocalSentAt=Date.now();showBauriVipGift(document.querySelector('.person.self .name')?.textContent||'Player 1',selectedPlayer?.name||'Игрок',tid,te,{fromGesture:true})}}}
function sendSelectedGift(approved=false){if(selectedSlot==null||!selectedGiftId)return;const gift=giftCatalog().find(g=>g.id===selectedGiftId);if(!gift)return;if(selectedPlayer?.self||selectedPlayer?.id===playerId){toast(tr('self'));return}const cost=giftHeartCost(gift),targetName=selectedPlayer?.name||'Игрок';if(!approved&&cost>0){const bal=currentGiftBalance();if(bal<cost){$('#playerSheet')?.classList.add('hidden');openHeartShop();toast(`Нужно ❤️ ${cost} для подарка`);return}openGiftConfirm(gift);return}if(isDemoMode()){const bal=getHeartBalance();if(bal<cost){closeGiftConfirm(false);openHeartShop();toast(`Нужно ❤️ ${cost} для подарка`);return}if(cost>0)setHeartBalance(bal-cost);const targetId=selectedPlayer?.id||`demo-${selectedSlot}`;const event={id:Date.now(),kind:'gift',from:playerId,to:targetId,fromName:roomActorName(),toName:targetName,gift:gift.id,cost,emoji:gift.emoji,epic:gift.epic};addGiftRoomActivity(event,gift);closeGiftConfirm(false);closePlayerSheet();playGiftEvent(event);toast(cost?`${gift.name} отправлен · −${cost} ♥`:`${gift.name} отправлен · бесплатно`);return}if(!selectedTarget){toast('Выберите игрока');return}closeGiftConfirm(false);send({type:'gift',gift:gift.id,to:selectedTarget,clientCost:cost});closePlayerSheet()}
function applyLang(){const spin=$('#spin'),msg=$('#msg'),guest=$('#guestLabel'),balcony=$('#balconyLabel'),langCode=$('#langCode');if(spin)spin.textContent=tr('spin');if(msg)msg.placeholder=tr('msg');if(guest)guest.textContent=tr('guests');if(balcony)balcony.textContent=tr('balcony');if(langCode)langCode.textContent=({ru:'RU',ky:'KY',kk:'KZ',uz:'UZ',en:'EN'})[lang]||'RU';if(lastMsg)render(lastMsg)}applyLang();
const loadProfilePhotos=()=>{const self=document.querySelector('.person.self');const fallback=self?.querySelector('img')?.src||photoFor(playerId,1);const main=localStorage.getItem('kissmeet.profile.main')||fallback;$('#profilePhotoMain').style.backgroundImage=`url("${main}")`;document.querySelectorAll('.profilePhotoExtra').forEach((btn,i)=>{const v=localStorage.getItem(`kissmeet.profile.extra${i+1}`)||'';btn.style.backgroundImage=v?`url("${v}")`:'';btn.classList.toggle('hasPhoto',!!v)});$('#profileDisplayName').value=localStorage.getItem('kissmeet.profile.name')||'Player 1';$('#profileBirthDate').value=localStorage.getItem('kissmeet.profile.birth')||'';const g=localStorage.getItem('kissmeet.profile.gender')||'';document.querySelectorAll('[data-gender]').forEach(b=>b.classList.toggle('active',b.dataset.gender===g))};const openSettings=()=>{$('#settingsMenuView').classList.remove('hidden');$('#settingsProfileView').classList.add('hidden');$('#settingsLanguageView').classList.add('hidden');$('#settingsRouletteView')?.classList.add('hidden');$('#settingsFriendRequestsView')?.classList.add('hidden');$('#settingsFriendsView')?.classList.add('hidden');refreshFriendInbox();const soundOn=localStorage.getItem('kissmeet.sound')!=='off';const musicOn=localStorage.getItem('kissmeet.music')!=='off';$('#soundToggle').classList.toggle('active',soundOn);$('#musicToggle').classList.toggle('active',musicOn);$('#settingsOverlay').classList.remove('hidden')};const closeSettings=()=>$('#settingsOverlay').classList.add('hidden');$('#settingsBtn').onclick=openSettings;$('#settingsClose').onclick=closeSettings;$('#settingsBackdrop').onclick=closeSettings;$('#friendInboxBtn').onclick=openFriendRequests;$('#settingsFriendRequestsBack').onclick=()=>{$('#settingsFriendRequestsView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden');refreshFriendInbox()};$('#settingsFriendRequestsClose').onclick=closeSettings;$('#friendsSettingsBtn').onclick=openFriendsManager;$('#settingsFriendsBack').onclick=()=>{$('#settingsFriendsView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')};$('#settingsFriendsClose').onclick=closeSettings;$('#friendsManageTabs').onclick=e=>{const b=e.target.closest('[data-friends-tab]');if(!b)return;friendsViewTab=b.dataset.friendsTab||'friends';renderFriendsView()};$('#friendsManageSearchInput').oninput=renderFriendsView;$('#soundToggle').onclick=()=>{const on=!$('#soundToggle').classList.contains('active');$('#soundToggle').classList.toggle('active',on);localStorage.setItem('kissmeet.sound',on?'on':'off');syncGameSoundState();toast(on?L().soundOn:L().soundOff)};$('#musicToggle').onclick=()=>{const on=!$('#musicToggle').classList.contains('active');$('#musicToggle').classList.toggle('active',on);localStorage.setItem('kissmeet.music',on?'on':'off');syncMusicPlayback();toast(on?L().musicOn:L().musicOff)};const shareInvite=async()=>{const text='Присоединяйся ко мне в «Делбирим»!';try{if(navigator.share)await navigator.share({title:'Делбирим',text,url:location.href});else{await navigator.clipboard.writeText(location.href);toast(L().copied)}}catch{}};$('#inviteFriendsBtn').onclick=shareInvite;$('#shareTopBtn').onclick=()=>{$('#settingsOverlay').classList.remove('hidden');openFriendRequests()};$('#logoutBtn').onclick=()=>toast(L().exitDemo);$('#profileSettingsBtn').onclick=()=>{$('#settingsMenuView').classList.add('hidden');$('#settingsFriendsView')?.classList.add('hidden');$('#settingsProfileView').classList.remove('hidden');loadProfilePhotos()};$('#settingsProfileBack').onclick=()=>{$('#settingsProfileView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')};$('#settingsProfileClose').onclick=closeSettings;let profilePhotoTarget='main';$('#profilePhotoMain').onclick=()=>{profilePhotoTarget='main';$('#profilePhotoInput').click()};document.querySelectorAll('.profilePhotoExtra').forEach(btn=>btn.onclick=()=>{profilePhotoTarget='extra'+btn.dataset.photoSlot;$('#profilePhotoInput').click()});$('#profilePhotoInput').onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{localStorage.setItem(`kissmeet.profile.${profilePhotoTarget}`,r.result);loadProfilePhotos()};r.readAsDataURL(f);e.target.value=''};document.querySelectorAll('[data-gender]').forEach(btn=>btn.onclick=()=>document.querySelectorAll('[data-gender]').forEach(b=>b.classList.toggle('active',b===btn)));$('#profileSettingsSave').onclick=()=>{const displayName=($('#profileDisplayName').value||'').trim().slice(0,24);const birth=$('#profileBirthDate').value||'';localStorage.setItem('kissmeet.profile.name',displayName);localStorage.setItem('kissmeet.profile.birth',birth);const g=document.querySelector('[data-gender].active')?.dataset.gender||'';localStorage.setItem('kissmeet.profile.gender',g);const selfPlayer=document.querySelector('.person.self');if(selfPlayer)selfPlayer.dataset.gender=g==='female'?'female':'male';const main=localStorage.getItem('kissmeet.profile.main');const selfImg=document.querySelector('.person.self .photo img');if(main&&selfImg)selfImg.src=main;const selfName=document.querySelector('.person.self .name');if(selfName&&displayName)selfName.textContent=displayName;toast(L().saved);$('#settingsProfileView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')};

const ROULETTE_ITEMS={komuz:{name:'Комуз',glyph:'🪕',image:'/assets/komuz-real.png?v=5'},guitar:{name:'Гитара',glyph:'🎸',image:'/assets/guitar-real.png?v=1'},shoro:{name:'Шоро',glyph:'🥤',image:'/assets/shoro-real.png?v=1'},duches:{name:'Дюшес',glyph:'🍾',image:'/assets/duches-real.png?v=1'},bishkek:{name:'Бишкек',glyph:'🥃',image:'/assets/bishkek-real.png?v=1'},cognac:{name:'Кыргызстан коньяк',glyph:'🥃',image:'/assets/kyrgyzstan-cognac-real.png?v=1'},cocacola:{name:'Кола',glyph:'🥤',image:'/assets/cola-real.png?v=1'},champagne:{name:'Шампанское',glyph:'🍾',image:'/assets/champagne-real.png?v=1'},jackdaniels:{name:'Тёмная бутылка',glyph:'🥃',image:'/assets/dark-bottle-real.png?v=1'},propertwelve:{name:'Светлое пиво',glyph:'🍺',image:'/assets/beer-bottle-real.png?v=1'},arpa:{name:'Арпа',glyph:'🍺',image:'/assets/arpa-real.png?v=1'},nashapivo:{name:'Наша пиво',glyph:'🍺',image:'/assets/nasha-pivo-real.png?v=1'},tan:{name:'Таң',glyph:'🥛',image:'/assets/tan-real.png?v=1'},jalalabad:{name:'Жалал-Абад',glyph:'💧',image:'/assets/jalal-abad-real.png?v=1'},kymyz:{name:'Кымыз',glyph:'🥛',image:'/assets/kymyz-real.png?v=1'},vip:{name:'VIP',glyph:'👑',image:'/assets/vip-real.png?v=1'},automat:{name:'Автомат',glyph:'🔫',image:'/assets/automat-real.png?v=1'},shypyrgy:{name:'Шыпыргы',glyph:'🧹',image:'/assets/shypyrgy-real.png?v=1'},heart:{name:'Купидон',glyph:'♥',image:'/assets/cupid-real.png?v=5'}};
let rouletteItemKey=localStorage.getItem('kissmeet.rouletteItem')||'komuz';if(!ROULETTE_ITEMS[rouletteItemKey]){rouletteItemKey='komuz';localStorage.setItem('kissmeet.rouletteItem',rouletteItemKey);}
function renderRouletteItem(){const it=ROULETTE_ITEMS[rouletteItemKey]||ROULETTE_ITEMS.komuz;const glyph=$('#rouletteGlyph');if(glyph){glyph.dataset.rouletteItem=rouletteItemKey;glyph.classList.toggle('realRouletteImage',!!it.image);if(it.image)glyph.innerHTML=`<img src="${it.image}" alt="${it.name}">`;else glyph.textContent=it.glyph}document.querySelectorAll('[data-roulette-item]').forEach(b=>b.classList.toggle('active',b.dataset.rouletteItem===rouletteItemKey));}
renderRouletteItem();
function chooseRouletteItem(key){if(!ROULETTE_ITEMS[key])return;rouletteItemKey=key;localStorage.setItem('kissmeet.rouletteItem',rouletteItemKey);renderRouletteItem();try{navigator.vibrate?.(15)}catch{}}

// Bind settings rows after roulette helpers are initialized.
$('#languageSettingsBtn').onclick=()=>{$('#settingsMenuView').classList.add('hidden');$('#settingsProfileView').classList.add('hidden');$('#settingsFriendsView')?.classList.add('hidden');$('#settingsRouletteView').classList.add('hidden');$('#settingsLanguageView').classList.remove('hidden');applyAppLanguage()};
$('#rouletteSettingsBtn').onclick=()=>{$('#settingsMenuView').classList.add('hidden');$('#settingsProfileView').classList.add('hidden');$('#settingsFriendsView')?.classList.add('hidden');$('#settingsLanguageView').classList.add('hidden');$('#settingsRouletteView').classList.remove('hidden');renderRouletteItem()};
$('#settingsRouletteBack').onclick=()=>{$('#settingsRouletteView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')};
$('#settingsRouletteClose').onclick=closeSettings;
$('#settingsRouletteView').onclick=e=>{const b=e.target.closest('[data-roulette-item]');if(!b)return;chooseRouletteItem(b.dataset.rouletteItem)};
$('#logoutBtn').onclick=()=>{closeSettings();localStorage.removeItem('kissmeet.profile.name');toast(L().exitDemo);setTimeout(()=>location.reload(),350)};
$('#deleteAccountBtn').onclick=()=>{const d=L();if(!confirm(d.deleteConfirm||'Удалить аккаунт? Это действие нельзя отменить.'))return;try{if(typeof stopVipLiveVoice==='function')stopVipLiveVoice('')}catch{};const keep={lang:localStorage.getItem('kissmeet.lang'),sound:localStorage.getItem('kissmeet.sound'),music:localStorage.getItem('kissmeet.music')};const keys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&(k.startsWith('kissmeet.')||k.startsWith('delbirim.')||k.startsWith('delbirim_')))keys.push(k)}keys.forEach(k=>localStorage.removeItem(k));if(keep.lang)localStorage.setItem('kissmeet.lang',keep.lang);if(keep.sound)localStorage.setItem('kissmeet.sound',keep.sound);if(keep.music)localStorage.setItem('kissmeet.music',keep.music);closeSettings();toast(d.deleteDone||'Аккаунт удалён');setTimeout(()=>{location.href=location.origin+location.pathname},450)};

function localAutoSpinEligible(){
  const btn=$('#spin');if(!btn||btn.disabled||document.hidden||demoSpinning||heartDuelOpen||readTableSettings(room))return false;
  if(isDemoMode())return demoNextPlayerId===playerId;
  const m=lastMsg,v=m?.view;if(!m||!v)return false;
  const guest=m.seats?.includes(playerId)||v.players?.includes(playerId);
  return m.status==='playing'&&guest&&v.turn===playerId;
}
function clearLocalAutoSpin(resetConsumed=false){
  clearTimeout(localAutoSpinTimer);localAutoSpinTimer=null;
  if(resetConsumed)localAutoSpinConsumed=false;
}
function scheduleLocalAutoSpin(delay=3000){
  if(!localAutoSpinEligible()){clearLocalAutoSpin(true);return}
  if(localAutoSpinConsumed||localAutoSpinTimer)return;
  localAutoSpinTimer=setTimeout(()=>{
    localAutoSpinTimer=null;
    if(!localAutoSpinEligible())return;
    localAutoSpinConsumed=true;
    handleSpin({automatic:true});
  },delay);
}
function scheduleDemoSpin(delay=3000){
  // NPC turns advance automatically after 3 seconds. The local player's turn is
  // handled by scheduleLocalAutoSpin so manual Spin can cancel the same timeout.
  if(demoIdleTimer||demoSpinning||heartDuelOpen||document.hidden||readTableSettings(room)||!isDemoMode()||demoNextPlayerId===playerId)return;
  demoIdleTimer=setTimeout(()=>{demoIdleTimer=null;if(document.hidden||demoSpinning||heartDuelOpen||readTableSettings(room)||!isDemoMode()||demoNextPlayerId===playerId)return;demoSpin({automatic:true})},delay);
}
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){clearTimeout(demoIdleTimer);demoIdleTimer=null;clearLocalAutoSpin(false)}
  else{scheduleDemoSpin(3000);scheduleLocalAutoSpin(3000)}
});
function demoTurnOrder(participants){
  if(participants.length<2)return participants;
  const arena=participants[0].offsetParent||$('#players'),bounds=arena?.getBoundingClientRect();
  if(!bounds)return participants;
  const cx=bounds.left+bounds.width/2,cy=bounds.top+bounds.height/2;
  const angle=person=>{const r=person.getBoundingClientRect();return(Math.atan2(r.top+r.height/2-cy,r.left+r.width/2-cx)*180/Math.PI+360)%360};
  const first=participants.find(person=>person.dataset.playerId===playerId)||participants[0],startAngle=angle(first);
  return [...participants].sort((a,b)=>((angle(a)-startAngle+360)%360)-((angle(b)-startAngle+360)%360));
}
const ROULETTE_VISUAL_HEADING={
  komuz:-18,guitar:-18,automat:173,heart:171,
  shoro:-94,duches:-94,bishkek:-94,cognac:-94,cocacola:-94,champagne:-94,
  jackdaniels:-94,propertwelve:-94,arpa:-94,nashapivo:-94,tan:-94,jalalabad:-94,
  kymyz:-94,vip:-94,shypyrgy:-94
};
function rouletteAngleToPlayer(playerEl){
  const wrap=$('.rouletteItemWrap')||$('#bottle'),photo=playerEl?.querySelector('.photo')||playerEl;
  if(!wrap||!photo)return demoAngle;
  const a=wrap.getBoundingClientRect(),b=photo.getBoundingClientRect();
  const cx=a.left+a.width/2,cy=a.top+a.height/2,tx=b.left+b.width/2,ty=b.top+b.height/2;
  const targetDeg=Math.atan2(ty-cy,tx-cx)*180/Math.PI;
  const visualHeading=ROULETTE_VISUAL_HEADING[rouletteItemKey]??-90;
  return targetDeg-visualHeading;
}
function demoSpin({automatic=false}={}){
  if(demoSpinning||heartDuelOpen)return;
  clearTimeout(demoIdleTimer);demoIdleTimer=null;
  const participants=demoTurnOrder([...document.querySelectorAll('#players .person:not(.emptySeat)')]);
  if(!participants.length)return;
  const spinner=participants.find(person=>person.dataset.playerId===demoNextPlayerId)||participants[0];
  const spinnerIndex=participants.indexOf(spinner);
  const gender=spinner.dataset.gender||(spinner.classList.contains('self')?(localStorage.getItem('kissmeet.profile.gender')||'male'):'');
  const opposite=gender==='male'?'female':gender==='female'?'male':'';
  const candidates=participants.filter(person=>person!==spinner&&opposite&&person.dataset.gender===opposite);
  if(!candidates.length){toast('Для хода нужна пара мужчина–женщина');demoNextPlayerId=participants[(spinnerIndex+1)%participants.length]?.dataset.playerId||playerId;scheduleDemoSpin(3000);return}
  demoNextPlayerId=participants[(spinnerIndex+1)%participants.length]?.dataset.playerId||playerId;
  demoSpinning=true;
  $('#spin').disabled=true;
  document.querySelectorAll('.person.demoSpinActive').forEach(n=>n.classList.remove('demoSpinActive'));
  const pick=candidates[Math.floor(Math.random()*candidates.length)];
  // Aim at the ACTUAL player photo on screen. The old version used fixed desktop
  // percentages, so on iPhone/VIP layouts the bottle could visibly point at one
  // person while the result selected another. Each roulette prop also has its own
  // natural pointing direction (bottle cap, instrument neck, gun barrel).
  const targetRotation=rouletteAngleToPlayer(pick);
  demoAngle+=1440+((targetRotation-demoAngle)%360+360)%360;
  $('#bottle').style.transform=`rotate(${demoAngle}deg)`;
  const spinnerName=spinner.querySelector('.name')?.textContent||'Игрок';
  $('#turnText').textContent=`${spinnerName} крутит…`;
  spinner.classList.add('demoSpinActive');pick.classList.add('demoSpinActive');
  setTimeout(()=>{
    spinner.classList.remove('demoSpinActive');pick.classList.remove('demoSpinActive');
    document.querySelectorAll('.person.demoPick').forEach(n=>n.classList.remove('demoPick'));
    pick.classList.add('demoPick');
    $('#turnText').textContent=`${(ROULETTE_ITEMS[rouletteItemKey]||ROULETTE_ITEMS.komuz).name} выбрал(а) ${pick.querySelector('.name')?.textContent||'Игрок'}`;
    demoSpinning=false;$('#spin').disabled=true;
    openHeartDuel(spinner,pick,{automatic});
  },6000);
}
function handleSpin(opts={}){
  const automatic=Boolean(opts?.automatic);
  clearLocalAutoSpin(false);localAutoSpinConsumed=true;
  const btn=$('#spin');if(btn)btn.disabled=true;
  if(isDemoMode()){if(demoNextPlayerId!==playerId)return;demoSpin({automatic});return}
  send({type:'spin'});
}
$('#spin').onclick=handleSpin;
let chatReplyTarget=null;
function selectChatReplyTarget(player){
  if(!player)return;
  const display=String(player.name||'Игрок').split(',')[0].trim()||'Игрок';
  chatReplyTarget={id:player.id||null,name:display};
  const input=$('#msg');if(!input)return;
  const mention=`@${display} `;
  const current=String(input.value||'');
  input.value=current.startsWith(mention)?current:mention;
  input.placeholder=`Сообщение для ${display}`;
  const feed=$('#feed');if(feed)feed.scrollTop=feed.scrollHeight;
  setTimeout(()=>{input.focus();try{input.setSelectionRange(input.value.length,input.value.length)}catch{}},40);
  try{navigator.vibrate?.(8)}catch{}
}
$('#send').onclick=()=>{const i=$('#msg'),x=i.value.trim();if(x){if(!moderateOutgoingChat(x)){toast('Сообщение заблокировано правилами безопасности');return}send({type:'chat',text:x,toPlayerId:chatReplyTarget?.id||null,toPlayerName:chatReplyTarget?.name||null});i.value='';i.placeholder=tr('msg');chatReplyTarget=null}};
$('#msg').onkeydown=e=>{if(e.key==='Enter')$('#send').click()};
$('#sheetGiftbar').onclick=e=>{const eb=e.target.closest('[data-emotion-gift]');if(eb){if(selectedPlayer?.self||selectedPlayer?.id===playerId){toast(tr('self'));return}const g=EMOTION_GIFTS.find(x=>x.id===eb.dataset.emotionGift);if(!g||!selectedPlayer)return;const rr=eb.getBoundingClientRect(),source={x:rr.left+rr.width/2,y:rr.top+rr.height/2},targetPlayer={...selectedPlayer};if(g.heartTransfer){openHeartTransfer(g,targetPlayer,source);return}if(isDemoMode()){const bal=getHeartBalance();if(bal<g.cost){toast(`Нужно ♥ ${g.cost}`);return}setHeartBalance(bal-g.cost);updateGiftBalance()}eb.classList.remove('emotionTapPulse');void eb.offsetWidth;eb.classList.add('emotionTapPulse');setTimeout(()=>eb.classList.remove('emotionTapPulse'),150);playEmotionGift(g,targetPlayer,source);addRoomActivity('🎁',`<b>${esc(roomActorName())}</b> подарил <b>${esc(g.name)}</b> для <b>${esc(targetPlayer.name||'Игрок')}</b>`,roomActorPhoto(),{ttlMs:5200,className:'giftActivityTransient'});toast(`${g.name} · ♥ ${g.cost}`);try{navigator.vibrate?.(8)}catch{}return}const b=e.target.closest('[data-gift]');if(!b)return;if(selectedPlayer?.self||selectedPlayer?.id===playerId){toast(tr('self'));return}selectedGiftId=b.dataset.gift;syncGiftSelectionUI();try{navigator.vibrate?.(10)}catch{}};
$('#giftTabs').onclick=e=>{const b=e.target.closest('[data-gift-cat]');if(!b)return;giftCategory=b.dataset.giftCat;document.querySelectorAll('#giftTabs [data-gift-cat]').forEach(x=>x.classList.toggle('active',x===b));$('#giftEmotionBtn')?.classList.remove('active');selectedGiftId=null;setGiftCategoriesLocked(false);renderGiftCatalog()};
function openHeartShop(){document.querySelector('#heartShop')?.classList.remove('hidden')}
function closeHeartShop(){document.querySelector('#heartShop')?.classList.add('hidden')}
$('#giftTopup').onclick=openHeartShop;$('#giftSendBtn').onclick=()=>{const gift=giftCatalog().find(g=>g.id===selectedGiftId);if(!gift)return;if(giftHeartCost(gift)===0)startSelectedGiftGestureFx(gift);sendSelectedGift()};
document.querySelector('.heart')?.addEventListener('click',openHeartShop);
$('#heartShopClose').onclick=closeHeartShop;
$('#heartShopBackdrop').onclick=closeHeartShop;
const VIP_DAILY_LIMITS={photos:15,videos:5,voiceSeconds:5*60*60,videoSeconds:60};
function vipLocalDay(){const d=new Date(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${d.getFullYear()}-${m}-${day}`}
function vipUsageKey(){return `delbirim.vip.usage.${vipLocalDay()}`}
function getVipDailyUsage(){try{const v=JSON.parse(localStorage.getItem(vipUsageKey())||'{}');return {photos:Math.max(0,Number(v.photos)||0),videos:Math.max(0,Number(v.videos)||0),voiceSeconds:Math.max(0,Number(v.voiceSeconds)||0)}}catch{return {photos:0,videos:0,voiceSeconds:0}}}
function saveVipDailyUsage(v){const clean={photos:Math.max(0,Math.floor(Number(v.photos)||0)),videos:Math.max(0,Math.floor(Number(v.videos)||0)),voiceSeconds:Math.max(0,Math.floor(Number(v.voiceSeconds)||0))};try{localStorage.setItem(vipUsageKey(),JSON.stringify(clean))}catch{};syncVipUsageSummary(clean);return clean}
function formatVipVoiceTime(sec){const min=Math.max(0,Math.ceil(Number(sec||0)/60)),h=Math.floor(min/60),m=min%60;return h?`${h} ч ${m} мин`:`${m} мин`}
function syncVipUsageSummary(v=getVipDailyUsage()){const el=$('#vipUsageSummary');if(!el)return;el.textContent=`Сегодня: фото ${v.photos}/${VIP_DAILY_LIMITS.photos} · видео ${v.videos}/${VIP_DAILY_LIMITS.videos} · голос ${formatVipVoiceTime(Math.max(0,VIP_DAILY_LIMITS.voiceSeconds-v.voiceSeconds))} осталось`}
function isVipUser(){return premium===true}
function syncVipFeatureButtons(){const locked=!isVipUser();for(const id of ['headphonesBtn','uploadBtn']){const el=document.getElementById(id);if(!el)continue;el.classList.toggle('vipLocked',locked);el.dataset.vipOnly='1';if(locked)el.title=(el.getAttribute('aria-label')||el.title||'Функция')+' · только VIP'}for(const id of ['youtubeBtn','giftYoutubeBtn']){const el=document.getElementById(id);if(!el)continue;el.classList.remove('vipLocked');delete el.dataset.vipOnly}}
function requireVipFeature(name='Эта функция'){if(isVipUser())return true;toast(`${name} доступно только VIP 👑`);openVipInfo();return false}
function setVipAccess(value){premium=Boolean(value);syncVipFeatureButtons();syncVipUsageSummary()}
function openVipInfo(){syncVipUsageSummary();document.querySelector('#vipInfoOverlay')?.classList.remove('hidden')}
function closeVipInfo(){document.querySelector('#vipInfoOverlay')?.classList.add('hidden')}
// Temporary review mode: show the VIP screen immediately when the game opens.
// VIP preview access is enabled temporarily so the unlocked game UI can be inspected.
$('#vipInfoClose').onclick=closeVipInfo;
$('#vipInfoBackdrop').onclick=closeVipInfo;
$('#vipInfoBuy').onclick=()=>{const b=$('#vipInfoBuy');b?.classList.add('vipBuyTap');setTimeout(()=>b?.classList.remove('vipBuyTap'),420);toast('👑 VIP · ⭐ 1250 / месяц — Telegram Stars подключим на этапе платежей')};
$('#heartShop').onclick=e=>{const info=e.target.closest('[data-heart-info]');if(info){openVipInfo();return}const pack=e.target.closest('[data-heart-pack]');if(!pack)return;const hearts=Number(pack.dataset.heartPack||0),stars=Number(pack.dataset.stars||0);pack.classList.add('heartPackTap');pack.setAttribute('aria-busy','true');setTimeout(()=>{pack.classList.remove('heartPackTap');pack.removeAttribute('aria-busy')},520);toast(`❤️ ${hearts} за ⭐ ${stars} — Telegram Stars подключим на этапе платежей`)};
$('#giftSound').onclick=()=>{const on=!gameSoundEnabled();localStorage.setItem('kissmeet.sound',on?'on':'off');syncGameSoundState();toast(on?L().soundOn:L().soundOff)};
syncGiftSoundUi();

$('#sheetClose').onclick=closePlayerSheet;$('#sheetBackdrop').onclick=closePlayerSheet;$('#profileClose').onclick=closePlayerProfile;$('#profileBackdrop').onclick=closePlayerProfile;$('#profileGallery').onclick=e=>{const b=e.target.closest('[data-src]');if(!b)return;$('#profileHero').style.backgroundImage=`url("${b.dataset.src}")`;document.querySelectorAll('.profileThumb').forEach(x=>x.classList.toggle('active',x===b))};
const VIP_PREVIEW_ACCESS=true;const premiumBtn=$('#premiumBtn');setVipAccess(VIP_PREVIEW_ACCESS||localStorage.getItem('delbirim.vip.active')==='1');if(premiumBtn){premiumBtn.classList.add('active');premiumBtn.textContent='VIP 👑 активен';premiumBtn.disabled=false;premiumBtn.onclick=()=>openVipInfo()}
let ytTab='popular';
function ytFavorites(){try{return JSON.parse(localStorage.getItem('kissmeet.ytFav')||'[]')}catch{return[]}}
function ytHistory(){try{return JSON.parse(localStorage.getItem('kissmeet.ytHistory')||'[]')}catch{return[]}}
function setYtFavorites(x){localStorage.setItem('kissmeet.ytFav',JSON.stringify(x.slice(0,40)))}
function setYtHistory(x){localStorage.setItem('kissmeet.ytHistory',JSON.stringify(x.slice(0,20)))}
function renderYoutubeLibrary(){const fav=ytFavorites(),hist=ytHistory(),q=$('#ytSearchInput').value.trim().toLowerCase();let list=YT_CATALOG;if(ytTab==='favorites')list=YT_CATALOG.filter(v=>fav.includes(v.id));else if(ytTab==='history')list=hist.map(id=>YT_CATALOG.find(v=>v.id===id)).filter(Boolean);else if(ytTab==='search')list=YT_CATALOG.filter(v=>v.title.toLowerCase().includes(q));$('#ytLibraryTitle').textContent=ytTab==='favorites'?'Избранное':ytTab==='history'?'Недавно смотрели':ytTab==='search'?'Поиск видео':'Поставить видео из популярного';$('#ytSearchRow').classList.toggle('hidden',ytTab!=='search');const box=$('#ytGrid');box.innerHTML='';if(!list.length){box.innerHTML='<div class="ytEmpty">Здесь пока пусто</div>';return}for(const v of list){const card=document.createElement('button');card.className='ytCard';card.type='button';card.innerHTML=`<span class="ytThumbWrap"><img class="ytThumb" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt=""><span class="ytDuration">${v.duration}</span><span class="ytStar ${fav.includes(v.id)?'saved':''}" data-fav="${v.id}">★</span></span><span class="ytCardTitle">${esc(v.title)}</span>`;card.onclick=e=>{const star=e.target.closest('[data-fav]');if(star){e.stopPropagation();let f=ytFavorites();f=f.includes(v.id)?f.filter(x=>x!==v.id):[v.id,...f];setYtFavorites(f);renderYoutubeLibrary();return}selectYoutubeVideo(v)};box.appendChild(card)}}
function openYoutubeLibrary(){ytTab='popular';$('#youtubeLibrary').classList.remove('hidden');document.body.classList.add('modalOpen');for(const b of document.querySelectorAll('.ytTab'))b.classList.toggle('active',b.dataset.ytTab==='popular');renderYoutubeLibrary()}
function closeYoutubeLibrary(){$('#youtubeLibrary').classList.add('hidden');document.body.classList.remove('modalOpen');pendingGiftYoutubeTarget=null}
const YOUTUBE_HEART_COST=9;
function closeYoutubeConfirm(){document.querySelector('#youtubeConfirm')?.classList.add('hidden');pendingYoutubePurchase=null;document.body.classList.remove('modalOpen')}
function openYoutubeConfirm(v,target){const url=`https://www.youtube.com/watch?v=${v.id}`;pendingYoutubePurchase={v,target,url};$('#ytConfirmThumb').src=`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;$('#ytConfirmSong').textContent=v.title;$('#ytConfirmText').textContent=target?`Поставить музыку «${v.title}» для ${target.name} за ❤️ ${YOUTUBE_HEART_COST}?`:`Поставить музыку «${v.title}» для всех за столом за ❤️ ${YOUTUBE_HEART_COST}?`;$('#ytConfirmBalance').textContent=String(getHeartBalance());$('#youtubeConfirm').classList.remove('hidden');document.body.classList.add('modalOpen')}
function completeYoutubePlacement(p){if(!p)return;const {v,target,url}=p;showMedia({kind:'youtube',url},v.title);const history=[v.id,...ytHistory().filter(x=>x!==v.id)];setYtHistory(history);const mine=lastMsg?.seats?.includes(playerId)&&Number(profile(playerId).mediaUnlocks||0)>0;if(mine)send({type:'setVideo',kind:'youtube',url,to:target?.id||null});if(target)addRoomActivity('▶️',`<b>${esc(roomActorName())}</b> поставил YouTube <b>${esc(v.title)}</b> для <b>${esc(target.name)}</b>`);else addRoomActivity('▶️',`<b>${esc(roomActorName())}</b> поставил YouTube <b>${esc(v.title)}</b> для всех за столом`);toast(`YouTube поставлен · −${YOUTUBE_HEART_COST} ❤️`)}
function selectYoutubeVideo(v){const target=pendingGiftYoutubeTarget;if(getHeartBalance()<YOUTUBE_HEART_COST){pendingGiftYoutubeTarget=null;closeYoutubeLibrary();openHeartShop();toast(`Нужно ❤️ ${YOUTUBE_HEART_COST} для YouTube`);return}pendingGiftYoutubeTarget=null;closeYoutubeLibrary();openYoutubeConfirm(v,target)}

$('#youtubeBtn').onclick=()=>{pendingGiftYoutubeTarget=null;openYoutubeLibrary();toast(`YouTube · ❤️ ${YOUTUBE_HEART_COST}`)};
$('#themeBtn')?.addEventListener('click',openThemePicker);
$('#themeClose')?.addEventListener('click',closeThemePicker);
$('#themeBackdrop')?.addEventListener('click',closeThemePicker);
$('#themeBack')?.addEventListener('click',renderThemeRoot);
$('#customThemeBtn')?.addEventListener('click',buyCustomBackgroundAndChoose);
$('#customVideoThemeBtn')?.addEventListener('click',()=>{
  if(getHeartBalance()<CUSTOM_VIDEO_BG_COST){toast(`Нужно ${CUSTOM_VIDEO_BG_COST} ♥`);return}
  const input=$('#customVideoBgFile');if(!input)return;
  input.value='';input.click();
});
$('#customBgFile')?.addEventListener('change',e=>chooseCustomBackground(e.target.files?.[0]));
$('#customVideoBgFile')?.addEventListener('change',e=>chooseCustomVideoBackground(e.target.files?.[0]));
const tg=$('#themeGrid');
if(tg){
  tg.onclick=e=>{
    const b=e.target.closest('[data-theme-id]');
    if(!b)return;
    applyTheme(b.dataset.themeId);
    localStorage.removeItem('kissmeet.place');
    closeThemePicker();
  };
}
const storedTheme=localStorage.getItem('kissmeet.theme');
const applyWoodReference=!localStorage.getItem('kissmeet.woodReferenceApplied')&&(!storedTheme||storedTheme==='dark');
if(applyWoodReference)localStorage.setItem('kissmeet.woodReferenceApplied','1');
const savedTheme=applyWoodReference?'wood':(storedTheme||'wood');
const savedPlace=localStorage.getItem('kissmeet.place');
if(VIP_ROOM_THEMES[room]){
  applyVipRoomTheme();
}else if(savedTheme==='custom'){
  const customBg=localStorage.getItem('kissmeet.customBg');
  if(customBg)applyCustomTheme(customBg); else applyTheme('dark');
}else if(savedTheme==='custom-video'){
  const customVideoBg=localStorage.getItem('kissmeet.customVideoBg');
  if(customVideoBg)applyCustomVideoTheme(customVideoBg); else applyTheme('dark');
}else if(savedTheme==='city'&&savedPlace){
  const place=ALL_THEME_PLACES.find(x=>x.id===savedPlace);
  if(place)applyPlaceTheme(place); else applyTheme(savedTheme);
}else applyTheme(savedTheme);
syncHeartBalance();
renderThemeRoot();
$('#giftConfirmClose').onclick=()=>closeGiftConfirm(true);$('#giftConfirmBackdrop').onclick=()=>closeGiftConfirm(true);$('#giftConfirmCancel').onclick=()=>closeGiftConfirm(true);$('#giftConfirmBuy').onclick=()=>{const p=pendingGiftPurchase;if(!p)return;const gift=giftCatalog().find(g=>g.id===p.giftId);if(!gift){closeGiftConfirm(true);return}const cost=giftHeartCost(gift),bal=currentGiftBalance();if(bal<cost){closeGiftConfirm(false);openHeartShop();toast(`Нужно ❤️ ${cost} для подарка`);return}startSelectedGiftGestureFx(gift);sendSelectedGift(true)};
$('#ytClose').onclick=closeYoutubeLibrary;$('#ytBackdrop').onclick=closeYoutubeLibrary;
$('#ytConfirmClose').onclick=closeYoutubeConfirm;$('#ytConfirmBackdrop').onclick=closeYoutubeConfirm;$('#ytConfirmCancel').onclick=closeYoutubeConfirm;$('#ytConfirmBuy').onclick=()=>{const p=pendingYoutubePurchase;if(!p)return;const bal=getHeartBalance();if(bal<YOUTUBE_HEART_COST){closeYoutubeConfirm();openHeartShop();toast(`Нужно ❤️ ${YOUTUBE_HEART_COST} для YouTube`);return}setHeartBalance(bal-YOUTUBE_HEART_COST);pendingYoutubePurchase=null;$('#youtubeConfirm').classList.add('hidden');document.body.classList.remove('modalOpen');completeYoutubePlacement(p)};$('.ytTabs').onclick=e=>{const b=e.target.closest('[data-yt-tab]');if(!b)return;ytTab=b.dataset.ytTab;for(const x of document.querySelectorAll('.ytTab'))x.classList.toggle('active',x===b);renderYoutubeLibrary();if(ytTab==='search')setTimeout(()=>$('#ytSearchInput').focus(),0)};$('#ytSearchInput').oninput=renderYoutubeLibrary;$('#closeMedia').onclick=()=>{$('#mediaBox').classList.add('hidden');$('#chatArea').classList.remove('mediaActive');$('#videoFrame').innerHTML='🎬'};function vipMediaAvailable(kind){const u=getVipDailyUsage(),limit=kind==='video'?VIP_DAILY_LIMITS.videos:VIP_DAILY_LIMITS.photos,used=kind==='video'?u.videos:u.photos;return {ok:used<limit,used,limit,u}}
function consumeVipMedia(kind){const u=getVipDailyUsage();if(kind==='video')u.videos+=1;else u.photos+=1;saveVipDailyUsage(u);return u}
function readVideoDuration(file){return new Promise(resolve=>{const url=URL.createObjectURL(file),v=document.createElement('video');let done=false;const finish=value=>{if(done)return;done=true;try{URL.revokeObjectURL(url)}catch{};resolve(value)};v.preload='metadata';v.onloadedmetadata=()=>finish(Number(v.duration)||0);v.onerror=()=>finish(0);v.src=url;setTimeout(()=>finish(0),5000)})}
$('#uploadBtn').onclick=()=>{if(!requireVipFeature('Фото и видео'))return;const u=getVipDailyUsage();if(u.photos>=VIP_DAILY_LIMITS.photos&&u.videos>=VIP_DAILY_LIMITS.videos){toast('VIP-лимит на сегодня: 15 фото и 5 видео уже использован');return}const input=$('#file');if(!input)return toast('Фото и видео недоступны');toast(`Сегодня осталось: 📷 ${Math.max(0,VIP_DAILY_LIMITS.photos-u.photos)} · 🎬 ${Math.max(0,VIP_DAILY_LIMITS.videos-u.videos)}`);input.click()};
$('#file').onchange=async e=>{if(!isVipUser()){e.target.value='';requireVipFeature('Фото и видео');return}const f=e.target.files?.[0];if(!f)return;const isVideo=String(f.type||'').startsWith('video/'),isImage=String(f.type||'').startsWith('image/');if(!isVideo&&!isImage){toast('Выберите фото или видео');e.target.value='';return}const kind=isVideo?'video':'image',quota=vipMediaAvailable(kind);if(!quota.ok){toast(isVideo?'Лимит 5 видео на сегодня закончился':'Лимит 15 фото на сегодня закончился');e.target.value='';return}if(isVideo){const duration=await readVideoDuration(f);if(duration>VIP_DAILY_LIMITS.videoSeconds+.25){toast('VIP-видео — максимум 60 секунд');e.target.value='';return}}let url='',objectUrl=false;if(!DEMO_PREVIEW){try{const r=await fetch('/api/upload-media',{method:'POST',headers:{'content-type':f.type||(isVideo?'video/mp4':'image/jpeg')},body:f});if(r.ok){const j=await r.json();if(j?.url)url=j.url}}catch{}}if(!url){url=URL.createObjectURL(f);objectUrl=true}consumeVipMedia(kind);$('#mediaBox').classList.add('hidden');$('#chatArea').classList.remove('mediaActive');showBottomMediaGift(url,kind,{objectUrl});const u=getVipDailyUsage();toast(isImage?`Фото · осталось ${Math.max(0,VIP_DAILY_LIMITS.photos-u.photos)} из ${VIP_DAILY_LIMITS.photos}`:`Видео · осталось ${Math.max(0,VIP_DAILY_LIMITS.videos-u.videos)} из ${VIP_DAILY_LIMITS.videos}`);e.target.value=''};
let liveVoiceMeter=null,liveVoiceStartedAt=0,liveVoiceBaseSeconds=0,liveVoiceUsageKey='';
function persistLiveVoiceUsage(){if(!liveVoiceStartedAt)return getVipDailyUsage();const key=vipUsageKey();if(key!==liveVoiceUsageKey){liveVoiceUsageKey=key;liveVoiceBaseSeconds=0;liveVoiceStartedAt=Date.now()}const u=getVipDailyUsage(),elapsed=Math.max(0,Math.floor((Date.now()-liveVoiceStartedAt)/1000));u.voiceSeconds=Math.min(VIP_DAILY_LIMITS.voiceSeconds,liveVoiceBaseSeconds+elapsed);return saveVipDailyUsage(u)}
function stopVipLiveVoice(message='Живой разговор выключен'){const btn=$('#headphonesBtn');if(liveVoiceStartedAt)persistLiveVoiceUsage();clearInterval(liveVoiceMeter);liveVoiceMeter=null;liveVoiceStartedAt=0;liveVoiceBaseSeconds=0;liveVoiceUsageKey='';window.liveVoiceStream?.getTracks().forEach(t=>t.stop());window.liveVoiceStream=null;btn?.classList.remove('liveVoice');if(message)toast(message)}
function startVipLiveVoiceMeter(stream){const u=getVipDailyUsage();liveVoiceUsageKey=vipUsageKey();liveVoiceBaseSeconds=u.voiceSeconds;liveVoiceStartedAt=Date.now();window.liveVoiceStream=stream;clearInterval(liveVoiceMeter);liveVoiceMeter=setInterval(()=>{const now=persistLiveVoiceUsage();if(now.voiceSeconds>=VIP_DAILY_LIMITS.voiceSeconds)stopVipLiveVoice('Лимит VIP: 5 часов голосового общения на сегодня закончился')},5000);syncVipUsageSummary(u)}
$('#headphonesBtn').onclick=async()=>{if(!requireVipFeature('Живой голосовой чат'))return;const btn=$('#headphonesBtn');if(btn.classList.contains('liveVoice')){stopVipLiveVoice();return}const usage=getVipDailyUsage();if(usage.voiceSeconds>=VIP_DAILY_LIMITS.voiceSeconds){toast('Лимит VIP: 5 часов голосового общения на сегодня закончился');return}try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});btn.classList.add('liveVoice');startVipLiveVoiceMeter(stream);toast(`Живой разговор · осталось ${formatVipVoiceTime(VIP_DAILY_LIMITS.voiceSeconds-usage.voiceSeconds)}`)}catch{toast('Микрофон недоступен')}};
// Canonical heart choice implementation.
let heartDuelTimer=null;
let demoIdleTimer=null,demoAutoTimer=null,demoPartnerTimer=null,localAutoSpinTimer=null,localAutoSpinConsumed=false;
let demoNextPlayerId=playerId;
let heartDuelOpen=false;
let heartDuelSources=[];
let heartDuelChoice=null;
let heartDuelPartnerChoice=null;
let heartDuelResultTimer=null;
function playerSnapshot(el){
  if(!el)return null;
  const img=el.querySelector('.photo img');
  return {name:(el.querySelector('.name')?.textContent||'Игрок').trim(),photo:img?.currentSrc||img?.src||'',el};
}
const PAIR_VISUAL_SELECTOR='.giftCorner,.wearableGift,.persistentEmotionProp,.kissCover,.dirtyEmotionOverlay,.persistentPlayerProp';
function mirrorPlayerVisualsToPair(sourceEl,destPhoto){
  if(!destPhoto)return;
  destPhoto.querySelectorAll('[data-pair-clone="1"]').forEach(x=>x.remove());
  const sourcePhoto=sourceEl?.querySelector('.photo');if(!sourcePhoto)return;
  sourcePhoto.querySelectorAll(PAIR_VISUAL_SELECTOR).forEach(node=>{
    const clone=node.cloneNode(true);
    clone.dataset.pairClone='1';
    clone.classList.remove('propArrive','wearableDrop','gift-hit');
    destPhoto.appendChild(clone);
  });
}
// One stationary pair component for choice, waiting and result.
// Each direction is shown independently: kiss = green, refusal = red slap.
let heartDuelLocalParticipant=false;
let heartDuelResultShown=false;
function applyPersistentDuelMark(recipientEl,kind){
  // Refusal leaves a lasting hand/finger print. Kisses are intentionally temporary.
  if(kind!=='slap')return;
  const photo=giftElForPlayer(recipientEl?.dataset?.playerId);if(!photo)return;
  let mark=photo.querySelector('.persistentPlayerProp-slap');
  if(!mark){mark=document.createElement('i');mark.className='persistentPlayerProp persistentPlayerProp-slap';photo.appendChild(mark)}
  mark.classList.remove('propArrive');void mark.offsetWidth;mark.classList.add('propArrive');
}
function syncPairDecisionVisuals(){
  const duel=$('#heartDuel');if(!duel)return;
  if(heartDuelChoice)duel.dataset.meChoice=heartDuelChoice;else delete duel.dataset.meChoice;
  if(heartDuelPartnerChoice)duel.dataset.partnerChoice=heartDuelPartnerChoice;else delete duel.dataset.partnerChoice;
  const mePhoto=$('#heartDuelMePhoto'),targetPhoto=$('#heartDuelTargetPhoto');
  mePhoto.classList.toggle('slapHit',heartDuelPartnerChoice==='slap');
  mePhoto.classList.toggle('kissHit',heartDuelPartnerChoice==='kiss');
  targetPhoto.classList.toggle('slapHit',heartDuelChoice==='slap');
  targetPhoto.classList.toggle('kissHit',heartDuelChoice==='kiss');
}
function setPairSceneState(state){
  const duel=$('#heartDuel');duel.dataset.state=state;
  const labels={choice:heartDuelLocalParticipant?'Твой выбор':'Ход игроков',pending:'Ждём ответ',refused:'Вы отказали',mutual:'Поцелуй подтверждён',declined:'Выбор сделан',missed:'Нет ответа'};
  $('#pairSceneTitle').textContent=labels[state]||labels.choice;
  $('#heartDuelNote').textContent=state==='choice'?'':labels[state];
  const locked=!!heartDuelChoice||!heartDuelLocalParticipant;
  $('#pairSceneKiss').disabled=locked;$('#pairSceneRefuse').disabled=locked;
  $('#pairSceneKiss').classList.toggle('selected',heartDuelChoice==='kiss');
  $('#pairSceneRefuse').classList.toggle('selected',heartDuelChoice==='slap');
  syncPairDecisionVisuals();
}
function rehideHeartDuelSources(){
  const ids=($('#heartDuel')?.dataset.sourceIds||'').split(',').filter(Boolean);
  document.querySelectorAll('#players .person').forEach(el=>el.classList.toggle('heartDuelSource',ids.includes(el.dataset.playerId)));
}
function clearDuelPreview(){setPairSceneState('choice')}
function showDuelPreview(kind){
  if(heartDuelOpen)setPairSceneState(kind==='kiss'?'pending':'refused');
}
function closeHeartDuel(){
  clearInterval(heartDuelTimer);heartDuelTimer=null;
  clearTimeout(demoAutoTimer);demoAutoTimer=null;clearTimeout(demoPartnerTimer);demoPartnerTimer=null;
  clearTimeout(heartDuelResultTimer);heartDuelResultTimer=null;
  heartDuelOpen=false;heartDuelChoice=null;heartDuelPartnerChoice=null;heartDuelResultShown=false;
  heartDuelSources.forEach(el=>el?.classList.remove('heartDuelSource'));heartDuelSources=[];
  const duel=$('#heartDuel');duel.classList.add('hidden');duel.classList.remove('finalHold');delete duel.dataset.sourceIds;delete duel.dataset.meChoice;delete duel.dataset.partnerChoice;
  $('#heartDuelMePhoto')?.classList.remove('slapHit','kissHit');$('#heartDuelTargetPhoto')?.classList.remove('slapHit','kissHit');rehideHeartDuelSources();
  document.body.classList.remove('heartDuelActive');
  document.querySelector('.person.demoPick')?.classList.remove('demoPick');
  if($('#spin'))$('#spin').disabled=isDemoMode()&&demoNextPlayerId!==playerId;
  if($('#turnText')){const next=[...document.querySelectorAll('#players .person')].find(person=>person.dataset.playerId===demoNextPlayerId);$('#turnText').textContent=isDemoMode()?(demoNextPlayerId===playerId?'Ваш ход — крутите сердце':`Ход: ${next?.querySelector('.name')?.textContent||'следующий игрок'}`):'Демо — крутите сердце'}
  if(isDemoMode()){scheduleDemoSpin(3000);scheduleLocalAutoSpin(3000)}
}
function showHeartDuelResult(kind=heartDuelChoice,{mutual=false}={}){
  if(!heartDuelOpen||!kind){closeHeartDuel();return}
  if(heartDuelResultShown)return;
  heartDuelResultShown=true;
  clearInterval(heartDuelTimer);heartDuelTimer=null;
  clearTimeout(demoAutoTimer);demoAutoTimer=null;clearTimeout(demoPartnerTimer);demoPartnerTimer=null;
  const confirmed=kind==='kiss'&&mutual&&heartDuelChoice==='kiss'&&heartDuelPartnerChoice==='kiss';
  setPairSceneState(confirmed?'mutual':kind==='slap'||heartDuelPartnerChoice==='slap'?'declined':'missed');
  $('#heartDuel')?.classList.add('finalHold');
  // Keep the result on the actual player photos after the center scene closes.
  if(heartDuelChoice==='slap')applyPersistentDuelMark(heartDuelSources[1],'slap');
  if(heartDuelPartnerChoice==='slap')applyPersistentDuelMark(heartDuelSources[0],'slap');
  // Keep mixed kiss/refusal outcomes on screen long enough to read both directions,
  // just like the mutual-kiss result instead of collapsing as soon as both answer.
  heartDuelResultTimer=setTimeout(closeHeartDuel,3000);
}
function finishHeartDuelAtTimeout(){
  if(!heartDuelOpen)return;
  // Important: if the local player did nothing but the partner kissed/refused,
  // do NOT close at 0. Show that one-sided result for ~3.4 seconds first.
  if(!heartDuelChoice&&heartDuelPartnerChoice){
    heartDuelResultShown=true;
    clearInterval(heartDuelTimer);heartDuelTimer=null;
    clearTimeout(demoAutoTimer);demoAutoTimer=null;clearTimeout(demoPartnerTimer);demoPartnerTimer=null;
    const duel=$('#heartDuel');duel.classList.add('finalHold');
      setPairSceneState(heartDuelPartnerChoice==='slap'?'declined':'missed');
    if(heartDuelPartnerChoice==='slap')applyPersistentDuelMark(heartDuelSources[0],'slap');
    const mePhoto=$('#heartDuelMePhoto');
    if(heartDuelPartnerChoice==='kiss'&&mePhoto){mePhoto.classList.remove('kissHit');void mePhoto.offsetWidth;mePhoto.classList.add('kissHit')}
    heartDuelResultTimer=setTimeout(closeHeartDuel,3000);
    return;
  }
  if(!heartDuelChoice){closeHeartDuel();return}
  showHeartDuelResult(heartDuelChoice,{mutual:heartDuelChoice==='kiss'&&heartDuelPartnerChoice==='kiss'});
}
function openHeartDuel(meEl,targetEl,{automatic=false}={}){
  if(heartDuelOpen||!meEl||!targetEl||meEl===targetEl)return;
  const meGender=meEl.dataset.gender,targetGender=targetEl.dataset.gender;
  if(!['male','female'].includes(meGender)||!['male','female'].includes(targetGender)||meGender===targetGender)return;
  // The local player chooses even when an NPC's spin lands on them.
  if(targetEl.dataset.playerId===playerId)[meEl,targetEl]=[targetEl,meEl];
  const me=playerSnapshot(meEl),target=playerSnapshot(targetEl);if(!me||!target)return;
  heartDuelLocalParticipant=meEl.dataset.playerId===playerId||targetEl.dataset.playerId===playerId;
  heartDuelOpen=true;heartDuelChoice=null;heartDuelPartnerChoice=null;heartDuelResultShown=false;heartDuelSources=[meEl,targetEl];
  const duel=$('#heartDuel');duel.dataset.sourceIds=heartDuelSources.map(el=>el.dataset.playerId).join(',');duel.dataset.mode=heartDuelLocalParticipant?'participant':'spectator';duel.classList.remove('finalHold');delete duel.dataset.meChoice;delete duel.dataset.partnerChoice;rehideHeartDuelSources();
  $('#heartDuelMePhoto').style.backgroundImage=me.photo?`url("${me.photo}")`:'none';
  $('#heartDuelTargetPhoto').style.backgroundImage=target.photo?`url("${target.photo}")`:'none';
  // The center portraits are the same players, so carry every attached visual with them:
  // hats/drinks/gifts, kiss stacks, dirty-photo gifts and earlier slap handprints.
  mirrorPlayerVisualsToPair(meEl,$('#heartDuelMePhoto'));
  mirrorPlayerVisualsToPair(targetEl,$('#heartDuelTargetPhoto'));
  $('#heartDuelMePhoto').setAttribute('aria-label',me.name);$('#heartDuelTargetPhoto').setAttribute('aria-label',target.name);
  $('#heartDuelMeName').textContent=me.name;$('#heartDuelTargetName').textContent=target.name;
  clearDuelPreview();let sec=9;$('#pairSceneSeconds').textContent='9';
  duel.classList.remove('hidden');document.body.classList.add('heartDuelActive');
  clearInterval(heartDuelTimer);clearTimeout(demoAutoTimer);clearTimeout(demoPartnerTimer);
  heartDuelTimer=setInterval(()=>{sec--;$('#pairSceneSeconds').textContent=String(Math.max(sec,0));if(sec<=0){clearInterval(heartDuelTimer);heartDuelTimer=null;finishHeartDuelAtTimeout()}},1000);
  if(isDemoMode()){
    if(!heartDuelLocalParticipant)demoAutoTimer=setTimeout(()=>{if(!heartDuelOpen)return;receiveHeartDuelPartnerChoice('kiss');chooseHeartDuel('kiss')},1300);
    else demoPartnerTimer=setTimeout(()=>receiveHeartDuelPartnerChoice(Math.random()<.72?'kiss':'slap'),1800);
  }
}
function chooseHeartDuel(kind){
  if(!heartDuelOpen||heartDuelChoice||heartDuelResultShown||!['kiss','slap'].includes(kind))return;
  heartDuelChoice=kind;showDuelPreview(kind);syncPairDecisionVisuals();
  if(kind==='slap')applyPersistentDuelMark(heartDuelSources[1],'slap');
  // As soon as both players have chosen, stop the 9-second countdown and show the result for 3 seconds.
  if(heartDuelPartnerChoice)showHeartDuelResult(kind,{mutual:kind==='kiss'&&heartDuelPartnerChoice==='kiss'});
}
function receiveHeartDuelPartnerChoice(kind){
  if(!heartDuelOpen||heartDuelResultShown||!['kiss','slap'].includes(kind))return;
  heartDuelPartnerChoice=kind;syncPairDecisionVisuals();
  if(kind==='slap')applyPersistentDuelMark(heartDuelSources[0],'slap');
  // As soon as both players have chosen, stop the 9-second countdown and show the result for 3 seconds.
  if(heartDuelChoice)showHeartDuelResult(heartDuelChoice,{mutual:heartDuelChoice==='kiss'&&kind==='kiss'});
}
window.receiveHeartDuelPartnerChoice=receiveHeartDuelPartnerChoice;
$('#pairSceneKiss').onclick=()=>{if(heartDuelLocalParticipant)chooseHeartDuel('kiss')};
$('#pairSceneRefuse').onclick=()=>{if(heartDuelLocalParticipant)chooseHeartDuel('slap')};


// App language selector
const APP_I18N={
ru:{settings:'Настройки',sounds:'Звуки',music:'Музыка',invite:'Пригласить друзей',profileSettings:'Настройки профиля',language:'Язык',logout:'Выйти',deleteAccount:'Удалить аккаунт',deleteConfirm:'Удалить аккаунт Delbirim? Профиль, сердечки, VIP, друзья и локальные данные этого аккаунта будут удалены. Это действие нельзя отменить.',deleteDone:'Аккаунт удалён',profile:'Профиль',mainPhoto:'Главное фото',addPhoto:'+ Фото',name:'Имя',yourName:'Ваше имя',birth:'Дата рождения',gender:'Пол',male:'Мужской',female:'Женский',saveProfile:'Сохранить профиль',spin:'Крутить',waiting:'Ждём следующего хода',write:'Написать сообщение',gifts:'Подарки',send:'Отправить',chooseGift:'Выберите подарок',topup:'Демо-баланс',popular:'Популярные',friends:'суйуу',fun:'Приколы',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Выбери тему фона',customBg:'Свой фон',romantic:'Романтичные места',soundOn:'Звуки включены',soundOff:'Звуки выключены',musicOn:'Музыка включена',musicOff:'Музыка выключена',saved:'Профиль сохранён',copied:'Ссылка скопирована',exitDemo:'Выход — демо',table:'Стол'},
ky:{settings:'Жөндөөлөр',sounds:'Үндөр',music:'Музыка',invite:'Досторду чакыруу',profileSettings:'Профиль жөндөөлөрү',language:'Тил',logout:'Чыгуу',deleteAccount:'Аккаунтту өчүрүү',deleteConfirm:'Delbirim аккаунтун өчүрөсүзбү? Профиль, жүрөктөр, VIP, достор жана бул аккаунттын жергиликтүү маалыматтары өчүрүлөт. Бул аракетти артка кайтарууга болбойт.',deleteDone:'Аккаунт өчүрүлдү',profile:'Профиль',mainPhoto:'Негизги сүрөт',addPhoto:'+ Сүрөт',name:'Аты',yourName:'Атыңыз',birth:'Туулган күнү',gender:'Жынысы',male:'Эркек',female:'Аял',saveProfile:'Профилди сактоо',spin:'Айлантуу',waiting:'Кийинки жүрүштү күтөбүз',write:'Билдирүү жазуу',gifts:'Белектер',send:'Жөнөтүү',chooseGift:'Белек тандаңыз',topup:'Баланс толтуруу',popular:'Популярдуу',friends:'суйуу',fun:'Тамаша',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Фон темасын тандаңыз',customBg:'Өз фонуңуз',romantic:'Романтикалык жерлер',soundOn:'Үндөр күйгүзүлдү',soundOff:'Үндөр өчүрүлдү',musicOn:'Музыка күйгүзүлдү',musicOff:'Музыка өчүрүлдү',saved:'Профиль сакталды',copied:'Шилтеме көчүрүлдү',exitDemo:'Чыгуу — демо',table:'Стол'},
uz:{settings:'Sozlamalar',sounds:'Ovozlar',music:'Musiqa',invite:'Do‘stlarni taklif qilish',profileSettings:'Profil sozlamalari',language:'Til',logout:'Chiqish',deleteAccount:'Hisobni o‘chirish',deleteConfirm:'Delbirim hisobini o‘chirasizmi? Profil, yuraklar, VIP, do‘stlar va ushbu hisobning mahalliy ma’lumotlari o‘chiriladi. Bu amalni bekor qilib bo‘lmaydi.',deleteDone:'Hisob o‘chirildi',profile:'Profil',mainPhoto:'Asosiy surat',addPhoto:'+ Surat',name:'Ism',yourName:'Ismingiz',birth:'Tug‘ilgan sana',gender:'Jins',male:'Erkak',female:'Ayol',saveProfile:'Profilni saqlash',spin:'Aylantirish',waiting:'Keyingi yurishni kutamiz',write:'Xabar yozish',gifts:'Sovg‘alar',send:'Yuborish',chooseGift:'Sovg‘ani tanlang',topup:'Hisobni to‘ldirish',popular:'Mashhur',friends:'суйуу',fun:'Hazillar',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Fon mavzusini tanlang',customBg:'O‘z foningiz',romantic:'Romantik joylar',soundOn:'Ovozlar yoqildi',soundOff:'Ovozlar o‘chirildi',musicOn:'Musiqa yoqildi',musicOff:'Musiqa o‘chirildi',saved:'Profil saqlandi',copied:'Havola nusxalandi',exitDemo:'Chiqish — demo',table:'Stol'},
kk:{settings:'Баптаулар',sounds:'Дыбыстар',music:'Музыка',invite:'Достарды шақыру',profileSettings:'Профиль баптаулары',language:'Тіл',logout:'Шығу',deleteAccount:'Аккаунтты жою',deleteConfirm:'Delbirim аккаунтын жоясыз ба? Профиль, жүректер, VIP, достар және осы аккаунттың жергілікті деректері жойылады. Бұл әрекетті қайтару мүмкін емес.',deleteDone:'Аккаунт жойылды',profile:'Профиль',mainPhoto:'Негізгі фото',addPhoto:'+ Фото',name:'Аты',yourName:'Атыңыз',birth:'Туған күні',gender:'Жынысы',male:'Ер',female:'Әйел',saveProfile:'Профильді сақтау',spin:'Айналдыру',waiting:'Келесі жүрісті күтеміз',write:'Хабарлама жазу',gifts:'Сыйлықтар',send:'Жіберу',chooseGift:'Сыйлық таңдаңыз',topup:'Шотты толтыру',popular:'Танымал',friends:'суйуу',fun:'Әзілдер',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Фон тақырыбын таңдаңыз',customBg:'Өз фоныңыз',romantic:'Романтикалық орындар',soundOn:'Дыбыстар қосылды',soundOff:'Дыбыстар өшірілді',musicOn:'Музыка қосылды',musicOff:'Музыка өшірілді',saved:'Профиль сақталды',copied:'Сілтеме көшірілді',exitDemo:'Шығу — демо',table:'Үстел'},
tr:{settings:'Ayarlar',sounds:'Sesler',music:'Müzik',invite:'Arkadaşlarını davet et',profileSettings:'Profil ayarları',language:'Dil',logout:'Çıkış',deleteAccount:'Hesabı sil',deleteConfirm:'Delbirim hesabı silinsin mi? Profil, kalpler, VIP, arkadaşlar ve bu hesaba ait yerel veriler silinecek. Bu işlem geri alınamaz.',deleteDone:'Hesap silindi',profile:'Profil',mainPhoto:'Ana fotoğraf',addPhoto:'+ Fotoğraf',name:'Ad',yourName:'Adınız',birth:'Doğum tarihi',gender:'Cinsiyet',male:'Erkek',female:'Kadın',saveProfile:'Profili kaydet',spin:'Çevir',waiting:'Sıradaki hamle bekleniyor',write:'Mesaj yaz',gifts:'Hediyeler',send:'Gönder',chooseGift:'Hediye seçin',topup:'Bakiye yükle',popular:'Popüler',friends:'суйуу',fun:'Eğlence',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Arka plan temasını seç',customBg:'Kendi arka planın',romantic:'Romantik yerler',soundOn:'Sesler açık',soundOff:'Sesler kapalı',musicOn:'Müzik açık',musicOff:'Müzik kapalı',saved:'Profil kaydedildi',copied:'Bağlantı kopyalandı',exitDemo:'Çıkış — demo',table:'Masa'},
en:{settings:'Settings',sounds:'Sounds',music:'Music',invite:'Invite friends',profileSettings:'Profile settings',language:'Language',logout:'Log out',deleteAccount:'Delete account',deleteConfirm:'Delete your Delbirim account? Your profile, hearts, VIP, friends and this account’s local data will be deleted. This cannot be undone.',deleteDone:'Account deleted',profile:'Profile',mainPhoto:'Main photo',addPhoto:'+ Photo',name:'Name',yourName:'Your name',birth:'Date of birth',gender:'Gender',male:'Male',female:'Female',saveProfile:'Save profile',spin:'Spin',waiting:'Waiting for the next turn',write:'Write a message',gifts:'Gifts',send:'Send',chooseGift:'Choose a gift',topup:'Top up balance',popular:'Popular',friends:'суйуу',fun:'Fun',style:'vibe',food:'aitysh duinosu',vip:'насаат',epic:'молодеж kg',tiktok:'TikTok',chooseTheme:'Choose background theme',customBg:'Custom background',romantic:'Romantic places',soundOn:'Sounds on',soundOff:'Sounds off',musicOn:'Music on',musicOff:'Music off',saved:'Profile saved',copied:'Link copied',exitDemo:'Log out — demo',table:'Table'}
};
let appLang=localStorage.getItem('kissmeet.lang')||'ru';
const L=()=>APP_I18N[appLang]||APP_I18N.ru;
const setTxt=(sel,val)=>{const el=document.querySelector(sel);if(el&&val!=null)el.textContent=val};
const applyAppLanguage=()=>{const d=L();document.documentElement.lang=appLang;
setTxt('.settingsMenuView .settingsHead b',d.settings);
const rows=[...document.querySelectorAll('#settingsMenuView .settingsRow')];if(rows[0])rows[0].querySelector('span:nth-child(2)').textContent=d.sounds;if(rows[1])rows[1].querySelector('span:nth-child(2)').textContent=d.music;
setTxt('#inviteFriendsBtn span:nth-child(2)',d.invite);setTxt('#profileSettingsBtn span:nth-child(2)',d.profileSettings);setTxt('#settingsLanguageLabel',d.language);setTxt('#logoutBtn span:nth-child(2)',d.logout);setTxt('#deleteAccountBtn span:nth-child(2)',d.deleteAccount);
setTxt('#settingsProfileView .settingsHead b',d.profile);setTxt('#profilePhotoMain span',d.mainPhoto);document.querySelectorAll('.profilePhotoExtra span').forEach(x=>x.textContent=d.addPhoto);
const labels=[...document.querySelectorAll('.profileFields label')];if(labels[0]){labels[0].childNodes[0].nodeValue=d.name;labels[0].querySelector('input').placeholder=d.yourName}if(labels[1])labels[1].childNodes[0].nodeValue=d.birth;
setTxt('.profileGender>span',d.gender);const gb=document.querySelectorAll('[data-gender]');if(gb[0])gb[0].textContent=d.male;if(gb[1])gb[1].textContent=d.female;setTxt('#profileSettingsSave',d.saveProfile);
setTxt('#languageViewTitle',d.language);setTxt('#spin',d.spin);if($('#turnText')&&['Ждём следующего хода','Кийинки жүрүштү күтөбүз','Keyingi yurishni kutamiz','Келесі жүрісті күтеміз','Sıradaki hamle bekleniyor','Waiting for the next turn'].includes($('#turnText').textContent.trim()))$('#turnText').textContent=d.waiting;
if($('#msg'))$('#msg').placeholder=d.write;const giftBalanceBtn=$('#giftTopup');if(giftBalanceBtn){giftBalanceBtn.title=d.topup;giftBalanceBtn.setAttribute('aria-label',d.topup)};if(!selectedGiftId&&giftCategory!=='emotion')setTxt('#giftSelected',d.chooseGift);
const tabs=document.querySelectorAll('#giftTabs button');const tv=[`🎁 Подарки`,`🔥 ${d.popular}`,`💕 ${d.friends}`,`😂 ${d.fun}`,`😎 ${d.style}`,`🎵 ${d.tiktok}`,`👑 ${d.vip}`,`✨ ${d.epic}`,`🍔 ${d.food}`];tabs.forEach((b,i)=>{if(tv[i])b.textContent=tv[i]});
setTxt('#themeTitle',d.chooseTheme);const ctb=document.querySelector('#customThemeBtn b');if(ctb)ctb.textContent=(appLang==='ky'?'Өз фонуңуз':d.customBg);const cvtb=document.querySelector('#customVideoThemeBtn b');if(cvtb)cvtb.textContent=(appLang==='ky'?'Видео фон':appLang==='en'?'Video background':'Видео фон');const tb=document.querySelector('.neonTableText b');if(tb)tb.textContent=d.table;
document.querySelectorAll('[data-app-lang]').forEach(b=>b.classList.toggle('active',b.dataset.appLang===appLang));
};

$('#settingsLanguageBack').onclick=()=>{$('#settingsLanguageView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')};
$('#settingsLanguageClose').onclick=closeSettings;
document.querySelectorAll('[data-app-lang]').forEach(btn=>btn.onclick=()=>{appLang=btn.dataset.appLang;localStorage.setItem('kissmeet.lang',appLang);applyAppLanguage();setTimeout(()=>{$('#settingsLanguageView').classList.add('hidden');$('#settingsMenuView').classList.remove('hidden')},140)});
applyAppLanguage();
refreshFriendInbox();setInterval(()=>{if(!document.hidden)refreshFriendInbox()},15000);

// Trophy ranking modal — four categories, without the smiley rating tab.
const RANKING_DATA={
 kiss:{title:'Самые зацелованные',icon:'💋',values:[777724,30988,29091,28827,27256,26314,25848,24970,24789,24357],names:['Nik','Ricky','Ceccelia','Fiana','Koshechka','Abid','Richard','Zloya','Stiyl','Namid']},
 music:{title:'Лучшие диджеи',icon:'🎵',values:[18342,14221,12688,10526,9552,9411,8618,7614,7275,6870],names:['Fiana','Malka','Шальной','Sylvia','Zlata','Ирина','Ahmet','Sûltan','MUSIC','Maxsumius']},
 heart:{title:'Самые дорогие',icon:'♥',values:[1673,1425,1387,1376,1321,1241,1187,1165,1157,1098],names:['Lydia','Bonnie','Amcel','Indrit','Slavisha','Andrea','ALKIMENT','Николаевич','Ekrem','Georgi']},
 influence:{title:'Самые влиятельные',icon:'💕',values:[81854,55836,44249,41814,39731,37202,36157,32529,31253,31219],names:['BAŞKAN','Orhan','Akhmatova','Könül','Elnarə','Malka','Ara','ALI','Mina','Elifsu']}
};
let rankingType='kiss',rankingPeriod='month';
const rankPeriodText={all:'за все время',month:'за месяц',week:'за неделю',day:'за день'};
function openTopRankProfile(index){
  const d=RANKING_DATA[rankingType],i=Math.max(0,Math.min(9,Number(index)||0)),rank=i+1;
  const factor={all:1.75,month:1,week:.38,day:.08}[rankingPeriod]||1;
  const score=Math.max(1,Math.round(d.values[i]*factor));
  const player={
    id:`rank-${rankingType}-${i}`,
    name:d.names[i],
    photo:photoFor('rank'+i,i+4),
    badge:score,
    real:false,
    topRank:rank,
    topLabel:'ТОП 10',
    rankIcon:d.icon,
    rankScore:score,
    rankTitle:d.title
  };
  closeRanking();
  setTimeout(()=>openPlayerProfile(player,i),90);
}
const renderRanking=()=>{const d=RANKING_DATA[rankingType];$('#rankingTitle').textContent=d.title;$('#rankingPeriodLabel').textContent=rankPeriodText[rankingPeriod];const factor={all:1.75,month:1,week:.38,day:.08}[rankingPeriod]||1;const medals=['🥇','🥈','🥉'];$('#rankingList').innerHTML=d.names.map((name,i)=>{const n=Math.max(1,Math.round(d.values[i]*factor));return `<button class="rankingRow rank-${i+1}" type="button" data-rank-user="${i}" aria-label="${name}, ТОП ${i+1}"><div class="rankingPosition">${i<3?medals[i]:i+1}</div><div class="rankingAvatar"><img src="${photoFor('rank'+i,i+4)}" alt=""><i></i><span class="rankingTopChip">TOP ${i+1}</span></div><div class="rankingName"><b>${name}</b><small>№ ${i+1} в рейтинге</small></div><div class="rankingScore"><span>${d.icon}</span><b>${n.toLocaleString('ru-RU')}</b></div></button>`}).join('');const myName=localStorage.getItem('kissmeet.profile.name')||'Player 1';const myPhoto=localStorage.getItem('kissmeet.profile.main')||photoFor(playerId,1);const myScore=rankingType==='heart'?1:rankingType==='influence'?0:rankingType==='music'?0:27;const myPlace=rankingType==='kiss'?'15 372':'1 061 201';$('#rankingMe').innerHTML=`<div class="rankingPosition me">★</div><div class="rankingAvatar"><img src="${myPhoto}" alt=""><i></i></div><div class="rankingName"><b>${myName}</b><small>Ваше место: ${myPlace}</small></div><div class="rankingScore"><span>${d.icon}</span><b>${myScore.toLocaleString('ru-RU')}</b></div>`;document.querySelectorAll('[data-rank-type]').forEach(b=>b.classList.toggle('active',b.dataset.rankType===rankingType));document.querySelectorAll('[data-rank-period]').forEach(b=>b.classList.toggle('active',b.dataset.rankPeriod===rankingPeriod));document.querySelectorAll('[data-rank-user]').forEach(row=>row.onclick=()=>openTopRankProfile(+row.dataset.rankUser));};
const openRanking=()=>{$('#rankingOverlay').classList.remove('hidden');renderRanking()};const closeRanking=()=>{$('#rankingOverlay').classList.add('hidden');$('#rankingPeriodMenu').classList.add('hidden')};
document.querySelector('.trophyPhotoBtn').onclick=openRanking;$('#rankingClose').onclick=closeRanking;$('#rankingBackdrop').onclick=closeRanking;document.querySelectorAll('[data-rank-type]').forEach(b=>b.onclick=()=>{rankingType=b.dataset.rankType;renderRanking()});$('#rankingPeriodBtn').onclick=()=>$('#rankingPeriodMenu').classList.toggle('hidden');document.querySelectorAll('[data-rank-period]').forEach(b=>b.onclick=()=>{rankingPeriod=b.dataset.rankPeriod;$('#rankingPeriodMenu').classList.add('hidden');renderRanking()});

// Table switcher: recent tables, create table and random table.
(function(){
  const btn=document.querySelector('#tableButton');
  if(!btn||document.querySelector('#tableSwitcher'))return;
  const q=new URLSearchParams(location.search);
  const current=(q.get('room')||'main').replace(/[^A-Za-z0-9_-]/g,'').slice(0,64)||'main';
  function numberOf(id){
    if(id==='main')return '165';
    const m=String(id).match(/(\d{1,4})$/);if(m)return m[1];
    let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;
    return String(100+h%900);
  }
  const currentNumber=numberOf(current);
  const numberNode=btn.querySelector('.neonTableText strong');
  if(numberNode)numberNode.textContent=currentNumber;
  btn.title='Стол '+currentNumber;btn.setAttribute('aria-label','Стол '+currentNumber);
  const modal=document.createElement('div');
  modal.id='tableSwitcher';modal.className='tableSwitcher hidden';
  modal.innerHTML='<section class="tableSwitcherCard" role="dialog" aria-modal="true" aria-label="Выбор стола"><button class="tableRandomBtn tableSwitcherRandomPrimary" type="button"><span class="tableRandomDice" aria-hidden="true">🎲</span><span class="tableRandomCopy"><b>Случайный стол</b><small>Подобрать комнату для игры</small></span><span class="tableRandomArrow" aria-hidden="true">↗</span></button><button class="tableSwitcherClose" type="button" aria-label="Закрыть">×</button><button class="tableCreateBtn" type="button">＋ Создать стол</button><div class="tableSwitcherSub vipTablesTitle">👑 VIP Столы</div><div class="vipTableList"></div><div class="tableSwitcherSub tableFriendsTitle">Друзья и приятели</div><div class="tableFriendsList"></div><div class="tableSwitcherSub">Твои последние столы</div><div class="tableRecentList"></div></section>';
  document.body.appendChild(modal);
  function recent(){try{return JSON.parse(localStorage.getItem('kissmeet.recentTables')||'[]').filter(x=>x&&x.room)}catch(e){return[]}}
  function remember(id){
    const rows=recent().filter(x=>x.room!==id),cfg=readTableSettings(id);
    const owner=cfg&&cfg.owner===playerId;
    rows.unshift({room:id,number:numberOf(id),maxPlayers:cfg?.maxPlayers||null,owner:!!owner,ownerName:owner?(localStorage.getItem('kissmeet.profile.name')||'Player 1'):null,ownerPhoto:owner?(localStorage.getItem('kissmeet.profile.main')||DEMO[7]?.photo||DEMO[0]?.photo||''):null});
    localStorage.setItem('kissmeet.recentTables',JSON.stringify(rows.slice(0,4)));
  }
  function go(id){remember(id);const u=new URL(location.href);if(id==='main')u.searchParams.delete('room');else u.searchParams.set('room',id);location.href=u.toString()}
  const VIP_TABLES=[
    {id:'vip-bishkek',tone:'gold',cover:'/assets/vip-spongebob-bishkek.webp',title:'VIP Бишкек',count:'8/10',status:'🎙️ 4 человека говорят',sub:'🇰🇬 Общение · знакомства · музыка',players:[0,1,2,3,4,5,6,7],speaker:[0,3,5,7]},
    {id:'vip-dating',tone:'rose',cover:'/assets/vip-spongebob-dating.webp',title:'VIP Знакомства',count:'6/10',status:'❤️ Сейчас идёт раунд',sub:'💞 Пара выбрана · идёт выбор',players:[2,4,6,8,9,10],speaker:[4]},
    {id:'vip-usa-kg',tone:'ocean',cover:'/assets/vip-spongebob-usa.webp',title:'VIP USA / KG',count:'9/10',status:'🌎 Кыргыздар в Америке',sub:'🎙️ Нью-Йорк · Чикаго · LA',players:[1,3,5,6,7,8,9,10,0],speaker:[1,6,8]},
    {id:'vip-rus-kg',tone:'ruby',cover:'/assets/vip-spongebob-rus.webp',title:'VIP RUS / KG',count:'7/10',status:'🇷🇺🇰🇬 Россия × Кыргызстан',sub:'💬 Общение · знакомства',players:[0,2,3,5,7,9,10],speaker:[2,7]},
    {id:'vip-bishkek-kg',tone:'emerald',cover:'/assets/vip-spongebob-bishkek-kg.webp',title:'VIP Bishkek KG',count:'8/10',status:'📍 Бишкек · Кыргызский стол',sub:'🎙️ Кыргызча · оюн · таанышуу',players:[1,2,4,5,6,7,8,10],speaker:[2,5,7]}
  ];
  function renderVipTables(){
    const box=modal.querySelector('.vipTableList');if(!box)return;
    box.innerHTML=VIP_TABLES.map(t=>{const avatars=t.players.slice(0,6).map(i=>`<span class="vipTinyAvatar ${t.speaker.includes(i)?'speaking':''}" style="background-image:url(${DEMO[i%DEMO.length].photo})"><i>${t.speaker.includes(i)?'🎙️':''}</i></span>`).join('');return `<button class="vipTableItem vipTone-${t.tone}" type="button" data-vip-room="${t.id}"><span class="vipGlow"></span><span class="vipIconOrb vipPhotoOrb" style="background-image:url(${t.cover})" aria-hidden="true"></span><span class="vipTableMain"><span class="vipTitleLine"><b><span class="vipCrown">♛</span>${t.title}</b><strong>${t.count}</strong></span><small>${t.status}</small><em>${t.sub}</em><span class="vipAvatarStack">${avatars}</span></span><span class="vipEnter">›</span></button>`}).join('');
    box.querySelectorAll('[data-vip-room]').forEach(x=>x.addEventListener('click',()=>go(x.dataset.vipRoom)));
  }
  function renderFriends(){
    const box=modal.querySelector('.tableFriendsList');
    const demoFriends=(typeof DEMO!=='undefined'&&Array.isArray(DEMO)?DEMO.slice(0,3):[]);
    if(!demoFriends.length){box.innerHTML='<div class="tableSwitcherEmpty">Друзья появятся здесь</div>';return}
    box.innerHTML=demoFriends.map((f,i)=>'<button class="tableFriendItem" type="button" data-friend-room="friend-'+i+'"><span class="tableFriendPhoto" style="background-image:url('+String(f.photo||'')+')"></span><span class="tableFriendMain"><b>'+(f.name||('Друг '+(i+1)))+'</b><small>за столом #'+(30418+i*1379)+'</small></span><span class="tableFriendMeta">◉ '+(i+2)+'　◌ '+(i+1)+'</span></button>').join('');
    box.querySelectorAll('[data-friend-room]').forEach(x=>x.addEventListener('click',()=>go(x.dataset.friendRoom)));
  }
  function renderRecent(){
    const box=modal.querySelector('.tableRecentList');const rows=recent();
    if(!rows.length){box.innerHTML='<div class="tableSwitcherEmpty">Последних столов пока нет</div>';return}
    box.innerHTML=rows.map((r,i)=>{const isCreated=!!r.maxPlayers;const icon=r.owner&&r.ownerPhoto?'<span class="tableRecentIcon ownerPhoto" style="background-image:url('+String(r.ownerPhoto).replace(/[\"<>]/g,'')+')"></span>':(isCreated?'':'<span class="tableRecentIcon">'+(i%2?'♜':'♟')+'</span>');const sub=r.owner?'<small class="recentOwnerLabel">Хозяин · '+(r.maxPlayers||6)+' мест</small>':(isCreated?'':'');const cls='tableRecentItem '+(r.room===current?'active ':'')+(isCreated&&!r.owner?'noOwner ':'');return '<button class="'+cls.trim()+'" type="button" data-room="'+r.room+'">'+icon+'<span class="tableRecentMain"><b>#'+r.number+'</b>'+sub+'</span>'+(r.owner?'<span class="tableRecentMeta">◉ 1</span>':'')+'</button>'}).join('');
    box.querySelectorAll('[data-room]').forEach(x=>x.addEventListener('click',()=>go(x.dataset.room)));
  }
  function open(){remember(current);renderVipTables();renderFriends();renderRecent();modal.classList.remove('hidden');document.body.classList.add('modalOpen')}
  function close(){modal.classList.add('hidden');document.body.classList.remove('modalOpen')}
  const HOST_COST=20;
  const createModal=document.createElement('div');
  createModal.id='createTableModal';createModal.className='createTableModal hidden';
  createModal.innerHTML='<section class="createTableCard" role="dialog" aria-modal="true"><div class="createTableHead"><button class="createTableBack" type="button">‹</button><b>Создать стол</b><button class="createTableClose" type="button">×</button></div><label class="createTableField"><span>Номер стола</span><input id="newTableNumber" inputmode="numeric" pattern="[0-9]*" maxlength="5" placeholder="Например 165"></label><div class="createTableField"><span>Количество игроков</span><div class="playerCountPicker"><button type="button" class="playerCountMinus">−</button><strong id="newTablePlayers">6</strong><button type="button" class="playerCountPlus">+</button></div><small>От 2 до 11 игроков</small></div><button class="tableOwnerOption" type="button"><span class="ownerCrown">♛</span><span><b>Хозяин стола</b><small>Управление столом и место хозяина</small></span><strong>'+HOST_COST+' ♥</strong><i></i></button><div class="createTableBalance">Баланс: <b id="createTableHeartBalance">0</b> ♥</div><button class="createTableSubmit" type="button">Создать стол</button></section>';
  document.body.appendChild(createModal);
  let desiredPlayers=6,ownerEnabled=false;
  const updateCreateUi=()=>{createModal.querySelector('#newTablePlayers').textContent=String(desiredPlayers);createModal.querySelector('.tableOwnerOption').classList.toggle('active',ownerEnabled);createModal.querySelector('#createTableHeartBalance').textContent=String(getHeartBalance())};
  function showCreateTable(){modal.classList.add('hidden');desiredPlayers=6;ownerEnabled=false;const input=createModal.querySelector('#newTableNumber');input.value=String(100+Math.floor(Math.random()*99900));updateCreateUi();createModal.classList.remove('hidden');setTimeout(()=>input.focus(),80)}
  function hideCreateTable(backToTables=true){createModal.classList.add('hidden');if(backToTables){renderVipTables();renderFriends();renderRecent();modal.classList.remove('hidden')}else document.body.classList.remove('modalOpen')}
  function createTable(){showCreateTable()}
  function submitCreateTable(){const input=createModal.querySelector('#newTableNumber');const n=String(input.value||'').replace(/\D/g,'').slice(0,5);if(!n){toast('Выбери номер стола');input.focus();return}if(ownerEnabled&&getHeartBalance()<HOST_COST){toast('Недостаточно сердечек');return}if(ownerEnabled)setHeartBalance(getHeartBalance()-HOST_COST);const id='table-'+n;localStorage.setItem('kissmeet.table.settings.'+id,JSON.stringify({number:n,maxPlayers:desiredPlayers,owner:ownerEnabled?playerId:null,ownerPaid:ownerEnabled?HOST_COST:0}));go(id)}
  function randomTable(){let n=100+Math.floor(Math.random()*900);if(String(n)===currentNumber)n=n===999?100:n+1;go('table-'+n)}
  btn.addEventListener('click',open);
  modal.addEventListener('click',e=>{if(e.target===modal)close()});
  modal.querySelector('.tableSwitcherClose').addEventListener('click',close);
  modal.querySelector('.tableCreateBtn').addEventListener('click',createTable);
  modal.querySelector('.tableSwitcherRandomPrimary').addEventListener('click',randomTable);
  createModal.querySelector('.createTableBack').addEventListener('click',()=>hideCreateTable(true));
  createModal.querySelector('.createTableClose').addEventListener('click',()=>hideCreateTable(false));
  createModal.querySelector('.playerCountMinus').addEventListener('click',()=>{desiredPlayers=Math.max(2,desiredPlayers-1);updateCreateUi()});
  createModal.querySelector('.playerCountPlus').addEventListener('click',()=>{desiredPlayers=Math.min(11,desiredPlayers+1);updateCreateUi()});
  createModal.querySelector('.tableOwnerOption').addEventListener('click',()=>{ownerEnabled=!ownerEnabled;updateCreateUi()});
  createModal.querySelector('.createTableSubmit').addEventListener('click',submitCreateTable);
  document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(!createModal.classList.contains('hidden'))hideCreateTable(true);else if(!modal.classList.contains('hidden'))close()});
  remember(current);
})();

initGiftEmotion();initGiftQuickActions();

// First-time Delbirim profile setup. This is temporary browser storage until
// Telegram + Supabase account persistence is connected.
function showDelbirimRegistration(wrap,tgUser,onDone){
  const text={
    ru:{title:'Создай профиль',lead:'Эти данные будут видеть игроки за столом.',photo:'Добавить фото',name:'Имя',birth:'Дата рождения',gender:'Пол',male:'Мужчина',female:'Женщина',country:'Страна',city:'Город',start:'Начать игру',age:'В Delbirim могут играть только пользователи 18+.',nameErr:'Напиши имя',birthErr:'Нужно подтвердить возраст 18+',genderErr:'Выбери пол'},
    ky:{title:'Профиль түзүңүз',lead:'Бул маалыматты столдогу оюнчулар көрүшөт.',photo:'Сүрөт кошуу',name:'Атыңыз',birth:'Туулган күнү',gender:'Жынысы',male:'Эркек',female:'Аял',country:'Өлкө',city:'Шаар',start:'Оюнду баштоо',age:'Delbirim 18 жаштан жогору колдонуучулар үчүн.',nameErr:'Атыңызды жазыңыз',birthErr:'18 жаштан жогору экениңизди ырастоо керек',genderErr:'Жынысыңызды тандаңыз'},
    en:{title:'Create your profile',lead:'Players at the table will see this information.',photo:'Add photo',name:'Name',birth:'Date of birth',gender:'Gender',male:'Man',female:'Woman',country:'Country',city:'City',start:'Start playing',age:'Delbirim is for users age 18+.',nameErr:'Enter your name',birthErr:'You must confirm you are 18+',genderErr:'Choose a gender'}
  };
  const d=text[lang]||text.ru;
  wrap.classList.add('registrationMode');
  const card=wrap.querySelector('.delbirimAuthCard');
  card.innerHTML=`<div class="delbirimRegHead"><div><div class="delbirimAuthWord">DELBIRIM</div><h1>${d.title}</h1><p>${d.lead}</p></div></div><div class="delbirimRegPhoto"><button id="delbirimRegPhotoBtn" type="button" aria-label="${d.photo}"><img id="delbirimRegPhotoImg" alt=""><span>📷</span></button><small>${d.photo}</small><input id="delbirimRegPhotoInput" type="file" accept="image/jpeg,image/png,image/webp" hidden></div><div class="delbirimRegForm"><label><span>${d.name}</span><input id="delbirimRegName" type="text" maxlength="24" autocomplete="name" placeholder="${d.name}"></label><label><span>${d.birth}</span><input id="delbirimRegBirth" type="date"></label><div class="delbirimRegField"><span>${d.gender}</span><div class="delbirimRegGender"><button type="button" data-reg-gender="male">♂ ${d.male}</button><button type="button" data-reg-gender="female">♀ ${d.female}</button></div></div><div class="delbirimRegSplit"><label><span>${d.country}</span><select id="delbirimRegCountry"><option value="KG">🇰🇬 Кыргызстан</option><option value="RU">🇷🇺 Россия</option><option value="US">🇺🇸 USA</option><option value="OTHER">🌍 ${lang==='ky'?'Башка':lang==='en'?'Other':'Другое'}</option></select></label><label><span>${d.city}</span><input id="delbirimRegCity" type="text" maxlength="40" placeholder="${d.city}"></label></div><div class="delbirimRegError" id="delbirimRegError" aria-live="polite"></div><button class="delbirimRegStart" id="delbirimRegStart" type="button">${d.start} <b>→</b></button><small class="delbirimRegAge">🔞 ${d.age}</small></div>`;

  const name=card.querySelector('#delbirimRegName');
  const birth=card.querySelector('#delbirimRegBirth');
  const country=card.querySelector('#delbirimRegCountry');
  const city=card.querySelector('#delbirimRegCity');
  const err=card.querySelector('#delbirimRegError');
  const photoImg=card.querySelector('#delbirimRegPhotoImg');
  const photoBtn=card.querySelector('#delbirimRegPhotoBtn');
  const photoInput=card.querySelector('#delbirimRegPhotoInput');
  let photoValue='';
  let gender=localStorage.getItem('kissmeet.profile.gender')||'';

  const tgName=[tgUser?.first_name,tgUser?.last_name].filter(Boolean).join(' ').trim();
  name.value=(localStorage.getItem('kissmeet.profile.name')||tgName||'').slice(0,24);
  birth.value=localStorage.getItem('kissmeet.profile.birth')||'';
  country.value=localStorage.getItem('kissmeet.profile.country')||'KG';
  city.value=localStorage.getItem('kissmeet.profile.city')||'';
  photoValue=localStorage.getItem('kissmeet.profile.main')||((typeof tgUser?.photo_url==='string'&&/^https:\/\//i.test(tgUser.photo_url))?tgUser.photo_url:'');
  if(photoValue){photoImg.src=photoValue;photoBtn.classList.add('hasPhoto')}
  const syncGender=()=>card.querySelectorAll('[data-reg-gender]').forEach(b=>b.classList.toggle('active',b.dataset.regGender===gender));
  syncGender();
  card.querySelectorAll('[data-reg-gender]').forEach(b=>b.addEventListener('click',()=>{gender=b.dataset.regGender||'';syncGender();err.textContent=''}));
  photoBtn.addEventListener('click',()=>photoInput.click());
  photoInput.addEventListener('change',e=>{const f=e.target.files?.[0];if(!f)return;if(f.size>8*1024*1024){err.textContent='Фото до 8 MB';e.target.value='';return}const r=new FileReader();r.onload=()=>{photoValue=String(r.result||'');photoImg.src=photoValue;photoBtn.classList.add('hasPhoto');err.textContent=''};r.readAsDataURL(f);e.target.value=''});

  const is18Plus=value=>{if(!value)return false;const [y,m,dv]=value.split('-').map(Number);if(!y||!m||!dv)return false;const now=new Date();let age=now.getFullYear()-y;const md=now.getMonth()+1-m;if(md<0||(md===0&&now.getDate()<dv))age--;return age>=18&&age<120};
  card.querySelector('#delbirimRegStart').addEventListener('click',()=>{
    const display=(name.value||'').trim().replace(/\s+/g,' ').slice(0,24);
    if(display.length<2){err.textContent=d.nameErr;name.focus();return}
    if(!is18Plus(birth.value)){err.textContent=d.birthErr;birth.focus();return}
    if(!gender){err.textContent=d.genderErr;return}
    localStorage.setItem('kissmeet.profile.name',display);
    localStorage.setItem('kissmeet.profile.birth',birth.value);
    localStorage.setItem('kissmeet.profile.gender',gender);
    localStorage.setItem('kissmeet.profile.country',country.value);
    localStorage.setItem('kissmeet.profile.city',(city.value||'').trim().slice(0,40));
    if(photoValue)localStorage.setItem('kissmeet.profile.main',photoValue);
    localStorage.setItem('kissmeet.onboarding.done','1');
    onDone();
  });
}

// DELBIRIM auth gate preview. Telegram initDataUnsafe is used only to personalize
// this screen. Real authentication/authorization will verify Telegram initData
// server-side before any account, balance, VIP or payment action is trusted.
function initDelbirimTelegramAuthGate(){
  if(document.querySelector('#delbirimAuth'))return;
  const copy={
    ru:{title:'Знакомься. Играй. Общайся.',lead:'Войди через Telegram — без паролей и лишней регистрации.',button:'Продолжить через Telegram',preview:'Предпросмотр в браузере',trust:'Delbirim не просит пароль Telegram. Настоящая проверка аккаунта будет выполняться на сервере Telegram.',age:'18+ · Продолжая, вы принимаете правила сообщества Delbirim.'},
    ky:{title:'Тааныш. Ойно. Сүйлөш.',lead:'Telegram аркылуу кир — сырсөзсүз жана ашыкча каттоосуз.',button:'Telegram аркылуу улантуу',preview:'Браузерде алдын ала көрүү',trust:'Delbirim Telegram сырсөзүңүздү сурабайт. Аккаунт серверде Telegram аркылуу текшерилет.',age:'18+ · Улантуу менен Delbirim коомчулук эрежелерине макул болосуз.'},
    en:{title:'Meet. Play. Connect.',lead:'Continue with Telegram — no passwords and no extra sign-up.',button:'Continue with Telegram',preview:'Preview in browser',trust:'Delbirim never asks for your Telegram password. Real account verification will happen securely on the server.',age:'18+ · By continuing you agree to Delbirim community rules.'}
  };
  const d=copy[lang]||copy.ru;
  const wrap=document.createElement('div');
  wrap.id='delbirimAuth';
  wrap.className='delbirimAuth';
  wrap.innerHTML=`<div class="delbirimAuthFx" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><section class="delbirimAuthCard" role="dialog" aria-modal="true" aria-labelledby="delbirimAuthTitle"><div class="delbirimAuthMark" aria-hidden="true"><span>♥</span><i>✦</i></div><div class="delbirimAuthWord">DELBIRIM</div><h1 id="delbirimAuthTitle">${d.title}</h1><p class="delbirimAuthLead">${d.lead}</p><div class="delbirimTelegramUser hidden" id="delbirimTelegramUser"><img id="delbirimTelegramAvatar" alt=""><div><b id="delbirimTelegramName">Telegram</b><small id="delbirimTelegramHandle"></small></div></div><button class="delbirimTelegramBtn" id="delbirimAuthContinue" type="button"><span class="delbirimTelegramIcon" aria-hidden="true">➤</span><span id="delbirimAuthContinueLabel">${d.button}</span></button><button class="delbirimAuthDemo hidden" id="delbirimAuthDemo" type="button">${d.preview}</button><div class="delbirimAuthTrust"><span aria-hidden="true">🔒</span><p>${d.trust}</p></div><small class="delbirimAuthAge">${d.age}</small></section>`;
  document.body.appendChild(wrap);
  document.body.classList.add('authGateOpen');

  let tg=null,tgUser=null,insideTelegram=false;
  try{
    tg=window.Telegram?.WebApp||null;
    tg?.ready?.();
    tg?.expand?.();
    tgUser=tg?.initDataUnsafe?.user||null;
    insideTelegram=Boolean(tg&&typeof tg.initData==='string'&&tg.initData.length>0&&tgUser?.id);
  }catch{}

  const userBox=wrap.querySelector('#delbirimTelegramUser');
  const avatar=wrap.querySelector('#delbirimTelegramAvatar');
  const name=wrap.querySelector('#delbirimTelegramName');
  const handle=wrap.querySelector('#delbirimTelegramHandle');
  const label=wrap.querySelector('#delbirimAuthContinueLabel');
  const primary=wrap.querySelector('#delbirimAuthContinue');
  const demo=wrap.querySelector('#delbirimAuthDemo');

  if(insideTelegram&&tgUser){
    const full=[tgUser.first_name,tgUser.last_name].filter(Boolean).join(' ').trim()||'Telegram';
    name.textContent=full;
    handle.textContent=tgUser.username?`@${tgUser.username}`:'Telegram аккаунт';
    if(typeof tgUser.photo_url==='string'&&/^https:\/\//i.test(tgUser.photo_url))avatar.src=tgUser.photo_url;
    else avatar.removeAttribute('src');
    userBox.classList.remove('hidden');
    label.textContent=`${d.button.replace(' через Telegram','').replace(' with Telegram','')} · ${String(tgUser.first_name||'Telegram').slice(0,18)}`;
  }else{
    demo.classList.remove('hidden');
  }

  const finishGate=()=>{
    wrap.classList.add('authLeaving');
    setTimeout(()=>{wrap.remove();document.body.classList.remove('authGateOpen')},300);
  };
  const continueFlow=()=>{
    // First visit: Telegram/browser preview -> profile registration -> game.
    // Later Supabase will become the source of truth instead of this local flag.
    if(localStorage.getItem('kissmeet.onboarding.done')==='1'){finishGate();return}
    showDelbirimRegistration(wrap,tgUser,finishGate);
  };
  primary.addEventListener('click',continueFlow);
  demo.addEventListener('click',continueFlow);
}
initDelbirimTelegramAuthGate();
