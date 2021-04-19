var itemContainers = [].slice.call($('.column-content'));
var columnGrids = [];
var boardGrid;

// Her bir kolon elemanını for döngüsünde döndereceğiz.
// we put inside foreach loop every single column
itemContainers.forEach((container) => {
    // Muuri kütüphanesi çağırılıyor
    // calling Muuri library
    var grid = new Muuri(container, {
        // kolonların içerisinde ızgaralanacak öğeleri belirliyoruz
        // determine the items which will be grilled inside the columns
        items: '.item',
        // kaydırma işlemini aktif ediyoruz
        // enable the drag option
        dragEnabled: true,
        // kaydırma sonrası sıralanacak öğeleri belirliyoruz
        // after drag, how should sort the items 
        dragSort: function () {
            return columnGrids;
        },
        // hangi div içerisinde kaydırma işlemi gerçekleşeceğini belirliyoruz
        // in which div object, items will be draggable
        dragContainer: document.body,
    })
        // yerleşim prosedürü başladığında yapılacak işlemler
        // when dragging process start, do...
        .on('layoutStart', function () {
            boardGrid.refreshItems().layout();
        });
        
    columnGrids.push(grid);
});

// kolonları ızgaralama ve kaydırma işlemini aktif ediyoruz
// call Muuri library for the columns, not items inside of the columns
boardGrid = new Muuri('.container', {
    dragEnabled: true,
    dragHandle: '.column-header'
});

// kolon içi boşaldığında yükseklik sıfırlanıyor ve içi tekrar doldurulamaz
// hale geliyor. bu durumun önüne geçmek için min yükseklik tanımlıyoruz
// when column item number become 0, column become invisible, we determine min-height css code
if( $(".column-content").height()<50){
    $(".column-content").css("min-height", "9rem");
}
  

// created object data for each pokemon
var datalar={
    bulbasaur: {
        "evolution": [ "bulbasaur", "ivysaur", "venusaur"],
        "type": ["grass", "poison"],
        "weakness": ["fire", "psychic", "flying", "ice"]
    },
    charmander: {
        "evolution": [ "charmander", "charmeleon", "charizard"],
        "type": "fire",
        "weakness": ["water", "ground", "rock"]
    },
    squirtle: {
        "evolution": [ "squirtle", "wartortle", "blastoise"],
        "type": "Water",
        "weakness": ["grass", "electric"]
    },
    pikachu: {
        "evolution": [ "pikachu", "raichu"],
        "type": "electric",
        "weakness": "ground"
    },
    nidoran: {
        "evolution": [ "nidoran", "nidorino", "nidoking"],
        "type": "poison",
        "weakness": ["psychic", "ground"]
    },
    grimer: {
        "evolution": [ "grimer", "muk", "shellder", "cloyster"],
        "type": "poison",
        "weakness": ["psychic", "ground"]
    }
}


// img hareket ettiğinde, hareket eden pokemon hangi pokemon ise 
// onun json değerlerini console a yazdırır
// when image move, write image information to the console.
$("img").mousedown(function(e){
    // e.preventDefault();
    let text=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.textContent;
    console.log(JSON.stringify(datalar[text.trim()]));
});

