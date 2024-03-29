// Search Form submit listener
$("#searchForm").on( "submit", (event) => {
   event.preventDefault();

   var keyword = $('#keyword').val().trim();

   // Check if keyword is empty and reset value
   if (keyword === "") {
      alert("Keyword can't be empty!")
      $('#keyword').val("")
      return
   }

   $("#search-result").empty(); // Clear list on every search

   // AJAX request using JQUERY shorthand method
   $.get({
      url: `http://localhost:3000/api/scrape`,
      data: {
         keyword
      }
   }, (res) => {
      const ul = $("#search-result")

      // Append one item for each row in response
      res.map((item) => {

         /** Displayed data:
          *    IMAGE
          *    TITLE AND LINK
          *    RATING
          *    AMOUT OF REVIEWS
          */
         // If rating or review not available -> don't display
         ul.append(`
            <li class="search-item list-group-item d-flex">
               <img src='${item.img}'>

               <div class="mx-3 d-flex flex-column w-100">
                  <p><a class="text-decoration-none" href='${item.link}' target=”_blank”>${item.title}</a></p>

                  <small class="text-danger"><b>${item.rating || ""}</b></small>
                  <small><b>${item.reviews ? item.reviews + ' reviews' : ""}</b></small>
               </div>
            </li>
         `)
      })
   })
   .fail((err) => {
      console.error(`AMAZON SCRAPER | Error ${err.status}: ${err.statusText}`);
      alert("AN ERROR HAS OCCURRED!");
   })
});