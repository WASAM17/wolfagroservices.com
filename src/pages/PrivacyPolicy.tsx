'use client';

import React from 'react';
import LegalPage from '@/components/LegalPage';
import { useTranslation, type Locale } from '@/i18n';

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  LEGAL NOTICE — content below is generic and indicative.
//     It must be reviewed and validated by a qualified legal professional
//     before final production deployment, and updated if additional third-party
//     services (analytics, CRM, etc.) are integrated.
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT: Record<Locale, {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: { title: string; paragraphs: string[] }[];
}> = {
  fr: {
    title: 'Politique de confidentialité',
    subtitle: 'Wolf Agro Services — Traitement des données personnelles',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          "Wolf Agro Services (ci-après « la Société ») s'engage à protéger la vie privée des utilisateurs de son site internet www.wolfagroservices.com.",
          "La présente politique de confidentialité décrit les données personnelles collectées, leur utilisation et les droits dont vous disposez.",
        ],
      },
      {
        title: 'Données collectées',
        paragraphs: [
          "Dans le cadre de l'utilisation du site, Wolf Agro Services peut collecter les données suivantes via ses formulaires :",
          "Formulaire de contact : nom et prénom, société, adresse email, message.",
          "Formulaire de demande d'offre (RFQ) : nom et prénom, société, email professionnel, téléphone, pays de destination, produit souhaité, volume estimé, incoterm, port/destination, message complémentaire.",
          "Préférences de navigation : langue sélectionnée (stockée localement via localStorage, sans transmission à un serveur).",
        ],
      },
      {
        title: 'Finalité et base légale',
        paragraphs: [
          "Les données collectées via le formulaire de contact sont utilisées pour répondre à vos demandes d'information. La base légale est l'intérêt légitime de la Société.",
          "Les données collectées via le formulaire RFQ sont utilisées pour établir des cotations commerciales et entretenir une relation commerciale. La base légale est l'exécution de mesures précontractuelles.",
          "Les données de préférence de langue ne sont traitées que localement sur votre appareil et ne sont pas transmises à la Société.",
        ],
      },
      {
        title: 'Transmission des données',
        paragraphs: [
          "Les données saisies dans les formulaires sont transmises à Wolf Agro Services via EmailJS (service tiers de routage d'emails). EmailJS traite ces données uniquement pour permettre l'envoi des messages.",
          "Wolf Agro Services ne revend pas les données personnelles à des tiers. Les données ne sont partagées qu'avec des prestataires strictement nécessaires au traitement des demandes.",
        ],
      },
      {
        title: 'Durée de conservation',
        paragraphs: [
          "Les données transmises via les formulaires sont conservées pour la durée nécessaire au traitement de la demande et, le cas échéant, pour la durée de la relation commerciale.",
          "En l'absence de relation commerciale engagée, les données de contact sont conservées pendant une durée maximale de 3 ans à compter de la dernière interaction.",
        ],
      },
      {
        title: 'Sécurité des données',
        paragraphs: [
          "Wolf Agro Services met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.",
          "Les communications entre votre navigateur et le site sont chiffrées via HTTPS.",
        ],
      },
      {
        title: 'Droits des utilisateurs',
        paragraphs: [
          "Conformément aux réglementations applicables en matière de protection des données, vous disposez des droits suivants : droit d'accès, droit de rectification, droit à l'effacement, droit d'opposition, droit à la limitation du traitement.",
          "Pour exercer ces droits, contactez-nous par email à : contact@wolfagroservices.com en précisant votre demande.",
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          "Pour toute question relative à la présente politique de confidentialité ou au traitement de vos données personnelles, vous pouvez nous contacter à :",
          "Email : contact@wolfagroservices.com — Wolf Agro Services, Niamey, Niger.",
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    subtitle: 'Wolf Agro Services — Personal data processing',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          "Wolf Agro Services (hereinafter 'the Company') is committed to protecting the privacy of users of its website www.wolfagroservices.com.",
          "This privacy policy describes the personal data collected, how it is used, and your rights in relation to this data.",
        ],
      },
      {
        title: 'Data collected',
        paragraphs: [
          "When using the website, Wolf Agro Services may collect the following data through its forms:",
          "Contact form: first and last name, company, email address, message.",
          "Request for Quote (RFQ) form: name, company, professional email, phone, destination country, desired product, estimated volume, incoterm, port/destination, additional message.",
          "Navigation preferences: selected language (stored locally via localStorage, not transmitted to any server).",
        ],
      },
      {
        title: 'Purpose and legal basis',
        paragraphs: [
          "Data collected via the contact form is used to respond to your enquiries. The legal basis is the legitimate interest of the Company.",
          "Data collected via the RFQ form is used to prepare commercial quotations and maintain a business relationship. The legal basis is pre-contractual measures.",
          "Language preference data is processed locally on your device only and is not transmitted to the Company.",
        ],
      },
      {
        title: 'Data transmission',
        paragraphs: [
          "Data entered in the forms is transmitted to Wolf Agro Services via EmailJS (a third-party email routing service). EmailJS processes this data solely to enable message delivery.",
          "Wolf Agro Services does not sell personal data to third parties. Data is only shared with service providers strictly necessary for processing requests.",
        ],
      },
      {
        title: 'Retention period',
        paragraphs: [
          "Data transmitted via forms is retained for as long as necessary to process the request and, where applicable, for the duration of the business relationship.",
          "In the absence of an ongoing business relationship, contact data is retained for a maximum period of 3 years from the last interaction.",
        ],
      },
      {
        title: 'Data security',
        paragraphs: [
          "Wolf Agro Services implements appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction.",
          "Communications between your browser and the site are encrypted via HTTPS.",
        ],
      },
      {
        title: 'User rights',
        paragraphs: [
          "Under applicable data protection regulations, you have the following rights: right of access, right to rectification, right to erasure, right to object, right to restriction of processing.",
          "To exercise these rights, contact us by email at: contact@wolfagroservices.com, specifying your request.",
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          "For any questions about this privacy policy or the processing of your personal data, please contact us at:",
          "Email: contact@wolfagroservices.com — Wolf Agro Services, Niamey, Niger.",
        ],
      },
    ],
  },

  zh: {
    title: '隐私政策',
    subtitle: 'Wolf Agro Services — 个人数据处理',
    lastUpdated: '最后更新：2026年4月',
    sections: [
      {
        title: '简介',
        paragraphs: [
          'Wolf Agro Services（以下简称"公司"）致力于保护www.wolfagroservices.com网站用户的隐私。',
          '本隐私政策描述了收集的个人数据、使用方式及您的相关权利。',
        ],
      },
      {
        title: '收集的数据',
        paragraphs: [
          '在使用网站时，Wolf Agro Services可能通过表单收集以下数据：',
          '联系表单：姓名、公司、电子邮件地址、留言。',
          '询价表单（RFQ）：姓名、公司、商业邮箱、电话、目的国、所需产品、预计数量、贸易术语、港口/目的地、补充信息。',
          '导航偏好：所选语言（通过localStorage本地存储，不传输到服务器）。',
        ],
      },
      {
        title: '目的和法律依据',
        paragraphs: [
          '通过联系表单收集的数据用于回复您的咨询。法律依据是公司的合法利益。',
          '通过RFQ表单收集的数据用于准备商业报价和维持业务关系。法律依据是合同前措施。',
          '语言偏好数据仅在您的设备上本地处理，不传输给公司。',
        ],
      },
      {
        title: '数据传输',
        paragraphs: [
          '表单中输入的数据通过EmailJS（第三方电子邮件路由服务）传输给Wolf Agro Services。EmailJS仅为实现消息传递而处理此数据。',
          'Wolf Agro Services不向第三方出售个人数据。',
        ],
      },
      {
        title: '保留期限',
        paragraphs: [
          '通过表单传输的数据将保留处理请求所需的时间，以及在适用情况下的业务关系期间。',
          '如无持续业务关系，联系数据自最后一次互动起最多保留3年。',
        ],
      },
      {
        title: '数据安全',
        paragraphs: [
          'Wolf Agro Services实施适当的技术和组织措施，保护您的个人数据免受未经授权的访问、更改、披露或销毁。',
          '您的浏览器与网站之间的通信通过HTTPS加密。',
        ],
      },
      {
        title: '用户权利',
        paragraphs: [
          '根据适用的数据保护法规，您享有以下权利：访问权、更正权、删除权、异议权、限制处理权。',
          '要行使这些权利，请发送电子邮件至：contact@wolfagroservices.com。',
        ],
      },
      {
        title: '联系方式',
        paragraphs: [
          '如有任何关于本隐私政策或个人数据处理的问题，请联系我们：',
          '电子邮件：contact@wolfagroservices.com — Wolf Agro Services，尼亚美，尼日尔。',
        ],
      },
    ],
  },

  es: {
    title: 'Política de privacidad',
    subtitle: 'Wolf Agro Services — Tratamiento de datos personales',
    lastUpdated: 'Última actualización: abril 2026',
    sections: [
      {
        title: 'Introducción',
        paragraphs: [
          'Wolf Agro Services (en adelante "la Sociedad") se compromete a proteger la privacidad de los usuarios de su sitio web www.wolfagroservices.com.',
          'La presente política de privacidad describe los datos personales recogidos, su uso y los derechos de los que dispone.',
        ],
      },
      {
        title: 'Datos recogidos',
        paragraphs: [
          'En el marco del uso del sitio, Wolf Agro Services puede recoger los siguientes datos a través de sus formularios:',
          'Formulario de contacto: nombre y apellido, empresa, dirección de email, mensaje.',
          'Formulario de solicitud de oferta (RFQ): nombre y apellido, empresa, email profesional, teléfono, país de destino, producto deseado, volumen estimado, incoterm, puerto/destino, mensaje adicional.',
          'Preferencias de navegación: idioma seleccionado (almacenado localmente via localStorage, sin transmisión a un servidor).',
        ],
      },
      {
        title: 'Finalidad y base legal',
        paragraphs: [
          'Los datos recogidos a través del formulario de contacto se utilizan para responder a sus solicitudes de información. La base legal es el interés legítimo de la Sociedad.',
          'Los datos recogidos a través del formulario RFQ se utilizan para elaborar cotizaciones comerciales y mantener una relación comercial. La base legal es la ejecución de medidas precontractuales.',
          'Los datos de preferencia de idioma solo se procesan localmente en su dispositivo y no se transmiten a la Sociedad.',
        ],
      },
      {
        title: 'Transmisión de datos',
        paragraphs: [
          'Los datos introducidos en los formularios se transmiten a Wolf Agro Services a través de EmailJS (servicio de enrutamiento de emails de terceros). EmailJS procesa estos datos únicamente para permitir el envío de los mensajes.',
          'Wolf Agro Services no revende los datos personales a terceros.',
        ],
      },
      {
        title: 'Período de conservación',
        paragraphs: [
          'Los datos transmitidos a través de los formularios se conservan durante el tiempo necesario para el tratamiento de la solicitud y, en su caso, durante la duración de la relación comercial.',
          'En ausencia de relación comercial establecida, los datos de contacto se conservan durante un período máximo de 3 años desde la última interacción.',
        ],
      },
      {
        title: 'Seguridad de los datos',
        paragraphs: [
          'Wolf Agro Services implementa las medidas técnicas y organizativas apropiadas para proteger sus datos personales contra cualquier acceso no autorizado, alteración, divulgación o destrucción.',
          'Las comunicaciones entre su navegador y el sitio están cifradas mediante HTTPS.',
        ],
      },
      {
        title: 'Derechos de los usuarios',
        paragraphs: [
          'De conformidad con las reglamentaciones aplicables en materia de protección de datos, dispone de los siguientes derechos: derecho de acceso, derecho de rectificación, derecho de supresión, derecho de oposición, derecho a la limitación del tratamiento.',
          'Para ejercer estos derechos, contáctenos por email en: contact@wolfagroservices.com indicando su solicitud.',
        ],
      },
      {
        title: 'Contacto',
        paragraphs: [
          'Para cualquier pregunta relativa a la presente política de privacidad o al tratamiento de sus datos personales, puede contactarnos en:',
          'Email: contact@wolfagroservices.com — Wolf Agro Services, Niamey, Níger.',
        ],
      },
    ],
  },

  de: {
    title: 'Datenschutzerklärung',
    subtitle: 'Wolf Agro Services — Verarbeitung personenbezogener Daten',
    lastUpdated: 'Zuletzt aktualisiert: April 2026',
    sections: [
      {
        title: 'Einleitung',
        paragraphs: [
          "Wolf Agro Services (nachfolgend 'das Unternehmen') verpflichtet sich zum Schutz der Privatsphäre der Nutzer seiner Website www.wolfagroservices.com.",
          "Diese Datenschutzerklärung beschreibt die erhobenen personenbezogenen Daten, deren Verwendung und Ihre diesbezüglichen Rechte.",
        ],
      },
      {
        title: 'Erhobene Daten',
        paragraphs: [
          "Bei der Nutzung der Website kann Wolf Agro Services folgende Daten über seine Formulare erheben:",
          "Kontaktformular: Vor- und Nachname, Unternehmen, E-Mail-Adresse, Nachricht.",
          "Angebotsanfrage-Formular (RFQ): Name, Unternehmen, geschäftliche E-Mail, Telefon, Zielland, gewünschtes Produkt, geschätzte Menge, Incoterm, Hafen/Bestimmungsort, ergänzende Informationen.",
          "Navigationseinstellungen: gewählte Sprache (lokal via localStorage gespeichert, nicht an Server übertragen).",
        ],
      },
      {
        title: 'Zweck und Rechtsgrundlage',
        paragraphs: [
          "Über das Kontaktformular erhobene Daten werden zur Beantwortung Ihrer Anfragen verwendet. Rechtsgrundlage ist das berechtigte Interesse des Unternehmens.",
          "Über das RFQ-Formular erhobene Daten werden für die Erstellung von Angeboten und die Pflege der Geschäftsbeziehung verwendet. Rechtsgrundlage sind vorvertragliche Maßnahmen.",
        ],
      },
      {
        title: 'Datenübertragung',
        paragraphs: [
          "In Formularen eingegebene Daten werden über EmailJS (Drittanbieter-E-Mail-Routingdienst) an Wolf Agro Services übermittelt.",
          "Wolf Agro Services verkauft personenbezogene Daten nicht an Dritte.",
        ],
      },
      {
        title: 'Aufbewahrungsfristen',
        paragraphs: [
          "Über Formulare übermittelte Daten werden so lange aufbewahrt, wie es für die Bearbeitung der Anfrage notwendig ist.",
          "Ohne laufende Geschäftsbeziehung werden Kontaktdaten maximal 3 Jahre ab der letzten Interaktion aufbewahrt.",
        ],
      },
      {
        title: 'Datensicherheit',
        paragraphs: [
          "Wolf Agro Services trifft geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten.",
          "Die Kommunikation zwischen Ihrem Browser und der Website ist per HTTPS verschlüsselt.",
        ],
      },
      {
        title: 'Nutzerrechte',
        paragraphs: [
          "Gemäß den anwendbaren Datenschutzvorschriften haben Sie folgende Rechte: Auskunftsrecht, Berichtigungsrecht, Löschungsrecht, Widerspruchsrecht, Einschränkungsrecht.",
          "Zur Ausübung dieser Rechte kontaktieren Sie uns per E-Mail: contact@wolfagroservices.com.",
        ],
      },
      {
        title: 'Kontakt',
        paragraphs: [
          "Für Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns:",
          "E-Mail: contact@wolfagroservices.com — Wolf Agro Services, Niamey, Niger.",
        ],
      },
    ],
  },
};

const PrivacyPolicy = () => {
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

export default PrivacyPolicy;
