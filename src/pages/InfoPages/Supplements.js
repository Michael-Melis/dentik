import React from "react";
import { StyledHowToClean } from "../../styles/StyledHowToClean";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StyledIconCircle, StyledList } from "../../styles/StyledInformation";
import { StyledSupplementList } from "../../styles/StyledSupplements";

const Supplements = () => {
  return (
    <StyledHowToClean>
      <h1>Vliv výživy na zuby</h1>
      <p>
        V prevenci vzniku zubního kazu má správná výživa nezastupitelnou roli.
        Výživa má vliv na zuby už před jejich prořezáním. <br /> <br /> Hlavně
        vyvážený příjem vápníku, fosforu, fluoru, bílkovin, tuků, cukrů a
        vitamínů, a to hlavně vitamínu D má významný vliv pro správný vývoj
        zubu.
        <br /> <br />
        Nejrizikovější potraviny pro vznik zubního kazu jsou ty, které obsahují
        cukry, jako jsou sladkosti a slazené nápoje. Bakterie tyto sladkosti
        rozloží a díky nim sníží pH v ústech na takovou hodnotu, která je pro ně
        ideální k naleptání skloviny a tvorbě kazu. Pokud tedy dochází ke
        konzumaci slazených nápojů a sladkostí často, dochází stále
        k poškozování zubní skloviny a tím se velmi zvyšuje riziko vzniku
        zubního kazu.
        <br /> <br /> Nevhodné jsou ale i kyselé potraviny a nápoje, které
        pomocí kyselin dokáží narušit povrch zubu. Jedná se hlavně o citrusové
        plody, ocet, ledové čaje, energetické nápoje, džusy, cola, slazené
        sycené nápoje atd
      </p>
      <h1>Jak tomu předejít?</h1>
      <StyledSupplementList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>omezit příjem cukrů </p>
        </StyledList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>nevystavovat zuby kyselým potravinám a nápojům během celého dne</p>
        </StyledList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>pít neslazené nápoje (voda, neslazený čaj)</p>
        </StyledList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>
            odstranit zbytky jídla ze zubů co nejdříve po požití, v případě
            kyselých potravin počkat déle, jelikož kyselé potraviny snižují pH v
            ústech – pokud si nemůžete vyčistit zuby, můžete alespoň vypláchnout
            ústa čistou vodou a tím neutralizovat prostředí v ústech
          </p>
        </StyledList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>
            sladké potraviny konzumovat spolu s hlavními jídly (pokud se
            konzumují samostatně během dne, jsou pro vznik kazu rizikovější)
          </p>
        </StyledList>
        <StyledList>
          <StyledIconCircle icon={faCircle} />
          <p>
            po večerním čištění zubů je doporučeno nic nejíst, popřípadě pít
            pouze čistou vodu <span>(Dentavia group, 2017)</span>
          </p>
        </StyledList>
      </StyledSupplementList>
      <h1>Zuby a těhotenství</h1>
      <p>
        Zdraví zubů během těhotenství závisí na péči těhotné ženy o své zuby.
        Není pravda, že by plod bral matce ze zubů vápník a tím zapříčinil
        zhoršení stavu jejího chrupu. Za zvýšenou kazivost a celkově kvalitu
        zubů v těhotenství často mohou chutě těhotné ženy, které vedou ke
        zvýšené konzumaci sladkostí a kyselých nápojů či pokrmů, což má vliv na
        pH v ústech a následné poškození zubní skloviny.
      </p>
      <p>
        Výživa těhotné matky má vliv na vývoj zubů plodu. Pokud těhotná matka
        přijímá nevyváženou stravu, může to vést k poruchám mineralizace
        skloviny u dítěte a měnit její tvrdost a odolnost. Matka by měla dbát na
        dostatečný příjem potravy, dostatek vitamínů (hlavně vitamínu D),
        vyvážený poměr vápníku, fluoru, fosforu, bílkovin a také dostatek
        stopových prvků jako jsou molybden, selen aj.
      </p>
      <p>
        Pokud bude těhotná žena jíst častěji a méně zdravá jídla, než na která
        byla předtím zvyklá, měla by tomu přizpůsobit i péči o zuby a čištění
        dvakrát denně přidat i čištění po každém jídle. Jediná výjimka je po
        konzumaci ovoce, jelikož ovocné kyseliny působí zhruba 1-2 hodiny po
        pozření na zubní sklovinu a mechanické čištění kartáčkem by ji v tu
        chvíli mohlo poškodit, proto bychom měli s čištěním zhruba dvě hodiny
        počkat. Také časté zvracení při graviditě ničí zubní tkáň, zejména
        kyselé trávicí šťávy, které se dostávají do úst, oslabují zubní
        sklovinu. Po zvracení je doporučeno vypláchnout si důkladně ústa vodou,
        ale nečistit si zuby hned po zvracení, tím by se sklovina mohla ještě
        více poškodit nebo bychom tím mohli vyvolat další zvracení.{" "}
        <span>(Kubalová, 2020; Slezáková, 2016; Dentavia group, 2017)</span>
      </p>
    </StyledHowToClean>
  );
};

export default Supplements;
