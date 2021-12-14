import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { StyledHowToClean, Line } from "../../styles/StyledHowToClean";

const HowToClean = () => {
  return (
    <StyledHowToClean>
      <h1>
        Jak správne čistit zuby
        <br /> kartáčkem?
      </h1>
      <p>Existuje několik technik pro čištění zubů.</p>
      <p>Dnes je nejvíce používána modifikovaná Bassova metoda.</p>
      <p>
        Stejně jako u Bassovy metody, i u většiny technik přikládáme hlavičku
        kartáčku v horizontální poloze pod úhlem 45°, výjimka je u vnitřní
        strany řezáků (tam kde na ně doléhá jazyk), jedině tam je kartáček
        z anatomických důvodů ve svislé poloze.
      </p>
      <p>
        Čistíme směrem od dásně ke korunce, tzv. od červeného k bílému, tento
        pohyb bychom měli opakovat na každý zub 10-15 krát.
      </p>
      <YoutubeEmbed embedId="eo3M5CEGZQ4" />
      <p>
        Ať už zvolíme jakoukoli metodu čištění, musíme poté zvlášť kartáčkem
        dočistit zadní plošky posledních zubů a kousací plošky, které dokonale
        dočistíme jednosvazkovým kartáčkem.
      </p>

      <p>
        Dále je třeba vyčistit mezizubní prostory mezizubními kartáčky, popř.
        mezizubní nití.
        <span> Šedý, 2016</span>
      </p>

      <Line />
      <h1>Jak správně čistit mezizubním kartáčkem?</h1>
      <h2>Jak poznat správnou velikost mezizubních kartáčků?</h2>
      <p>
        S výběrem vám pomůže vaše dentální hygienistka, popřípadě stomatolog.
        Můžete si ale i poradit sami, dle následujících rad. Pokud si zakoupíte
        balení, které obsahuje všechny velikosti mezizubních kartáčků a
        vyzkoušíte do jakého prostoru vám vyhovuje která velikost. Po zvolení
        správných velikostí si koupíte už jen vám vyhovující velikosti kartáčků.
      </p>
      <p>
        Nesmíte zavádět mezizubní kartáček mezi zuby ztuha, ale ani příliš
        zlehka. Pokud jde zavést kartáček ztuha, znamená to, že je kartáček
        příliš velký, dráždí vám dáseň a měli byste zvolit menší velikost. Pokud
        jde zavést příliš zlehka, měli byste naopak zvolit velikost větší,
        protože příliš malý kartáček vám nedokáže dostatečně vyčistit daný
        mezizubní prostor. Pokud bojujete se zaváděním kartáčku do mezizubního
        prostoru, může to být nesprávným úhlem zavádění, tento problém se
        nejčastěji objevuje u křivých zubů.
      </p>
      <p>Názorná ukázka jak správně čistit mezizubní prostory:</p>
      <YoutubeEmbed embedId="XL9YtmsSlXI" />
      <h3>
        POZOR: Je zcela normální, že během prvních 14 dní dochází k mírnému
        krvácení dásní.
      </h3>
      <p>
        Pokud se ale krvácení neustálí ani po 14 dnech, obraťte se na svou
        dentální hygienistku. Příčinami déle trvajícího krvácení dásní můžou být
        špatně zvolená velikost mezizubního kartáčku nebo neodstraněný zubní
        kámen.
        <span> Ivaničová, 2021</span>
      </p>
      <Line />
      <h1>Proč je důležité chodit pravidelně na preventívni prohlídky?</h1>
      <p>
        Preventivní prohlídky jsou důležité pro včasné podchycení jakéhokoli
        problému/onemocnění v dutině ústní. Dále výrazně snižuje výskyt
        komplikací a také vaše finanční náklady za ošetření, protože prevence je
        mnohem méně nákladná nežli řešení zdravotních problémů a jejich
        následků.
        <span> Šedý, 2016</span>
      </p>
    </StyledHowToClean>
  );
};

export default HowToClean;
