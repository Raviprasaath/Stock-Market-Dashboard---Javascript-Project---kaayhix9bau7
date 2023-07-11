
:root {    
    --leftbar-bg: #A2CDB0;
    --leftbar-color: #000000;
    --table-bg: #fdcedfb9;
    --table-trade-btn-bg: #9376E0;
    --table-head-bg: #99A98F;
    --table-data-odd-bg: #D14D72;
    --table-data-even-bg: #E9A178;
    --table-brade-btn-color: #060047;
    /* --table-head-color: #f6f608fe; */
    --table-data-odd-color: #191825;
    --table-data-even-color: #0C1E7F;
    --stocks-bg: #6b728eb8;
    /* --stock-card-bg: #46C2CB; */
    /* not taken */
    --stock-card-company: #46C2CB;
    
    --stock-card-symbol: #E0144C;
    --stock-card-btn1: #FF5858;
    --stock-card-btn2: #C8DBBE;
    --stock-card-bg-hover: #FF577F;
    --stock-card-btn1: #95CD41;
    --stock-card-btn2: #FF5C58;
    /* not taken */
    --stock-card-bg: #F2EAD3;
    --stock-card-company: #712B75;
    --stock-card-symbol: #A68DAD;
    --search-result-bg: #ADE792;
    --search-result-color: #3A1078;
    --search-result-symbol: #9BE8D8;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.5s ease-in;
}

body {
    /* background-color: #BDCDD6; */
    /* background: linear-gradient(rgb(169, 144, 126), rgb(243, 222, 186)) */
    /* background: radial-gradient(#F9D371, #EF2F88); */
    position: relative;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  
  

  

/* ---------------Whole Home page------------  */
.root-body {
    border-radius: 0.4rem;
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 4fr 1.5fr;    
}

/*---------- Nav bar --------------*/
#logo-img {
    width: 80px;
    border-radius: 50%;
    padding: 20px;
}
.left-side-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
    background-color: var(--leftbar-bg);

    border-radius: 8px;
    padding-left: 15px;
    padding-bottom: 10px;
    height: 98vh;
    width: 100%;
    margin: auto;
    margin-left: 10px;
}
.user-selection-nav-bar li {
    list-style: none;
    padding-top: 5px;
}
.user-selection-nav-bar li a {
    text-decoration: none;
    color: var(--leftbar-color);
    font-weight: 750;
    font-size: 17px;
}
.fa-solid {
    padding-right: 10px;
}

/* -------------- Main Page --------------- */
.heading-portion>h1 {
    padding: 10px;
    padding-left: 18px;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
}
.heading-portion>h1 {
    font-size: 24px;
}
.error-message {
    font-size: 18px;
    color: red;
    font-weight: 800;
}

.table-of-data {
    margin: auto;
    width: 95%;
    height: 60vh;
    background-color: var(--table-bg);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.table-of-data {
    overflow: scroll;
    text-align: center;
}

.table-of-data::-webkit-scrollbar {
    display: none;
}

#table-main {
    /* margin-left: 15px; */
    margin: auto;
}
.table-heading {
    font-weight: 800;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
}
.table-heading > th{
    padding: 5px 20px;
}
.table-heading {
    background-color: var(--table-head-bg) !important;
    color: var(--table-head-color);
}

.table-data-filling-in-script {
    font-size: 15px;
}

#table-main tr:nth-child(even) {
    background-color: var(--table-data-even-bg);
    color: var(--table-data-even-color);
}
#table-main tr:nth-child(odd) {
    background-color: var(--table-data-odd-bg);
    color: var(--table-data-odd-color);
}


.random-data-main-page {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 95%;
    padding: 10px;
    border-bottom-left-radius: 8px; 
    border-bottom-right-radius: 8px; 
    height: 30vh;
    overflow: scroll; 
    background-color: var(--stocks-bg);
}

.random-data-main-page::-webkit-scrollbar {
    display: none;
}

