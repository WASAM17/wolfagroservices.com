'use client';

import React from 'react';
import LegalPage from '@/components/LegalPage';
import { useTranslation, type Locale } from '@/i18n';

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  LEGAL NOTICE — content below is generic and indicative.
//     It must be reviewed and validated by a qualified legal professional
//     before final production deployment.
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT: Record<Locale, {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: { title: string; paragraphs: string[] }[];
}> = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    subtitle: 'Site Wolf Agro Services — www.wolfagroservices.com',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    sections: [
      {
        title: 'Présentation du site',
        paragraphs: [
          "Le site www.wolfagroservices.com est édité et exploité par Wolf Agro Services, société spécialisée dans le sourcing et l'export de produits agricoles bruts, dont le siège social est situé à Niamey, Niger.",
          "Pour toute question relative au site, vous pouvez nous contacter à l'adresse : contact@wolfagroservices.com.",
        ],
      },
      {
        title: 'Objet',
        paragraphs: [
          "Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'accès et d'utilisation du site internet www.wolfagroservices.com, ainsi que les droits et obligations des utilisateurs.",
          "L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.",
        ],
      },
      {
        title: 'Accès au site',
        paragraphs: [
          "L'accès au site est libre et gratuit. Wolf Agro Services se réserve le droit de modifier, suspendre ou interrompre à tout moment l'accès au site, notamment pour des raisons de maintenance, de mise à jour ou de toute autre contrainte technique.",
          "Wolf Agro Services ne saurait être tenu responsable en cas d'indisponibilité temporaire du site.",
        ],
      },
      {
        title: 'Propriété intellectuelle',
        paragraphs: [
          "L'ensemble des éléments constituant le site (textes, photographies, visuels, logos, structure, code source) est la propriété exclusive de Wolf Agro Services et est protégé par les lois relatives à la propriété intellectuelle.",
          "Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'autorisation préalable et écrite de Wolf Agro Services, est strictement interdite.",
        ],
      },
      {
        title: 'Limitation de responsabilité',
        paragraphs: [
          "Les informations et documents disponibles sur le site sont fournis à titre indicatif et peuvent être modifiés à tout moment sans préavis. Wolf Agro Services s'efforce de maintenir ces informations exactes et à jour, mais ne peut en garantir l'exhaustivité ni l'exactitude.",
          "Wolf Agro Services ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou des informations qui y sont contenues.",
        ],
      },
      {
        title: 'Liens hypertextes',
        paragraphs: [
          "Le site peut contenir des liens hypertextes vers des sites tiers. Wolf Agro Services n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu, de leur disponibilité ou de leurs pratiques en matière de confidentialité.",
          "La création de liens hypertextes vers le site www.wolfagroservices.com nécessite l'autorisation préalable de Wolf Agro Services.",
        ],
      },
      {
        title: 'Disponibilité du service',
        paragraphs: [
          "Wolf Agro Services s'efforce d'assurer la disponibilité du site 24h/24 et 7j/7, mais ne peut garantir un accès ininterrompu. Des interruptions peuvent survenir pour des raisons techniques indépendantes de notre volonté.",
        ],
      },
      {
        title: 'Modification des CGU',
        paragraphs: [
          "Wolf Agro Services se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur mise en ligne. L'utilisateur est invité à consulter régulièrement cette page.",
        ],
      },
      {
        title: 'Droit applicable et contact',
        paragraphs: [
          "Les présentes CGU sont soumises au droit applicable. Tout litige relatif à l'utilisation du site sera soumis à la juridiction compétente.",
          "Pour toute question relative aux présentes CGU, contactez-nous à : contact@wolfagroservices.com",
        ],
      },
    ],
  },

  en: {
    title: 'Terms of Use',
    subtitle: 'Wolf Agro Services website — www.wolfagroservices.com',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'About the website',
        paragraphs: [
          "The website www.wolfagroservices.com is published and operated by Wolf Agro Services, a company specialising in the sourcing and export of raw agricultural products, headquartered in Niamey, Niger.",
          "For any questions regarding the website, please contact us at: contact@wolfagroservices.com.",
        ],
      },
      {
        title: 'Purpose',
        paragraphs: [
          "These Terms of Use (ToU) define the conditions of access and use of the website www.wolfagroservices.com, as well as the rights and obligations of users.",
          "Use of the website implies full acceptance of these Terms of Use.",
        ],
      },
      {
        title: 'Access to the website',
        paragraphs: [
          "Access to the website is free of charge. Wolf Agro Services reserves the right to modify, suspend or interrupt access to the website at any time, including for maintenance, updates or any other technical reasons.",
          "Wolf Agro Services shall not be held liable for any temporary unavailability of the website.",
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          "All elements of the website (texts, photographs, visuals, logos, structure, source code) are the exclusive property of Wolf Agro Services and are protected by applicable intellectual property laws.",
          "Any reproduction, representation, use or adaptation, in any form, of all or part of these elements, without the prior written authorisation of Wolf Agro Services, is strictly prohibited.",
        ],
      },
      {
        title: 'Limitation of liability',
        paragraphs: [
          "Information and documents available on the website are provided for informational purposes only and may be modified at any time without notice. Wolf Agro Services strives to maintain accurate and up-to-date information but cannot guarantee its completeness or accuracy.",
          "Wolf Agro Services shall not be held liable for direct or indirect damages resulting from the use of the website or the information contained therein.",
        ],
      },
      {
        title: 'Hyperlinks',
        paragraphs: [
          "The website may contain hyperlinks to third-party websites. Wolf Agro Services has no control over these sites and shall not be held liable for their content, availability or privacy practices.",
          "The creation of hyperlinks to www.wolfagroservices.com requires prior authorisation from Wolf Agro Services.",
        ],
      },
      {
        title: 'Service availability',
        paragraphs: [
          "Wolf Agro Services endeavours to ensure website availability 24/7, but cannot guarantee uninterrupted access. Interruptions may occur due to technical reasons beyond our control.",
        ],
      },
      {
        title: 'Amendments',
        paragraphs: [
          "Wolf Agro Services reserves the right to amend these Terms of Use at any time. Amendments take effect upon publication. Users are advised to check this page regularly.",
        ],
      },
      {
        title: 'Applicable law and contact',
        paragraphs: [
          "These Terms of Use are subject to applicable law. Any dispute relating to the use of the website shall be submitted to the competent jurisdiction.",
          "For any questions regarding these Terms of Use, contact us at: contact@wolfagroservices.com",
        ],
      },
    ],
  },

  zh: {
    title: '网站使用条款',
    subtitle: 'Wolf Agro Services — www.wolfagroservices.com',
    lastUpdated: '最后更新：2026年4月',
    sections: [
      {
        title: '网站介绍',
        paragraphs: [
          'www.wolfagroservices.com由Wolf Agro Services发布和运营，该公司专注于尼日尔原始农产品的采购和出口，总部位于尼日尔尼亚美。',
          '如有任何网站相关问题，请联系我们：contact@wolfagroservices.com。',
        ],
      },
      {
        title: '条款目的',
        paragraphs: [
          '本使用条款规定了访问和使用www.wolfagroservices.com网站的条件，以及用户的权利和义务。',
          '使用本网站即表示您完全接受本使用条款。',
        ],
      },
      {
        title: '网站访问',
        paragraphs: [
          'Wolf Agro Services保留随时修改、暂停或中断网站访问的权利，包括维护、更新或其他技术原因。',
          'Wolf Agro Services对网站暂时不可用不承担责任。',
        ],
      },
      {
        title: '知识产权',
        paragraphs: [
          '网站的所有元素（文本、图片、标志、结构、源代码）均为Wolf Agro Services的专有财产，受适用知识产权法律保护。',
          '未经Wolf Agro Services事先书面授权，严禁以任何形式复制、展示或使用这些元素。',
        ],
      },
      {
        title: '责任限制',
        paragraphs: [
          '网站上的信息仅供参考，可能随时更改而不另行通知。Wolf Agro Services对因使用网站或其中包含的信息而造成的直接或间接损害不承担责任。',
        ],
      },
      {
        title: '外部链接',
        paragraphs: [
          '网站可能包含第三方网站链接。Wolf Agro Services对这些网站的内容、可用性或隐私实践不承担责任。',
        ],
      },
      {
        title: '服务可用性',
        paragraphs: [
          'Wolf Agro Services努力确保网站全天候可用，但无法保证不间断访问。可能因技术原因发生中断。',
        ],
      },
      {
        title: '条款修改',
        paragraphs: [
          'Wolf Agro Services保留随时修改本使用条款的权利。修改内容自发布之日起生效。',
        ],
      },
      {
        title: '适用法律与联系方式',
        paragraphs: [
          '本使用条款受适用法律约束。如有任何关于本条款的问题，请联系：contact@wolfagroservices.com',
        ],
      },
    ],
  },

  de: {
    title: 'Nutzungsbedingungen',
    subtitle: 'Wolf Agro Services Website — www.wolfagroservices.com',
    lastUpdated: 'Zuletzt aktualisiert: April 2026',
    sections: [
      {
        title: 'Über die Website',
        paragraphs: [
          'Die Website www.wolfagroservices.com wird von Wolf Agro Services herausgegeben und betrieben, einem auf Beschaffung und Export von landwirtschaftlichen Rohprodukten spezialisierten Unternehmen mit Sitz in Niamey, Niger.',
          'Für Fragen zur Website kontaktieren Sie uns unter: contact@wolfagroservices.com.',
        ],
      },
      {
        title: 'Zweck',
        paragraphs: [
          'Diese Nutzungsbedingungen regeln die Bedingungen für den Zugang und die Nutzung der Website www.wolfagroservices.com sowie die Rechte und Pflichten der Nutzer.',
          'Die Nutzung der Website impliziert die vollständige Akzeptanz dieser Nutzungsbedingungen.',
        ],
      },
      {
        title: 'Zugang zur Website',
        paragraphs: [
          'Wolf Agro Services behält sich das Recht vor, den Zugang zur Website jederzeit zu ändern, auszusetzen oder zu unterbrechen, auch für Wartungs-, Update- oder andere technische Zwecke.',
          'Wolf Agro Services haftet nicht für eine vorübergehende Nichtverfügbarkeit der Website.',
        ],
      },
      {
        title: 'Geistiges Eigentum',
        paragraphs: [
          'Alle Elemente der Website (Texte, Fotos, Logos, Struktur, Quellcode) sind ausschließliches Eigentum von Wolf Agro Services und durch das anwendbare Recht zum Schutz des geistigen Eigentums geschützt.',
          'Jede Vervielfältigung oder Nutzung ohne vorherige schriftliche Genehmigung von Wolf Agro Services ist ausdrücklich untersagt.',
        ],
      },
      {
        title: 'Haftungsbeschränkung',
        paragraphs: [
          'Die auf der Website bereitgestellten Informationen dienen nur zu Informationszwecken und können jederzeit ohne Vorankündigung geändert werden. Wolf Agro Services haftet nicht für direkte oder indirekte Schäden, die sich aus der Nutzung der Website ergeben.',
        ],
      },
      {
        title: 'Hyperlinks',
        paragraphs: [
          'Die Website kann Links zu Websites Dritter enthalten. Wolf Agro Services hat keine Kontrolle über diese Sites und übernimmt keine Haftung für deren Inhalte oder Praktiken.',
        ],
      },
      {
        title: 'Dienstverfügbarkeit',
        paragraphs: [
          'Wolf Agro Services bemüht sich um eine 24/7-Verfügbarkeit der Website, kann jedoch keinen ununterbrochenen Zugang garantieren.',
        ],
      },
      {
        title: 'Änderungen',
        paragraphs: [
          'Wolf Agro Services behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen treten mit Veröffentlichung in Kraft.',
        ],
      },
      {
        title: 'Anwendbares Recht und Kontakt',
        paragraphs: [
          'Diese Nutzungsbedingungen unterliegen dem anwendbaren Recht. Für Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns: contact@wolfagroservices.com',
        ],
      },
    ],
  },
};

const CGU = () => {
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

export default CGU;
