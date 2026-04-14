import React from 'react';
import LegalPage from '@/components/LegalPage';
import { useTranslation, type Locale } from '@/i18n';

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  LEGAL NOTICE — content below is generic and indicative.
//     Update this page if additional analytics, advertising or other
//     third-party cookie-based services are added to the site.
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT: Record<Locale, {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: { title: string; paragraphs: string[] }[];
}> = {
  fr: {
    title: 'Politique de cookies',
    subtitle: 'Wolf Agro Services — Utilisation des cookies',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    sections: [
      {
        title: "Qu'est-ce qu'un cookie ?",
        paragraphs: [
          "Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette) lors de votre visite sur un site internet. Il permet au site de mémoriser certaines informations relatives à votre navigation.",
          "Les cookies ne contiennent pas de virus et ne peuvent pas être utilisés pour vous identifier personnellement sans votre accord.",
        ],
      },
      {
        title: 'Cookies utilisés sur ce site',
        paragraphs: [
          "Le site www.wolfagroservices.com utilise un nombre limité de cookies, strictement nécessaires à son bon fonctionnement et à l'amélioration de votre expérience.",
          "Aucun cookie publicitaire, aucun pixel de suivi tiers ni aucun outil d'analyse comportementale n'est utilisé sur ce site à ce jour.",
        ],
      },
      {
        title: 'Cookies strictement nécessaires',
        paragraphs: [
          "Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
          "wolf-locale : mémorise votre préférence de langue (français, anglais, allemand, chinois). Durée : persistant (localStorage).",
          "wolf-cookie-consent : enregistre votre choix concernant les cookies (accepté ou refusé). Durée : persistant (localStorage).",
          "Ces données sont stockées localement sur votre appareil via le mécanisme localStorage du navigateur. Elles ne sont pas transmises à des serveurs tiers.",
        ],
      },
      {
        title: 'Cookies analytiques et tiers',
        paragraphs: [
          "À ce jour, le site www.wolfagroservices.com n'utilise pas de cookies analytiques (Google Analytics, Matomo, etc.) ni de cookies provenant de réseaux sociaux ou de régies publicitaires.",
          "Si des outils d'analyse venaient à être intégrés dans le futur, cette politique sera mise à jour et votre consentement sera recueilli au préalable.",
        ],
      },
      {
        title: 'Gestion du consentement',
        paragraphs: [
          "Lors de votre première visite sur le site, une bannière vous informe de l'utilisation des cookies et vous propose d'accepter ou de refuser.",
          "Votre choix est mémorisé via le cookie wolf-cookie-consent. Vous pouvez modifier votre préférence à tout moment en supprimant ce cookie depuis les paramètres de votre navigateur.",
        ],
      },
      {
        title: 'Modifier vos préférences',
        paragraphs: [
          "Pour supprimer les cookies stockés par ce site, vous pouvez vider le localStorage de votre navigateur via les outils développeurs (F12 > Application > Local Storage > supprimer les entrées wolf-locale et wolf-cookie-consent).",
          "Vous pouvez également configurer votre navigateur pour bloquer l'utilisation des cookies. Notez toutefois que la désactivation des cookies nécessaires peut affecter certaines fonctionnalités du site (notamment la mémorisation de la langue).",
          "Pour toute question : contact@wolfagroservices.com",
        ],
      },
    ],
  },

  en: {
    title: 'Cookie Policy',
    subtitle: 'Wolf Agro Services — Cookie usage',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'What is a cookie?',
        paragraphs: [
          "A cookie is a small text file placed on your device (computer, smartphone, tablet) when you visit a website. It allows the site to remember certain information about your browsing session.",
          "Cookies do not contain viruses and cannot be used to personally identify you without your consent.",
        ],
      },
      {
        title: 'Cookies used on this site',
        paragraphs: [
          "The website www.wolfagroservices.com uses a limited number of cookies, strictly necessary for its operation and to improve your experience.",
          "No advertising cookies, third-party tracking pixels or behavioural analytics tools are currently used on this site.",
        ],
      },
      {
        title: 'Strictly necessary cookies',
        paragraphs: [
          "These cookies are essential for the website to function and cannot be disabled.",
          "wolf-locale: remembers your language preference (French, English, German, Chinese). Duration: persistent (localStorage).",
          "wolf-cookie-consent: records your cookie choice (accepted or declined). Duration: persistent (localStorage).",
          "These items are stored locally on your device via the browser's localStorage mechanism. They are not transmitted to third-party servers.",
        ],
      },
      {
        title: 'Analytics and third-party cookies',
        paragraphs: [
          "At present, www.wolfagroservices.com does not use any analytics cookies (Google Analytics, Matomo, etc.) or cookies from social networks or advertising networks.",
          "If analytics tools are integrated in the future, this policy will be updated and your consent will be obtained beforehand.",
        ],
      },
      {
        title: 'Managing your consent',
        paragraphs: [
          "On your first visit to the site, a banner informs you of cookie usage and gives you the option to accept or decline.",
          "Your choice is stored via the wolf-cookie-consent item. You can change your preference at any time by clearing this item from your browser settings.",
        ],
      },
      {
        title: 'Changing your preferences',
        paragraphs: [
          "To remove cookies stored by this site, you can clear the localStorage via your browser's developer tools (F12 > Application > Local Storage > delete wolf-locale and wolf-cookie-consent entries).",
          "You can also configure your browser to block cookies. Note that disabling necessary cookies may affect some site features (such as language memory).",
          "For any questions: contact@wolfagroservices.com",
        ],
      },
    ],
  },

  zh: {
    title: 'Cookie政策',
    subtitle: 'Wolf Agro Services — Cookie使用说明',
    lastUpdated: '最后更新：2026年4月',
    sections: [
      {
        title: '什么是Cookie？',
        paragraphs: [
          'Cookie是您访问网站时放置在设备（电脑、智能手机、平板电脑）上的小文本文件，它允许网站记住与您浏览相关的某些信息。',
          'Cookie不包含病毒，未经您同意不能用于识别您的个人身份。',
        ],
      },
      {
        title: '本网站使用的Cookie',
        paragraphs: [
          'www.wolfagroservices.com使用数量有限的Cookie，这些Cookie严格必要，用于网站正常运行和改善您的体验。',
          '本网站目前不使用任何广告Cookie、第三方跟踪像素或行为分析工具。',
        ],
      },
      {
        title: '严格必要的Cookie',
        paragraphs: [
          '这些Cookie对网站运行至关重要，无法禁用。',
          'wolf-locale：记住您的语言偏好（法语、英语、德语、中文）。持续时间：持久（localStorage）。',
          'wolf-cookie-consent：记录您的Cookie选择（接受或拒绝）。持续时间：持久（localStorage）。',
          '这些数据通过浏览器的localStorage机制本地存储在您的设备上，不传输到第三方服务器。',
        ],
      },
      {
        title: '分析和第三方Cookie',
        paragraphs: [
          '目前，www.wolfagroservices.com不使用任何分析Cookie（Google Analytics等）或来自社交网络或广告网络的Cookie。',
          '如果未来集成分析工具，本政策将更新，并事先征得您的同意。',
        ],
      },
      {
        title: '管理您的同意',
        paragraphs: [
          '您第一次访问网站时，横幅会通知您Cookie的使用情况，并提供接受或拒绝的选项。',
          '您的选择通过wolf-cookie-consent项目存储。您可以随时通过清除浏览器设置中的该项目来更改偏好。',
        ],
      },
      {
        title: '更改您的偏好',
        paragraphs: [
          '要删除本网站存储的Cookie，可通过浏览器开发工具清除localStorage（F12 > 应用程序 > 本地存储 > 删除wolf-locale和wolf-cookie-consent条目）。',
          '如有任何问题：contact@wolfagroservices.com',
        ],
      },
    ],
  },

  de: {
    title: 'Cookie-Richtlinie',
    subtitle: 'Wolf Agro Services — Cookie-Verwendung',
    lastUpdated: 'Zuletzt aktualisiert: April 2026',
    sections: [
      {
        title: 'Was ist ein Cookie?',
        paragraphs: [
          "Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website auf Ihrem Gerät (Computer, Smartphone, Tablet) abgelegt wird. Sie ermöglicht der Website, bestimmte Informationen zu Ihrer Browser-Sitzung zu speichern.",
          "Cookies enthalten keine Viren und können ohne Ihre Zustimmung nicht zur persönlichen Identifizierung verwendet werden.",
        ],
      },
      {
        title: 'Auf dieser Website verwendete Cookies',
        paragraphs: [
          "Die Website www.wolfagroservices.com verwendet eine begrenzte Anzahl von Cookies, die für den Betrieb und eine bessere Benutzererfahrung unbedingt erforderlich sind.",
          "Derzeit werden auf dieser Website keine Werbe-Cookies, Drittanbieter-Tracking-Pixel oder Verhaltensanalyse-Tools verwendet.",
        ],
      },
      {
        title: 'Unbedingt erforderliche Cookies',
        paragraphs: [
          "Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.",
          "wolf-locale: Speichert Ihre Sprachpräferenz (Französisch, Englisch, Deutsch, Chinesisch). Dauer: dauerhaft (localStorage).",
          "wolf-cookie-consent: Speichert Ihre Cookie-Auswahl (akzeptiert oder abgelehnt). Dauer: dauerhaft (localStorage).",
          "Diese Daten werden lokal auf Ihrem Gerät über den localStorage-Mechanismus des Browsers gespeichert und nicht an Drittserver übertragen.",
        ],
      },
      {
        title: 'Analyse- und Drittanbieter-Cookies',
        paragraphs: [
          "Derzeit verwendet www.wolfagroservices.com keine Analyse-Cookies (Google Analytics usw.) oder Cookies von sozialen Netzwerken oder Werbenetzwerken.",
          "Sollten in Zukunft Analysetools integriert werden, wird diese Richtlinie aktualisiert und Ihre Einwilligung vorab eingeholt.",
        ],
      },
      {
        title: 'Einwilligungsverwaltung',
        paragraphs: [
          "Bei Ihrem ersten Besuch auf der Website informiert ein Banner Sie über die Cookie-Verwendung und gibt Ihnen die Möglichkeit, diese zu akzeptieren oder abzulehnen.",
          "Ihre Wahl wird über den Eintrag wolf-cookie-consent gespeichert. Sie können Ihre Präferenz jederzeit ändern, indem Sie diesen Eintrag in Ihren Browsereinstellungen löschen.",
        ],
      },
      {
        title: 'Einstellungen ändern',
        paragraphs: [
          "Um von dieser Website gespeicherte Cookies zu entfernen, können Sie den localStorage über die Entwicklertools Ihres Browsers leeren (F12 > Anwendung > Lokaler Speicher > Einträge wolf-locale und wolf-cookie-consent löschen).",
          "Für Fragen: contact@wolfagroservices.com",
        ],
      },
    ],
  },
};

const CookiePolicy = () => {
  const { locale } = useTranslation();
  const content = CONTENT[locale];
  return (
    <LegalPage
      title={content.title}
      subtitle={content.subtitle}
      lastUpdated={content.lastUpdated}
      sections={content.sections}
    />
  );
};

export default CookiePolicy;