.stock {    
    border-radius: 8px;
    background-color: var(--stock-card-bg);
    width: 250px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: 0.3s ease;
    margin: 10px;
    text-align: center;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.403);
}
.stock-name {
    color: var(--stock-card-company);
    font-family: 'Agdasima', sans-serif;
    font-size: 16px;
    font-weight: 800;
}
.stock-symbol {
    color: var(--stock-card-symbol);
    font-size: 14px;
    font-weight: 400;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.stock:hover {
    transition: 0.3s ease;
    transform: scale(1.04);
}

.region-heading {
    font-family: 'Agdasima', sans-serif;
    font-size: 14px;
    padding-left: 15px;
    
}
.region {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(38, 37, 37);
    font-size: 15px;
}

.trade-selection {
    background-color: var(--table-trade-btn-bg);
    color: var(--table-brade-btn-color);
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    margin-left: 10px;
}
.trade-selection.active {
    background-color: rgba(12, 149, 241, 0.673);
    color: black;
    font-size: 15px;
    font-weight: 700;
}
.trade-data {
    border: none;
    padding: 7px;
    margin-top: 10px;
    border-radius: 4px;
}
.trade-data.remove {
    background-color: rgba(255, 0, 0, 0.505);
    font-size: 12px;
    width: 65px;
}
.trade-data.analytics {
    font-size: 12px;
    width: 97px;
    background-color: orange;
}

.trade-type-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 5px;

}


.data-graph-splitting {
    display: flex;
    align-items: center;
    /* background-color: rgba(236, 217, 13, 0.3); */
    justify-content: center;
    
}

#myChart {
    width: 400px;
    height: 400px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}




/* ----------right side data------------ */
.rights-side-data {
    margin-top: 20px;
}
#search-close-button {
    font-size: 18px;
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
}

#search-bar {
    height: 30px;
    font-size: 16px;
    border: none;
    width: 70%;
    padding-left: 10px;
}
#searching-section button {
    border: none;
    background-color: white;
}

#searching-section {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 270px;
}

#fetchStart {
    border: none;
    font-size: 18px;
    padding: 8px 10px;
    margin: 0;
    
}

.searching-option {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    position: absolute;
    z-index: 10;
    right: 10px;
    top: 8px;
    background-color: white;
}

.searching-option-li {
    box-shadow: 0px 10px 15px 5px rgb(46, 37, 37);
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    max-height: 60vh;
    overflow: scroll;
}

.searching-option-li::-webkit-scrollbar {
    display: none;
}

.searching-option-li {
    display: none;
    background-color: white;
}

.searching-option-li li {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 250px;
    height: fit-content;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    background-color: var(--search-result-bg);
    color: var(--search-result-color);
    margin-bottom: 10px;
}

.searching-option-li li div{
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: flex-start;
}

.searching-option-li li h4{
    font-size: 13px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;

}
.searching-option-li li h5{
    font-family:monospace;
    font-size: 14px;
    font-weight: 200px;
    padding: 0px 5px;
    background-color: var(--search-result-symbol);
}
.searching-option-li li h3{
    font-size: 16px;
    font-family:monospace;
}

.searching-option-li li i{
    opacity: 0.8;
}

.searching-option-li button {
    height: 30px;
    width: 100px;
    border: none;
    background-color: rgb(138, 26, 219);        
}
.bar-icon, .bar-close {
    display: none;
}



