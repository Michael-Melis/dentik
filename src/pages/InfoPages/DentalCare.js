import React, { useState } from "react";
import {
  StyledHowToClean,
  Line,
  FloatingBtn,
} from "../../styles/StyledHowToClean";
import mToothbrush from "../../img/manualToothbrush.png";
import electricToothbrush from "../../img/electricToothbrush.png";
import jednosvazkovy from "../../img/jednosvazkovy.png";
import mezizubni from "../../img/mezizubni.png";
import mezizubni2 from "../../img/mezizubni2.png";
import pasta from "../../img/pasta.png";
import gel from "../../img/gel.png";
import gum from "../../img/gum.png";
import { HashLink } from "react-router-hash-link";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const DentalCare = () => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <StyledHowToClean>
      <h1 id="top">Jak vybrat dentální pomůcky?</h1>
      <HashLink smooth to="#toothbrush" scroll={(el) => scrollWidthOffset(el)}>
        <h2>Kartáčky</h2>
      </HashLink>
      <ul>
        <HashLink smooth to="#manual" scroll={(el) => scrollWidthOffset(el)}>
          <li>Manuální klasický</li>
        </HashLink>
        <HashLink smooth to="#electric" scroll={(el) => scrollWidthOffset(el)}>
          <li>Elektrické kartáčky</li>
        </HashLink>
        <HashLink
          smooth
          to="#oscilation"
          scroll={(el) => scrollWidthOffset(el)}
        >
          <li>Elektrický oscilační kartáček </li>
        </HashLink>
        <HashLink smooth to="#sonic" scroll={(el) => scrollWidthOffset(el)}>
          <li>Elektrický sonický kartáček</li>
        </HashLink>
        <HashLink smooth to="#single" scroll={(el) => scrollWidthOffset(el)}>
          <li>Jednosvazkový kartáček</li>
        </HashLink>
        <HashLink smooth to="#inner" scroll={(el) => scrollWidthOffset(el)}>
          <li>Mezizubní kartáčky</li>
        </HashLink>
      </ul>
      <Line />
      <HashLink smooth to="#toothpaste" scroll={(el) => scrollWidthOffset(el)}>
        <h2>Zubní pasta</h2>
      </HashLink>
      <ul>
        <HashLink smooth to="#chemical" scroll={(el) => scrollWidthOffset(el)}>
          <li>Chemické látky obsažené v zubních pastách</li>
        </HashLink>
        <HashLink smooth to="#gels" scroll={(el) => scrollWidthOffset(el)}>
          <li>Dentální gely </li>
        </HashLink>
      </ul>
      <Line />
      <HashLink
        smooth
        to="#anotherDental"
        scroll={(el) => scrollWidthOffset(el)}
      >
        <h2>Další doplňující pomůcky</h2>
      </HashLink>
      <ul>
        <HashLink smooth to="#floss" scroll={(el) => scrollWidthOffset(el)}>
          <li>Dentální nit</li>
        </HashLink>
        <HashLink smooth to="#mouthwash" scroll={(el) => scrollWidthOffset(el)}>
          <li>Ústní voda</li>
        </HashLink>
        <HashLink
          smooth
          to="#mouthshower"
          scroll={(el) => scrollWidthOffset(el)}
        >
          <li>Ústní irigátor (Ústní sprcha)</li>
        </HashLink>
        <HashLink
          smooth
          to="#chewinggum"
          scroll={(el) => scrollWidthOffset(el)}
        >
          <li>Žvýkačky bez cukru</li>
        </HashLink>
      </ul>
      <Line />

      <h1 id="toothbrush">Kartáčky</h1>
      <h2 id="manual">Manuální klasický</h2>
      <p>
        Hlavice kartáčku by měla být malá kolem 2cm, větší kartáčky se
        nedoporučují, protože se špatně dostanou do všech špatně přístupných
        prostorů dutiny ústní a jsou méně obratné.
      </p>
      <FloatingBtn>
        <HashLink smooth to="#top" scroll={(el) => scrollWidthOffset(el)}>
          top
        </HashLink>
      </FloatingBtn>
      <p>
        Štětiny by měly být měkké, jsou šetrné k vašim zubům, jsou poddajnější a
        proto se lépe dostanou do mezer a špatně přístupným záhybům.
      </p>
      <p>
        Informace o měkkosti na obalech kartáčků mohou být ale zavádějící. Měkký
        kartáček u jedné značky může představovat střední tvrdost u jiné značky
        apod.
      </p>
      <p>
        Používání tvrdých kartáčků může způsobit poškození dásní i samotných
        zubů.
        <span> Mandausová, 2014</span>
      </p>

      <p>
        S tvrdosti štětin souvisí i jejich hustota. Více štětin znamená menší
        tvrdost. Stomatologové doporučují štětiny o průměru od 0,1 do 0,15
        milimetrů. Klasické kartáčky, které mají menší počet štětin než tři
        tisíce, nejsou kvalitní.
      </p>
      <p>Štětiny by měly být usazené v jedné rovině stejně vysoko.</p>
      <p>
        U kartáčků, kde je různá délka štětin nebo jsou štětiny posazené různě
        vysoko se zkrácené štětiny nemohou dostat tam, kam je potřeba. Přesto,
        že kartáčky se zarovnanou plochou vypadají obyčejně, jsou nejúčinnější.
      </p>

      <p>
        Rukojeť má za úkol jen to, aby se vám pohodlně držela, na kvalitu
        čištění ale vliv nemá.
      </p>
      <p>
        Pamatujte si, že kartáček byste měli měnit nejméně jednou za tři měsíce.
      </p>
      <p>Pokud se vám ale začnou třepit štětiny, vyměňte ho dřív.</p>
      <p>
        Pokud se vám rychle začíná třepit kartáček může to být i známka toho, že
        při čistění na své zuby příliš tlačíte.
      </p>
      <p>
        Pamatujte, že opotřebený kartáček již správně nečistí, ale naopak
        zraňuje tkáně
      </p>
      <p>
        Pokud patříte mezi ty, kteří moc tlačí na kartáček, je dobré koupit si
        elektrický kartáček, který má tlakový senzor. Ten vás upozorní, že moc
        tlačíte na kartáček, díky němu si časem osvojíte, jak velký tlak máte
        vyvíjet na zuby. <span>(Šedý, 2016) (Diente.cz, 2021)</span>
      </p>
      <p>
        Při používání kartáčku je důležitá hlavně správná technika čištění,
        pokud nemáme osvojenou správnou techniku čištění a nečistíme si zuby
        pečlivě, nepomůže nám ani ten nejlepší možný kartáček.
        <span> (Šedý, 2016)</span>
      </p>
      <img src={mToothbrush} alt="manual toothbrush" />
      <h2 id="electric">Elektrické kartáčky</h2>
      <p>
        Podle výzkumu jsou elektrické kartáčky účinnější oproti klasickým
        manuálním kartáčkům, hlavně u ortodontických pacientů. Je ale důležité
        správné používání kartáčku, aby bylo čištění efektivní, to záleží na
        typu kartáčku a doporučení výrobce. <span>(Mazánek, 2014)</span>
      </p>
      <h2 id="oscilation">Elektrický oscilační kartáček</h2>
      <p>
        Kartáčky s kulatým tvarem hlavy kartáčku, která čistí zuby rotačním
        pohybem tam a zpět, tento typ kartáčku je méně vhodný, jelikož často
        dochází k recesi dásně. <span> (Slezáková, 2016)</span>
      </p>
      <img src={electricToothbrush} alt="Elektric oscilation" />

      <h2 id="sonic">Elektrický sonický kartáček</h2>
      <YoutubeEmbed embedId="ZEg7n67edpM" />
      <h2 id="single">Jednosvazkový kartáček</h2>
      <p>
        Je tvořen z jednoho svazku vláken, proto „jednosvazkový“. Je určen
        primárně k dočišťování špatně přístupných míst např. stoliček, při
        fixních ortodontických aparátech („rovnátek na pevno“) apod.{" "}
        <span> (Mazánek, 2015)</span>
        <img src={jednosvazkovy} alt="single toothbrush" />
      </p>
      <h2 id="inner">Mezizubní kartáčky</h2>
      <p>
        Mezizubní prostory tvoří až 40% povrchu zubů, proto je nutné každodenní
        používání mezizubních kartáčků pro zdravé a kompletně vyčištěné zuby.{" "}
      </p>
      <p>
        S klasickým kartáčkem se nedostaneme do mezizubních prostor, kde se
        usazují zbytky potravy.{" "}
      </p>
      <img src={mezizubni} alt="Mezizubni kartacek" />
      <p>
        Mezizubní kartáčky slouží nejen k čištění mezizubních prostorů, ale i
        k prostorům mezi pevným ortodontickým aparátem (pevným rovnátkům) a
        dásní či zubem.
      </p>
      <p>
        Mezizubní kartáčky nepoužíváme u neprůchodných mezizubních prostorech.
      </p>
      <p>
        Mezizubní kartáček je tvořen syntetickými vlákny upevněnými na centrální
        kovovou spirálu.
      </p>
      <p>
        Na trhu jsou k dostání samostatné mezizubní kartáčky nebo výměnné
        koncovky, které se jednoduše nandají do rukojeti.{" "}
      </p>
      <p>
        Existují různé velikosti mezizubních kartáčků. Velikosti se od sebe
        barevně liší
      </p>
      <img src={mezizubni2} alt="mezizubni kartacek" />
      <p>
        Pozor ale na to, že každá firma má své velikosti jinak barevně rozdělené
        např. červený kartáček od jedné značky má úplně jinou velikost, než když
        si červený kartáček koupíte u značky jiné, proto je důležité vybírat
        kartáček podle velikosti, ne podle barev!{" "}
      </p>
      <p>
        S výběrem správných rozměrů vám pomůže dentální hygienistka. Většinou
        musíme používat dvě a více velikostí mezizubních kartáčků k vyčištění
        všech mezizubních prostorů, protože málokdy má někdo všechny mezizubní
        prostory stejně velké.
      </p>
      <p>
        Používáním se kartáček opotřebovává a dochází k deformaci jeho tvaru
        (ohnutí středového drátku) a deformaci štětin, tím dochází ke snižování
        efektu čištění a zvyšuje se možnost poranění nejen dásní ale i jiných
        tkání dutiny ústní, proto je důležité pravidelně kontrolovat opotřebení
        kartáčku a dle potřeby vyměnit za nový.
        <span> (Mazánek, 2015; Šedý, 2016)</span>
      </p>
      <Line />
      <h1 id="toothpaste">ZUBNÍ PASTA</h1>
      <p>
        Zubní pasta bývá hlavně reklamním lákadlem, které lživě slibuje dokonale
        bílý chrup.
      </p>
      <p>
        Zubní pasta pro dospělé by měla obsahovat fluor, díky kterému dochází
        k posílení tvrdé zubní tkáně a částečně i ochraně proti zubnímu kazu.
        Pasta je však hlavně doplňujícím prostředkem, a tak výběr je zcela na
        vás a na tom jakou chuť, vůni či značku pasty máte nejraději a nejvíce
        vám vyhovuje. <span> (Mandausová, 2014) </span>
      </p>
      <img src={pasta} alt="zubni pasta" />
      <h2 id="chemical">Chemické látky obsažené v zubních pastách</h2>
      <p>
        Fluoridy jsou nejdůležitější složkou v zubních pastách, mají za úkol
        zpomalit demineralizaci a podpořit remineralizaci
      </p>
      <p>
        Fluor v zubních pastách snižuje kazivost zubů při každodenním používání
        zhruba o 20%.
      </p>
      <p>
        Standartní zubní pasty obsahují koncentraci fluoridů 1000-1500ppm
        (0,15%), dětské pasty mají 200-500 ppm, dále lze v lékárnách zakoupit
        terapeutické pasty s vyšším obsahem fluoridů (více než 1500 ppm), které
        slouží jako terapeutický prostředek při vysoké kazivosti.
      </p>
      <p>
        Dětské zubní pasty mají snížený obsah fluoridů, kvůli možnosti, že může
        být dítětem pasta spolykána a fluor obsažený v pastě se téměř všechen
        absorbuje z trávicí soustavy do organismu. Z tohoto důvodu by měla být
        dětem pasta dávkovaná rodiči. <span> (Šedý, 2016)</span>
      </p>
      <h2 id="gels">Dentální gely</h2>
      <p>
        Dentální gely jsou aplikovány přímo na zuby, tak se ionty fluoru ochotně
        zabudují do zubní skloviny a dojde k remineralizaci.
      </p>
      <p>
        Taková sklovina je pak silnější a odolnější ke vzniku kazu. Proto gely
        používáme k lokální fluoridaci zubu jako prevenci zubního kazu, k léčbě
        počínajícího zubního kazu a ošetření citlivých zubů.{" "}
      </p>
      <p>
        Zubní gely se roztírají po povrchu zubů po dobu asi 2 minut, přebytek
        gelu se vyplivne a ústa se nevyplachují. Takto bychom měli přípravek
        používat jedenkrát týdně v případě, že nemáme fluorózu kostí nebo zubní
        skloviny, v tom případě by se zubní gely neměli používat vůbec.{" "}
      </p>
      <p>
        Cena fluoridačních gelů se pohybuje mezi 150 – 700 Kč, to záleží na typu
        výrobce a velikosti balení. Jedno větší balení ale vystačí pro celou
        rodinu až na několik měsíců. <span> (Kohoutová, 2012)</span>
      </p>
      <img src={gel} alt="zubni gel" />
      <Line />
      <h1 id="anotherDental">DALŠÍ DOPLŇUJÍCÍ POMŮCKY</h1>
      <h2 id="floss">Dentální nit</h2>

      <p>
        Dentální nitě využíváme v místech, kam se nedostaneme mezizubním
        kartáčkem tzn. do velmi úzkých mezizubních prostor.
      </p>
      <p>
        Pokud s jejich používáním nemáte zkušenosti, vyberte si nitě
        navoskované, se kterými se lépe pracuje začátečníkům. Až získáte cvik,
        doporučuje se přejít na nevoskovanou dentální nit, jelikož odstraňuje
        zubní plak mnohem efektivněji.
        <span> (Mandausová, 2014; Ivaničová, 2021)</span>
      </p>
      <YoutubeEmbed embedId="cfjOjujUqEg" />

      <h2 id="mouthwash">Ústní voda</h2>
      <p>
        Ústní voda je kosmetický doplněk pro ústní hygienu. Většinou obsahuje
        různé antibakteriální látky a fluoridy, které pomáhají zabránit vzniku
        zubního kazu.
      </p>
      <p>
        Stejně jako zubní pastu, vybíráme ústní vodu podle nám nejvíce příjemné
        chuti nebo značky.
      </p>
      <p>
        Používat ústní vodu stačí jednou denně po čištění zubů, nebo si můžeme
        ústní vodou vypláchnout ústa po jídle pro pocit svěžího dechu
      </p>
      <p>
        Některé ústní vody mohou zabarvovat zuby a negativně ovlivnit chutě,
        proto by jejich používání mělo být jen dočasné, například po dentální
        hygieně od profesionála, jako je dentální hygienistka nebo stomatolog.{" "}
        <span> (Mandausová, 2014)</span>
      </p>
      <h2 id="mouthshower">Ústní irigátor (Ústní sprcha)</h2>
      <p>
        Ústní irigátor odstraňuje plak na principu pulzního čištění a tlaku
        vody.{" "}
      </p>
      <p>Ústní sprcha ale nenahrazuje kartáček.</p>
      <p>
        Tlak vody mohou odstranit plak jen po jeho předchozím narušení
        kartáčkem.{" "}
      </p>
      <p>
        Ústní sprchu je vhodné používat k čištění chrupu pokud máte
        parodontitidu, fixní protetickou náhradu, ortodontickou fixní aparaturu
        nebo implantáty. <span> (Slezáková, 2016)</span>
      </p>
      <h2 id="chewinggum">Žvýkačky bez cukru</h2>
      <p>
        Žvýkáním žvýkaček přispíváme v prevenci zubního kazu jelikož se zvyšuje
        produkce slin až o 300% a tím dochází k neutralizaci kyselin zubního
        povlaku a odstraňují se zbytky potravy, proto už po 20 minutách žvýkání
        žvýkačky bez cukru dojde k navrácení pH zubního plaku do neutrálních
        hodnot.
      </p>
      <p>Je ale důležité, aby žvýkačky neobsahovali cukr. </p>
      <p>
        K mechanickému setření plaku pomocí žvýkání ale nedochází v mezizubních
        prostorech a jiných oblastech, proto žvýkačka nemůže být považována za
        náhražku kvalitního vyčištění zubů.
        <span> (Slezáková, 2016; Mazánek, 2014; Šedý, 2016)</span>
      </p>
      <p>
        Vhodné jsou například žvýkačky Apa gum které obsahují Xylitol což je
        přírodní sladidlo, které pomáhá předcházet vzniku zubního kazu a navíc
        v kombinaci s vápníkem a fosfátem se podílí na remineralizaci zubní
        skloviny. <span> (Apacare)</span>
      </p>
      <img src={gum} alt="Zvykacky bez cukru" />
      <p></p>
      <p></p>
    </StyledHowToClean>
  );
};

export default DentalCare;
