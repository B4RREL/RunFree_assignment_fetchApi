// const artApi = "http://artist.myanmarlocalartists.com/api/comics";
const artistApi = "https://artist.myanmarlocalartists.com/api/artists";

let response;
let data;
let isModal;
let  fetchData = async (url) => {
   
     
         response = await fetch(url);
        data = await response.json();
       console.log(data);
       
  
    showData(data);
   
   
}



let showData = (data) => {
            
    for (const artist of data) {
        let card = document.createElement('div');
        card.classList.add("card");
        card.classList.add("col-lg-3");
        card.classList.add("col-sm-12");
        card.style.marginTop = "1rem";
    let inner_html = `
    <img src="${artist.artist_pp}" style="height: auto;" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${artist.artist_name}</h5>
      <p class="card-text">Artist type: ${artist.artist_type}</p>
      <button type="button" class="btn btn-primary" onclick="select('${artist.id}')">
More
</button>
    </div>`;
    card.innerHTML = inner_html;
     document.getElementById('artists').appendChild(card);

   
}
}

function unshow(){
    
    let element = document.getElementById('modal_artist') //
    element.removeChild(element.firstChild);
 
}

function select (unique) {
    

        let artist = data.filter((item) => item.id == unique);
        console.log(artist);
        

        
            let modal = document.createElement('div');
        modal.classList.add("artist-overlay");

         

        let inner_html = `<div class="artist-container"><img src="${artist[0].artist_cover}" alt="pic" class="img artist-img" />
        <div class="artist-content">
          <div class="artist-header">
              <img src="${artist[0].artist_pp}" alt="" class="img"><h5>Artist: ${artist[0].artist_name}</h5>
          </div>   
          <p><b>type: ${artist[0].artist_type}</b> </p>
          <p><b>slug: ${artist[0].artist_slug}</b></p>
          <p> <b>${artist[0].artist_bio}</b></p>
          
          <button onclick="unshow()" class="btn btn-hipster close-btn">Close</button></div>`;
          modal.innerHTML = inner_html;

          document.getElementById('modal_artist').appendChild(modal);
        
          
          
}



fetchData(artistApi);
