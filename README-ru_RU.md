<a name="readme-top"></a>

<div align="center">

<img height="160" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">

<h1 align="center">Lobe Theme</h1>

Современная тема для стабильной диффузии webui

Ранее известная как Kitchen theme

[English ](./README.md)· [简体中文](./README-zh_CN.md) · Russian · [Changelog](./CHANGELOG.md) · [Report Bug][issues-url] · [Request Feature][issues-url]

<!-- SHIELD GROUP -->

[![release][release-shield]][release-url]
[![releaseDate][release-date-shield]][release-date-url]
[![][license-shield]][fossa-license-url]
[![ciTest][ci-test-shield]][ci-test-url]
[![ciRelease][ci-release-shield]][ci-release-url] <br/>
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url]

</div>

![][cover]

> **Warning**\
> `Lobe Theme v3` is compatible with `SD WebUI v1.6` and is not backwards compatible. Versions below `< 1.6` should be moved to the branch [legacy-sd-webui-1.5](https://github.com/lobehub/sd-webui-lobe-theme/tree/legacy-sd-webui-1.5)

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [✨ Дополнения](#-дополнения)
- [📦 Установка](#-установка)
- [🤯 Использование](#-использование)
- [🖥 Поддерживаемые браузеры](#-поддерживаемые-браузеры)
- [⌨️ Локальная разработка](#️-локальная-разработка)
- [🤝 Содействие](#-содействие)
- [🔗 Ссылки](#-ссылки)

####

</details>

## ✨ Дополнения

- [x] 🌗 Поддержка светлой и темной темы, с возможностью быстрого переключения на панели навигации
- [x] 🌈 Поддержка кастомных пользовательских и нейтральных цветов с возможностью настройки логотипа
- [x] 🪄 Поддержка форматирования подсказки одним щелчком мыши с помощью простого редактора тегов
- [x] 🎛️ Высоконастраиваемая боковая панель, с боковой панелью быстрых настроек слева и боковой панелью моделей справа
- [x] 🖼️ Регулируемое соотношение холста, благодаря чему генерируемые изображения всегда отображаются сверху
- [x] 📱 Mobile-friendly, с частичной оптимизацией под мобильные экраны
- [x] 🌍 Поддержка i18n(Поддержка разных языков) и приветствуются [PR](https://github.com/lobehub/sd-webui-lobe-theme/tree/main/locales)
- [x] 📝 Подсветка синтаксиса в поле ввода промта
- [x] 📦 Поддержка [PWA](https://support.google.com/chrome/answer/9658361)

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Установка

#### Метод 1

Найдите `Lobe Theme` или `Kitchen Theme` в поисковике плагинов SD WebUI и установите их.

> **Note**\
> **Версия 2.0.0** была переименована в **Lobe Theme**.

#### Метод 2

В качестве расширения (рекомендуется) клонировать репозиторий в папку расширений:

```shell
git clone "https://github.com/lobehub/sd-webui-lobe-theme" extensions/lobe-theme
```

> **Important**\
> Минимальные требования gradio-3.41.2 & sd-webui 1.6

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Использование

![][feat-thememode]

#### Светлая и темная темы

> **Note**\
> В правом верхнем углу панели навигации можно быстро переключаться между светлой и темной темами.

Текущая тема поддерживает как светлые, так и темные темы. Если вы хотите принудительно включить темный режим, используйте аргумент `--theme=dark` для запуска WebUI. Например, под Windows ваш `webui-user.bat` должен содержать:

```shell
set COMMANDLINE_ARGS= --theme=dark
```

Кроме того, переключение можно осуществлять непосредственно через URL:

```shell
http://localhost:7860/?__theme=light
http://localhost:7860/?__theme=dark
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

![][feat-theme-modify]

#### Кастомизация темы

> **Note**\
> Щелкните на значке `⚙` в правом верхнем углу, чтобы открыть панель настроек. В настоящее время доступны следующие настройки:

- Тема
  - Основной цвет: в настоящее время предлагается 13 цветовых комбинаций тем.
  - Нейтральный цвет: в настоящее время предлагается 6 различных комбинаций оттенков серого.
  - Тип логотипа: `Lobe`, `Kitchen`, `Custom`
    - Пользовательский логотип: `Поддерживаются ссылки`, `base64`, и `emoji`. При вводе одного смайлика он будет автоматически заменен на 3D Fluent Emoji.
    - Пользовательский заголовок: Настраиваемое название сайта/темы.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

![][feat-highlight]

#### Подсветка синтаксиса подсказок

Автоматически подсвечивать промт в соответствии с правилами синтаксиса Stable Diffusion.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

![][feat-sidebar]

#### Настройка боковой панели

> **Note**\
> нажмите значок `⚙` в правом верхнем углу, чтобы открыть панель настроек. Текущие доступные настройки следующие:

- **Текстовое поле промта**
  - Режим отображения: `Фиксированная высота и скрол в поле ввода` | `Увеличение от вводимого текста`
- **Боковая панель**
  - По умолчанию развернуть: `true`
  - Режим отображения: `Фиксированный` | `Плавающий`
  - Ширина по умолчанию: `280`
- **Панель с дом. сетями**
  - Включено: `true`
  - По умолчанию развернуть: `true`
  - Режим отображения: `Фиксированный` | `Плавающий`
  - Ширина по умолчанию: `340`
  - Размер превью по умолчанию: `86`

<details>
<summary><kbd>Recommended System Settings</kbd></summary>

#### Доп. Сети

- Превью
- Ширина: 86
- высота: 128

<br/>

#### Быстрые настройки (изменяются в настройках SD)

```txt
sd_model_checkpoint, sd_vae, CLIP_stop_at_last_layers, img2img_background_color, img2img_color_correction, samples_save, samples_format, grid_save, return_grid,  n_rows, live_previews_enable, show_progress_every_n_steps, live_preview_refresh_period
```

</details>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

![][feat-mobile-friendly]

#### Адаптированно под мобильные устройства

Выполнена частичная адаптация удобства работы с мобильными устройствами, включая откидную панель навигации, адаптацию боковой панели и т.д. Однако из-за высокой сложности и фиксированных значений стабильного диффузного интерфейса трудно обеспечить такое же удобство работы, как и в настольной версии. Приветствуется обратная связь для поиска новых идей.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

![][feat-pwa]

#### Progress Web App

Вы можете использовать Progressive Web Apps [PWA](https://support.google.com/chrome/answer/9658361) для быстрого стабильного запуска на компьютере или мобильном устройстве.

- На компьютере откройте браузер Chrome.
- Перейдите на стабильный сайт диффузии, который вы хотите установить
- В правом верхнем углу адресной строки нажмите кнопку `Установить`
- Follow the onscreen instructions to install the PWA

<div align="right">

[![][back-to-top]](#readme-top)

</div>

#### Форматирование подсказок

Нажмите кнопку <kbd>🪄</kbd> под строкой Prompt, чтобы отформатировать слова подсказки одним щелчком мыши.

> **Note**\
> Преобразует полноразмерные знаки препинания в полуразмерные, уберет лишние пробелы, добавит недостающие запятые и перенесёт в конец Extra-Networks (Дополнительные) модели.

Перед форматированием:

```text
photorealistic   photo of a handsome male (wizard  :1.2）， <lora:LuisapHotlineStyle:0.5> <lora:ElegantHanfuRuqunStyle:0.2>    short beard, white wizard  shirt, (with golden    trim:0.8),
```

После форматирования:

```text
photorealistic photo of a handsome male, (wizard:1.2), short beard, white wizard shirt, (with golden trim:0.8), <lora:LuisapHotlineStyle:0.5>, <lora:ElegantHanfuRuqunStyle:0.2>
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🖥 Поддерживаемые браузеры

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                              |

> **Warning**\`
> В настоящее время известна проблема совместимости со стилями в браузере Firefox.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Локальная разработка

Вы можете использовать Gitpod для разработки в режиме онлайн:

[Open in Gitpod][gitpod-url]

В качестве альтернативы можно клонировать его для локальной разработки. Для включения режима горячей загрузки необходимо предварительно запустить Stable-Diffusion на порту `7860`.

```bash
$ git clone https://github.com/lobehub/sd-webui-lobe-theme.git
$ cd sd-webui-lobe-theme
$ pnpm install
$ pnpm start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Содействие

[![][pr-welcome-shield]][pr-welcome-url]

[![][contributors-contrib]][contributors-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Ссылки

- stable-diffusion-webui：<https://github.com/AUTOMATIC1111/stable-diffusion-webui>
- gradio-theme-gallery: <https://huggingface.co/spaces/gradio/theme-gallery>
- cozy-nest: <https://github.com/Nevysha/Cozy-Nest>
- _before `1.0.0` version_
  - sd-web-ui-quickcs: <https://github.com/Gerschel/sd-web-ui-quickcss/>
  - Dark-Themes-SD-WebUI-Automatic1111: <https://github.com/Nacurutu/Dark-Themes-SD-WebUI-Automatic1111>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-url]

</details>

Copyright © 2023 [CanisMinor][profile-url]. <br />
This project is [AGPL3](./LICENSE) licensed.

<!-- LINK GROUP -->

<!-- SHIELD LINK GROUP -->

<!-- release -->

<!-- releaseDate -->

<!-- ciTest -->

<!-- ciRelease -->

<!-- contributors -->

<!-- forks -->

<!-- stargazers -->

<!-- issues -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[ci-release-shield]: https://github.com/lobehub/sd-webui-lobe-theme/workflows/Build%20and%20Release/badge.svg
[ci-release-url]: https://github.com/lobehub/sd-webui-lobe-theme/actions/workflows/release.yml
[ci-test-shield]: https://github.com/lobehub/sd-webui-lobe-theme/workflows/Test%20CI/badge.svg
[ci-test-url]: https://github.com/lobehub/sd-webui-lobe-theme/actions/workflows/test.yml
[contributors-contrib]: https://contrib.rocks/image?repo=lobehub/sd-webui-lobe-theme
[contributors-shield]: https://img.shields.io/github/contributors/lobehub/sd-webui-lobe-theme.svg?style=flat
[contributors-url]: https://github.com/lobehub/sd-webui-lobe-theme/graphs/contributors
[cover]: https://gw.alipayobjects.com/zos/kitchen/8Ab%24hLJ5ur/cover.webp
[feat-highlight]: https://gw.alipayobjects.com/zos/kitchen/iD%24W4U2y3Y/feat_highlight.webp
[feat-mobile-friendly]: https://gw.alipayobjects.com/zos/kitchen/WpWe6Hw8UT/feat_mobile_friendly.webp
[feat-pwa]: https://gw.alipayobjects.com/zos/kitchen/az49akOKJT/feat_pwa.webp
[feat-sidebar]: https://gw.alipayobjects.com/zos/kitchen/Olum2IjxCW/feat_sidebar.webp
[feat-theme-modify]: https://gw.alipayobjects.com/zos/kitchen/CbhlynwJYg/feat_theme_modify.webp
[feat-thememode]: https://gw.alipayobjects.com/zos/kitchen/nSFtJidWUR/feat_thememode.webp
[forks-shield]: https://img.shields.io/github/forks/lobehub/sd-webui-lobe-theme.svg?style=flat
[forks-url]: https://github.com/lobehub/sd-webui-lobe-theme/network/members
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flobehub%2Fsd-webui-lobe-theme.svg?type=large
[fossa-license-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Flobehub%2Fsd-webui-lobe-theme
[gitpod-url]: https://gitpod.io/#https://github.com/lobehub/sd-webui-lobe-theme
[issues-shield]: https://img.shields.io/github/issues/lobehub/sd-webui-lobe-theme.svg?style=flat
[issues-url]: https://github.com/lobehub/sd-webui-lobe-theme/issues/new/choose
[license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flobehub%2Fsd-webui-lobe-theme.svg?type=shield&issueType=license
[pr-welcome-shield]: https://img.shields.io/badge/🤯_pr_welcome-%E2%86%92-FEE064?style=for-the-badge
[pr-welcome-url]: https://github.com/lobehub/lobe-chat/pulls
[profile-url]: https://github.com/canisminor1990
[release-date-shield]: https://img.shields.io/github/release-date/lobehub/sd-webui-lobe-theme?style=flat
[release-date-url]: https://github.com/lobehub/sd-webui-lobe-theme/releases
[release-shield]: https://img.shields.io/github/v/release/lobehub/sd-webui-lobe-theme?style=flat&sort=semver&logo=github
[release-url]: https://github.com/lobehub/sd-webui-lobe-theme/releases
[stargazers-shield]: https://img.shields.io/github/stars/lobehub/sd-webui-lobe-theme.svg?style=flat
[stargazers-url]: https://github.com/lobehub/sd-webui-lobe-theme/stargazers
