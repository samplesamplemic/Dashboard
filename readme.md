<a name="readme-top"></a>

# <div align="center">DASHBOARD STARTPAGE</div>
Questa Dashboard Startpage è pensata per offrire una panoramica su alcune news dal mondo ed un insieme di servizi per organizzare al meglio la giornata.

La schermata iniziale è suddivise nelle seguenti sezioni: Produttività, Calendario e Gaming News, interscambiabili grazie ai tre bottoni di riferimento.

### PRODUTTIVITÀ  
Questa sezione contiene un widget per la creazione di todos in cui raccogliere eventuali cose da fare, pensieri sparsi. 

Successivamente troviamo uno spazio per delle sticky notes, dei classici post-it per segnare informazioni più volatili ed estemporanee.

Infine un pomodo timer per scandire i momenti di studio e concentrazione.  
  
### CALENDARIO  
Questa sezione contiene un calendario in cui programmare appuntamenti, attività ed eventi con la possibilità di impostarli, aggiornali, diversificarli visivamente e definirli temporalmente in maniera interattiva.  
  
### GAMING NEWS  
Questa sezione contiene un widget che raccoglie le ultime news da tre testate giornalistiche nel campo gaming con la possibilità di filtrare per testata.

Di seguito una lista di ultimi gameplay legati ai giochi del momento da IGN con la possibilità di visionarli direttamente nella dashboard in uno specchietto personalizzato; è inoltre possibile salvare all'interno di una sezione segnalibri eventuali video da vedere in seguito.

In abbinamento vi anche un calendario scadenzato con le uscite giochi per le varie console da consultare avanti e indietro nel tempo.  

<br/>

## Skill Set  
<table>
<tr>
  <td valign="top" width="33%">

  ### Frontend
  <div align="center">
    <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="60" /></a>  
    <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="60" /></a>  
    <a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="60" /></a>  
    <a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="60" /></a>  
    <a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="60" /></a>  
    <a href="https://www.tailwindcss.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="60" /></a>  
    <a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="60" /></a>  
  </div>
  </td>
  <td valign="top" width="33%">

  ### Backend  
  <div align="center">  
    <a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="60" /></a>  
    <a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="60" /></a>  
    <a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="60" /></a>  
    <a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="60" /></a>  
    <a href="https://www.mysql.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="60" /></a>  
    <a href="https://www.strapi.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/strapi.svg" alt="Strapi" height="60" /></a>  
  </div>
  </td>
  <td valign="top" width="33%">

  ### Team  
  - [Antonio Ruggiero](https://github.com/Tonyrgg)  
  - [Flavia Soreca](https://github.com/FlaviaSo)  
  - [Marco Spicuzza](https://github.com/MarcoSpicuzza)  
  - [Michele La Torre](https://github.com/samplesamplemic)  
  - [Riccardo Mannino](https://github.com/RiccardoMannino)  
  - [Riccardo Ruggiero](https://github.com/Riccardo1091)  
  </td>
</tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Di seguito le istruzioni per installare le dipende dell'app React, del backend su Strapi, avviare i due server ed il file accessorio per lo scraping delle news gaming.

### Prerequisiti

1. Eseguire il seguente comando nella root e successivamente nella cartella backend:

  ```sh
  npm i
  ```
2. Avviare con il live server di VScode il file "newsFetch.js" in /src.

3. Avviare il server dalla cartella "backend" con il seguente comando:
```sh
  npm run develop
  ```
4. Avviare l'app react dalla root con il seguente comando:
```sh
  npm start
  ```

### Utilizzo

1. Raggiugere `http://localhost/3000`

2. Interagire con i 3 bottoni verticali per alternare le tre schermate a destra.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dettagli tecnici

La dashboard è stata progettata inizialmente su Figma attraverso varie prove condivise con il team.<br/><br/>
Abbiamo adottato un set stabilito di regole per font, spaziature e modularità dei widget, lo stile generale è ispirato al Japandi con effetti di glass design, pattern essenziale all'insegna della leggerezza visiva. <br/><br/>
Abbiamo cercato di rispettare per quanto permetta una dashboard le regole del responsive seguendo i breakpoint offerti da Tailwind, libreria di stile selezionata per il progetto.
<br/><br/>