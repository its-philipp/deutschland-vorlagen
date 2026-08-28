import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt):
 * "akteneinsicht rentenversicherung beantragen muster" is the domain's best
 * position of all — 7.9 — and the cluster around it ("akteneinsicht
 * beantragen muster", "… ohne anwalt muster", "antrag auf akteneinsicht")
 * sits at 28-62. The Sozialrecht slant of that top query is the reason the
 * generator now switches between § 29 VwVfG and § 25 SGB X.
 *
 * Both § citations are carried by akteneinsicht-behoerde; § 25 SGB X was read
 * against the primary text at gesetze-im-internet.de on 2026-08-27 before it
 * was added there.
 */
const guide: GuideConfig = {
  slug: 'akteneinsicht-beantragen',
  h1: 'Akteneinsicht bei einer Behörde: Wann Sie ein Recht darauf haben',
  metaTitle: 'Akteneinsicht beantragen: Recht und Ablauf 2026',
  metaDescription:
    'Wer Beteiligter ist, darf die Akte sehen – bei der Stadt nach § 29 VwVfG, bei der Rentenversicherung nach § 25 SGB X. Was gilt und was Grenzen hat.',
  icon: 'folder',
  intro:
    'Wer gegen einen Bescheid vorgehen will, kämpft meist gegen eine Begründung, die er nur zur Hälfte kennt. Die Akte enthält die andere Hälfte: das Gutachten, den Vermerk, die Berechnung. Das Recht, sie einzusehen, ist kein Entgegenkommen der Behörde, sondern ein Anspruch — und er ist an eine Bedingung geknüpft, die viele Anträge übersehen.',
  sections: [
    {
      heading: 'Der Anspruch, und wovon er abhängt',
      paragraphs: [
        'Die Behörde hat den <strong>Beteiligten</strong> Einsicht in die das Verfahren betreffenden Akten zu gestatten, soweit deren Kenntnis zur Geltendmachung oder Verteidigung ihrer rechtlichen Interessen erforderlich ist. Dieser Satz steht wortgleich in § 29 Abs. 1 Satz 1 VwVfG und in § 25 Abs. 1 Satz 1 SGB X — er ist die Grundlage des ganzen Themas, und er enthält zwei Bedingungen.',
        'Die erste: <strong>Sie müssen Beteiligter sein.</strong> Das ist, wer den Antrag gestellt hat, an wen sich der Verwaltungsakt richtet oder wer sonst zum Verfahren hinzugezogen wurde. Ein allgemeines Interesse an einem Vorgang genügt nicht — dafür gibt es die Informationsfreiheitsgesetze des Bundes und der Länder, ein anderes Verfahren mit anderen Voraussetzungen.',
        'Die zweite: <strong>die Kenntnis muss erforderlich sein</strong>, um Ihre rechtlichen Interessen geltend zu machen oder zu verteidigen. Das ist der Punkt, an dem schwache Anträge scheitern. „Ich möchte wissen, was Sie über mich gespeichert haben“ ist keine Begründung im Sinne dieser Vorschrift. „Ich muss prüfen, auf welche Feststellungen sich die Ablehnung stützt, um über einen Widerspruch entscheiden zu können“ ist eine.',
      ],
    },
    {
      heading: 'Welche Vorschrift für Ihre Behörde gilt',
      paragraphs: [
        'Der Anspruch besteht überall, aber die Vorschrift lautet je nach Verfahren anders. Ein Schreiben, das die falsche Norm nennt, wird deshalb selten abgelehnt — es liest sich nur so, als hätte der Absender das Verfahren nicht verstanden, und das ist kein guter Auftakt für einen Widerspruch.',
      ],
      list: [
        {
          term: '§ 29 VwVfG',
          text: 'Das allgemeine Verwaltungsverfahren: Stadt und Gemeinde, Bauaufsicht, Ordnungsamt, Straßenverkehrsbehörde, Ausländerbehörde. Über die Verwaltungsverfahrensgesetze der Länder gilt er auch für Landesbehörden.',
        },
        {
          term: '§ 25 SGB X',
          text: 'Alle Sozialverfahren: Jobcenter, Agentur für Arbeit, Deutsche Rentenversicherung, Kranken- und Pflegekassen, Unfallversicherung, Versorgungsämter. Absatz 1 ist mit § 29 VwVfG wortgleich, die weiteren Absätze sind es nicht — dazu unten mehr.',
        },
        {
          term: 'Abgabenordnung',
          text: 'Steuerverfahren beim Finanzamt folgen einer eigenen Systematik. Weder § 29 VwVfG noch § 25 SGB X passen dort.',
        },
      ],
    },
    {
      heading: 'Der Punkt, an dem es bei Rentenversicherung und Krankenkasse anders läuft',
      paragraphs: [
        'In Sozialakten stehen häufig ärztliche Unterlagen: das Gutachten des Medizinischen Dienstes, die Stellungnahme des sozialmedizinischen Dienstes der Rentenversicherung, Befunde, die Sie selbst eingereicht haben. Dafür enthält § 25 Abs. 2 SGB X eine Regel, die § 29 VwVfG nicht kennt.',
        'Soweit die Akten Angaben über gesundheitliche Verhältnisse eines Beteiligten enthalten, <em>kann</em> die Behörde den Inhalt stattdessen durch einen Arzt vermitteln lassen. Und sie <em>soll</em> das tun, soweit zu befürchten ist, dass die Akteneinsicht dem Beteiligten einen unverhältnismäßigen Nachteil zufügen würde, insbesondere an der Gesundheit.',
        'Entscheidend ist der Satz, der in derselben Vorschrift direkt daneben steht: <strong>Das Recht nach Absatz 1 wird dadurch nicht beschränkt.</strong> Die Vermittlung durch einen Arzt ist also ein anderer Weg zum selben Inhalt, keine Verweigerung. Wenn Ihre Kasse Ihnen ein Gutachten „nur über Ihren Hausarzt“ zugänglich machen will, ist das rechtlich vorgesehen — dass Sie den Inhalt überhaupt nicht erfahren, ist es nicht.',
      ],
    },
    {
      heading: 'Was die Behörde zurückhalten darf',
      paragraphs: [
        'Zwei Einschränkungen gelten in beiden Verfahren. Bis zum Abschluss des Verwaltungsverfahrens sind <strong>Entwürfe zu Entscheidungen und die Arbeiten zu ihrer unmittelbaren Vorbereitung</strong> ausgenommen (§ 29 Abs. 1 Satz 2 VwVfG, § 25 Abs. 1 Satz 2 SGB X). Der interne Entwurf des Bescheids gehört also nicht dazu, die Berechnung, auf der er beruht, sehr wohl — sobald das Verfahren abgeschlossen ist, fällt auch diese Schranke weg.',
        'Daneben darf die Einsicht verweigert werden, soweit berechtigte Interessen Dritter oder — im allgemeinen Verwaltungsverfahren — die ordnungsgemäße Aufgabenerfüllung entgegenstehen (§ 29 Abs. 2 VwVfG, § 25 Abs. 3 SGB X). Das rechtfertigt das Schwärzen einzelner Namen; es rechtfertigt nicht, eine Akte pauschal zu sperren.',
        'Deshalb gehört in jeden Antrag der Satz, der die Verweigerung überprüfbar macht: Bitten Sie um eine <strong>schriftliche Begründung unter Angabe der Aktenteile, die ausgenommen werden, und der jeweils tragenden Gründe</strong>. Eine Behörde, die begründen muss, welche Blätter sie warum zurückhält, hält weniger zurück als eine, die nur „nicht möglich“ schreibt.',
      ],
    },
    {
      heading: 'Der Fehler, der Fristen kostet',
      paragraphs: [
        'Der häufigste Ablauf ist dieser: Ein Bescheid kommt, die Begründung überzeugt nicht, und man beantragt zuerst Akteneinsicht, um zu wissen, wogegen man eigentlich argumentiert. Das ist inhaltlich richtig und verfahrensrechtlich gefährlich — denn <strong>der Antrag auf Akteneinsicht hält die Widerspruchsfrist nicht an.</strong> Die Behörde antwortet in vier Wochen, der Monat ist vorbei, und der Bescheid ist bestandskräftig.',
        'Die Reihenfolge, die beides rettet: erst den Widerspruch einlegen, unbegründet, in einem Satz. Dann die Akteneinsicht beantragen. Dann nach der Einsicht die Begründung nachreichen. Ein Widerspruch muss nicht begründet sein, um die Frist zu wahren — genau dafür ist diese Möglichkeit da.',
        'Für den Antrag auf Akteneinsicht selbst gibt es dagegen keine Frist. Sie können ihn auch nach Abschluss des Verfahrens stellen, und nach Abschluss fällt die Schranke für Entscheidungsentwürfe sogar weg.',
      ],
    },
    {
      heading: 'Wie die Einsicht praktisch abläuft',
      paragraphs: [
        'Grundsätzlich erfolgt die Einsicht bei der Behörde, die die Akten führt (§ 25 Abs. 4 SGB X). Ein Anspruch darauf, die vollständige Akte nach Hause geschickt zu bekommen, folgt daraus nicht — in der Praxis versenden viele Stellen dennoch Kopien oder Scans, weil ein Termin für beide Seiten aufwendiger ist. Fragen Sie danach, aber rechnen Sie mit dem Termin.',
        'Was Sie vor Ort dürfen, steht ausdrücklich im Gesetz: Auszüge oder Abschriften selbst fertigen oder sich Ablichtungen durch die Behörde erteilen lassen (§ 25 Abs. 5 SGB X). Bei elektronischen Akten kann die Behörde ausdrucken, am Bildschirm anzeigen, Dokumente bereitstellen oder den elektronischen Zugriff gestatten. Nehmen Sie ein Telefon mit — Abfotografieren ist das schnellste Anfertigen einer Abschrift, und es kostet nichts.',
        'Die Einsicht selbst ist regelmäßig gebührenfrei; für Kopien können Auslagen anfallen. Bitten Sie um einen Hinweis, bevor umfangreich kopiert wird, dann gibt es hinterher keine Überraschung.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 29 VwVfG',
      url: 'https://www.gesetze-im-internet.de/vwvfg/__29.html',
      note: 'Die Behörde hat den Beteiligten Einsicht in die das Verfahren betreffenden Akten zu gestatten, soweit deren Kenntnis zur Geltendmachung oder Verteidigung ihrer rechtlichen Interessen erforderlich ist (Abs. 1 Satz 1). Bis zum Abschluss des Verwaltungsverfahrens gilt das nicht für Entwürfe zu Entscheidungen und die Arbeiten zu ihrer unmittelbaren Vorbereitung (Abs. 1 Satz 2). Abs. 2 nennt die Gründe, aus denen die Einsicht verweigert werden darf.',
    },
    {
      ref: '§ 25 SGB X',
      url: 'https://www.gesetze-im-internet.de/sgb_10/__25.html',
      note: 'Für Sozialverfahren – Jobcenter, Rentenversicherung, Kranken- und Pflegekasse – tritt § 25 SGB X an die Stelle des § 29 VwVfG; Absatz 1 ist wortgleich. Enthält die Akte Angaben über gesundheitliche Verhältnisse, kann die Behörde den Inhalt stattdessen durch einen Arzt vermitteln lassen (Abs. 2), ohne dass der Anspruch aus Absatz 1 dadurch beschränkt wird. Die Einsicht erfolgt bei der aktenführenden Behörde (Abs. 4); Beteiligte dürfen Abschriften selbst fertigen oder Ablichtungen erhalten (Abs. 5).',
    },
    {
      ref: '§ 70 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__70.html',
      note: 'Der Widerspruch ist innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts schriftlich, elektronisch (§ 3a VwVfG) oder zur Niederschrift bei der Behörde einzulegen, die den Verwaltungsakt erlassen hat.',
    },
    {
      ref: '§ 84 SGG',
      url: 'https://www.gesetze-im-internet.de/sgg/__84.html',
      note: 'Für Bescheide von Sozialleistungsträgern (z. B. Jobcenter, Rentenversicherung, Krankenkasse) gilt statt der VwGO das SGG; die Widerspruchsfrist beträgt danach ebenfalls einen Monat nach Bekanntgabe.',
    },
  ],
  faq: [
    {
      q: 'Brauche ich einen Anwalt, um Akteneinsicht zu bekommen?',
      a: 'Nein. Der Anspruch steht den Beteiligten selbst zu, nicht nur ihren Bevollmächtigten. Ein formloses Schreiben mit Aktenzeichen, Verfahrensbezeichnung und einer konkreten Begründung, wozu Sie die Akte brauchen, genügt.',
    },
    {
      q: 'Hält der Antrag auf Akteneinsicht meine Widerspruchsfrist an?',
      a: 'Nein, und das ist der teuerste Irrtum zu diesem Thema. Legen Sie zuerst fristwahrend Widerspruch ein – ein Satz reicht, eine Begründung ist dafür nicht nötig – und beantragen Sie dann die Einsicht. Die Begründung reichen Sie nach.',
    },
    {
      q: 'Kann ich verlangen, dass mir die Akte zugeschickt wird?',
      a: 'Verlangen können Sie es nicht: Die Einsicht erfolgt grundsätzlich bei der aktenführenden Behörde (§ 25 Abs. 4 SGB X). Viele Stellen versenden auf Bitte dennoch Kopien oder Scans, weil das für beide Seiten einfacher ist. Fragen Sie danach und nennen Sie beide Möglichkeiten.',
    },
    {
      q: 'Die Kasse will mir das Gutachten nur über meinen Arzt zugänglich machen. Darf sie das?',
      a: 'Bei gesundheitlichen Angaben ja – § 25 Abs. 2 SGB X sieht die Vermittlung durch einen Arzt ausdrücklich vor. Was sie nicht darf, ist Ihnen den Inhalt vorzuenthalten: Derselbe Absatz stellt klar, dass das Recht aus Absatz 1 dadurch nicht beschränkt wird.',
    },
    {
      q: 'Was mache ich, wenn die Behörde die Einsicht einfach ablehnt?',
      a: 'Bitten Sie um eine schriftliche Begründung, welche Aktenteile ausgenommen werden und aus welchen Gründen. Erst damit lässt sich prüfen, ob die Verweigerung von § 29 Abs. 2 VwVfG beziehungsweise § 25 Abs. 3 SGB X getragen wird. Bleibt es dabei, ist das ein Punkt, den Sie im Widerspruchs- oder Klageverfahren geltend machen können – und ein Anlass für Beratung, etwa bei einem Sozialverband oder über die Beratungshilfe.',
    },
  ],
  relatedGenerators: ['akteneinsicht-behoerde', 'widerspruch-bescheid', 'datenauskunft-dsgvo'],
  lastReviewed: '2026-08-27',
};

export default guide;