@media only screen and (max-width: 1024px) {
/*---------- Nav bar --------------*/
    #logo-img {
        width: 60px;
        padding: 10px;
    }
    .left-side-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;   
        border-radius: 8px;
        padding-left: 10px;
        padding-bottom: 10px;
        height: 98vh;
        width: 100%;
        margin: auto;
        margin-left: 10px;
    }

    .user-selection-nav-bar li a {
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
    }

    /* -------------- Main Page --------------- */
    .heading-portion>h1 {
        padding: 10px;
        padding-left: 15px;
        font-family:Verdana, Geneva, Tahoma, sans-serif ;
    }
    .heading-portion>h1 {
        font-size: 18px;
    }
    .error-message {
        font-size: 15px;
        color: red;
        font-weight: 800;
    }

    .table-of-data {
        margin: auto;
        width: 95%;
        height: 60vh;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .table-heading {
        font-weight: 800;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;
    }
    .table-heading > th{
        padding: 4px 20px;
    }
    .table-data-filling-in-script {
        font-size: 13px;
    }

    .random-data-main-page {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        padding: 10px;
        border-bottom-left-radius: 6px; 
        border-bottom-right-radius: 6px; 
        height: 30vh;
        overflow: scroll; 
    }


    .stock {    
        border-radius: 6px;    
        width: 220px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px;
        transition: 0.3s ease;    
        margin: 8px;
        text-align: center;
        box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.403);
    }
    .stock-name {    
        font-family: 'Agdasima', sans-serif;
        font-size: 14px;
        font-weight: 800;
    }
    .stock-symbol {
        font-size: 12px;
        font-weight: 400;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .stock:hover {
        transition: 0.3s ease;
        transform: scale(1.03);
    }

    .region-heading {
        font-family: 'Agdasima', sans-serif;
        font-size: 12px;
        padding-left: 15px;
        
    }
    .region {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 13px;
    }

    .trade-selection {
        padding: 4px 8px;
        border-radius: 5px;
        border: none;
        font-size: 12px;
        margin-left: 10px;
    }
    .trade-selection.active {
        font-size: 13px;
        font-weight: 800;
    }
    .trade-data {
        border: none;
        padding: 7px;
        margin-top: 10px;
        border-radius: 4px;
    }
    .trade-data.remove {
        font-size: 11px;
        width: 65px;
    }
    .trade-data.analytics {
        font-size: 11px;
        width: 97px;
    }

    .trade-type-selection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px 5px;
    }


    /* ----------right side data------------ */
    .rights-side-data {
        margin-top: 10px;
    }
    #search-close-button {
        font-size: 15px;
        padding: 6px 8px;
        border: none;
    }

    #search-bar {
        height: 25px;
        font-size: 15px;
        border: none;
        width: 75%;
        padding-left: 10px;
    }
    #searching-section button {
        border: none;
    }

    #searching-section {
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 270px;
    }

    #fetchStart {
        border: none;
        font-size: 15px;
        padding: 6px 8px;
    }

    .searching-option {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        position: absolute;
        right: 8px;
        top: 8px;
    }

    .searching-option-li {
        display: flex;
        flex-direction: column;
        padding: 8px;
        gap: 8px;
        max-height: 60vh;
        overflow: scroll;
    }

    .searching-option-li li {
        display: flex;
        flex-direction: row;
        gap: 8px;
        width: 250px;
        height: fit-content;
        border-radius: 6px;
        justify-content: space-between;
        align-items: center;
        padding-left: 8px;
        margin-bottom: 10px;
    }

    .searching-option-li li div{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-items: flex-start;
    }

    .searching-option-li li h4{
        font-size: 12px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;

    }
    .searching-option-li li h5{
        font-family:monospace;
        font-size: 12px;
        font-weight: 200px;
        padding: 0px 4px;
    }
    .searching-option-li li h3{
        font-size: 15px;
        font-family:monospace;
    }

    .searching-option-li button {
        height: 20px;
        width: 80px;
        border: none;
    }
  }
@media only screen and (max-width: 767px) {
    /*---------- Nav bar --------------*/
    #logo-img {
        width: 60px;
        padding: 10px;
    }
    .left-side-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;   
        border-radius: 5px;
        padding-left: 2px;
        padding-bottom: 8px;
        height: 98vh;
        width: 100%;
        margin: auto;
        margin-left: 6px;
    }

    .user-selection-nav-bar li a {
        text-decoration: none;
        font-weight: 640;
        font-size: 8.5px;
    }

    /* -------------- Main Page --------------- */
    .heading-portion>h1 {
        padding: 8px;
        padding-left: 10px;
        font-family:Verdana, Geneva, Tahoma, sans-serif ;
    }
    .heading-portion>h1 {
        font-size: 13px;
    }
    .error-message {
        font-size: 12px;
        color: red;
        font-weight: 700;
    }

    .table-of-data {
        margin: auto;
        width: 95%;
        height: 60vh;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .table-heading {
        font-weight: 800;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 8px;
    }
    .table-heading > th{
        padding: 2px 14px;
    }
    .table-data-filling-in-script {
        font-size: 10px;
    }

    .random-data-main-page {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        padding: 7px;
        border-bottom-left-radius: 4px; 
        border-bottom-right-radius: 4px; 
        height: 30vh;
        overflow: scroll; 
    }

    .stock {    
        border-radius: 4px;    
        width: 220px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6px;
        transition: 0.3s ease;    
        margin: 6px;
        text-align: center;
        box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.403);
    }
    .stock-name {    
        font-family: 'Agdasima', sans-serif;
        font-size: 12px;
        font-weight: 800;
    }
    .stock-symbol {
        font-size: 9px;
        font-weight: 400;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .stock:hover {
        transition: 0.3s ease;
        transform: scale(1.02);
    }

    .region-heading {
        font-family: 'Agdasima', sans-serif;
        font-size: 10px;
        padding-left: 10px;
        
    }
    .region {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 10px;
    }

    .trade-selection {
        padding: 2px 5px;
        border-radius: 4px;
        border: none;
        font-size: 8px;
        margin-left: 8px;
    }
    .trade-selection.active {
        font-size: 9px;
        font-weight: 700;
    }
    .trade-data {
        border: none;
        padding: 6px;
        margin-top: 8px;
        border-radius: 4px;
    }
    .trade-data.remove {
        font-size: 10px;
        width: 65px;
    }
    .trade-data.analytics {
        font-size: 10px;
        width: 97px;
    }

    .trade-type-selection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px 5px;
    }


    /* ----------right side data------------ */
    .rights-side-data {
        margin-top: 8px;
    }
    #search-close-button, #fetchStart {
        font-size: 10px;
        padding: 9px 8px;
        border: none;
    }

    #search-bar {
        height: 25px;
        font-size: 14px;
        border: none;
        width: 70%;
        padding-left: 8px;
    }
    #searching-section button {
        border: none;
    }

    #searching-section {
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 240px;
    }

    

    .searching-option {
        display: flex;
        flex-direction: column;
        margin-right: 8px;
        position: absolute;
        right: 8px;
        top: 6px;
    }

    .searching-option-li {
        display: flex;
        flex-direction: column;
        padding: 6px;
        gap: 6px;
        max-height: 60vh;
        overflow: scroll;
    }

    .searching-option-li li {
        display: flex;
        flex-direction: row;
        gap: 8px;
        width: 220px;
        height: fit-content;
        border-radius: 4px;
        justify-content: space-between;
        align-items: center;
        padding-left: 8px;
        margin-bottom: 10px;
    }

    .searching-option-li li div{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-items: flex-start;
    }

    .searching-option-li li h4{
        font-size: 10px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;

    }
    .searching-option-li li h5{
        font-family:monospace;
        font-size: 10px;
        font-weight: 200px;
        padding: 0px 4px;
    }
    .searching-option-li li h3{
        font-size: 11px;
        font-family:monospace;
    }

    .searching-option-li button {
        height: 20px;
        width: 80px;
        border: none;
    }
    
  }
@media only screen and (max-width: 480px) {
    .root-body {
        border-radius: 0.4rem;
        display: grid;
        height: 100vh;
        grid-template-columns: 2fr 1.1fr;    
    }
    /*---------- Nav bar --------------*/
    #logo-img {
        width: 50px;
    }
    .bar-close {
        display: none;
        width: 10px;
        position: absolute;
        padding-left: 19dvw;
        z-index: 2;
        transition: 1s ease-in-out;
    }
    .bar-icon {
        transition: 1s ease-in-out;
        display: inline-block;
        width: 10px;
        position: absolute;
        padding-left: 5px;
        z-index: 0;
    }
    
    .left-side-bar {
        transition: 2s ease;
        position: absolute;
        z-index: 0;
        display: none;
        flex-direction: column;
        justify-content: space-between;   
        border-radius: 5px;
        padding-left: 5px;
        padding-bottom: 8px;
        height: 400px;
        width: 23%;
        margin: auto;
        margin-left: 2px;
    }

    .user-selection-nav-bar li a {
        text-decoration: none;
        font-weight: 640;
        font-size: 8.5px;
    }

    /* -------------- Main Page --------------- */
    .heading-portion>h1 {
        padding: 10px;
        padding-left: 25px;
        font-family:Verdana, Geneva, Tahoma, sans-serif ;
    }
    .heading-portion>h1 {
        font-size: 10px;
    }
    .error-message {
        font-size: 10px;
        color: red;
        font-weight: 700;
    }

    .table-of-data {
        margin: auto;
        width: 95%;
        height: 50vh;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .table-heading {
        font-weight: 800;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 6px;
    }
    .table-heading > th{
        padding: 2px 10px;
    }
    .table-data-filling-in-script {
        font-size: 8px;
    }

    .random-data-main-page {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        padding: 5px;
        border-bottom-left-radius: 4px; 
        border-bottom-right-radius: 4px; 
        height: 30vh;
        overflow: scroll; 
    }

    .stock {    
        border-radius: 3px;    
        width: 180px;
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px;
        transition: 0.3s ease;    
        margin: 5px;
        text-align: center;
        box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.403);
    }
    .stock-name {    
        font-family: 'Agdasima', sans-serif;
        font-size: 9px;
        font-weight: 800;
    }
    .stock-symbol {
        font-size: 7px;
        font-weight: 400;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .stock:hover {
        transition: 0.3s ease;
        transform: scale(1.02);
    }

    .region-heading {
        font-family: 'Agdasima', sans-serif;
        font-size: 8px;
        padding-left: 10px;
        
    }
    .region {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 8px;
    }

    .trade-selection {
        padding: 2px 4px;
        border-radius: 3px;
        border: none;
        font-size: 6px;
        margin-left: 6px;
    }
    .trade-selection.active {
        font-size: 7px;
        font-weight: 600;
    }
    .trade-data {
        border: none;
        padding: 5px;
        margin-top: 8px;
        border-radius: 4px;
    }
    .trade-data.remove {
        font-size: 8px;
        width: 45px;
    }
    .trade-data.analytics {
        font-size: 8px;
        width: 75px;
    }

    .trade-type-selection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px 5px;
    }


    /* ----------right side data------------ */
    .rights-side-data {
        margin-top: 8px;
    }
    #search-close-button, #fetchStart {
        font-size: 8px;
        padding: 9px 9px;
        border: none;
    }

    #search-bar {
        /* height: 25px; */
        font-size: 10px;
        border: none;
        width: 70%;
        padding-left: 4px;
    }
    #searching-section button {
        border: none;
    }

    #searching-section {
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 180px;
    }

    

    .searching-option {
        display: flex;
        flex-direction: column;
        margin-right: 6px;
        position: absolute;
        right: 6px;
        top: 6px;
    }

    .searching-option-li {
        display: flex;
        flex-direction: column;
        padding: 8px;
        gap: 5px;
        max-height: 40vh;
        overflow: scroll;
    }

    .searching-option-li li {
        display: flex;
        flex-direction: row;
        gap: 4px;
        width: 160px;
        height: fit-content;
        border-radius: 3px;
        justify-content: space-between;
        align-items: center;
        padding-left: 6px;
        margin-bottom: 10px;
    }

    .searching-option-li li div{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-items: flex-start;
    }

    .searching-option-li li h4{
        font-size: 8px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;

    }
    .searching-option-li li h5{
        font-family:monospace;
        font-size: 8px;
        font-weight: 200px;
        padding: 0px 4px;
    }
    .searching-option-li li h3{
        font-size: 9px;
        font-family:monospace;
    }

    .searching-option-li button {
        height: 20px;
        width: 80px;
        border: none;
    }
  }
