 //Map

        //Initialization of Map
        var miniMap = L.map('miniMap', {
          center: [36.174465, -86.767960],
          zoom: 11,
        });
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g', {
          maxZoom: 18,
          tileSize: 512,
          zoomOffset: -1,
          id: 'mapbox/streets-v11',
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox/">Mapbox</a>',
          accessToken: 'pk.eyJ1IjoidGFsbGlhYmxlLXNvY2lldG9sb2d5IiwiYSI6ImNrcmF2ODlkcjNpY3YycnJ4OTR6eWVhNmEifQ.wIwj4TNBBVeScPzezR5I0g'
        }).addTo(miniMap);

      //Locations

        //VU
          //Marker
          var vu = L.marker([36.144444, -86.802778], opacity=0.5).addTo(miniMap);
          //Pop-up
          vu.bindPopup("Vanderbilt University").openPopup();
          //link
          vu.on("dblclick", function() {
            window.location.href = "vu.html";
          });
      
        //BNA
          //Marker
          var bna = L.marker([36.126111, -86.677222], {
            riseOnHover: true
          }).addTo(miniMap);
          //Pop-up
          bna.bindPopup("Nashville International Airport").openPopup();
          //Link
          bna.on("dblclick", function() {
            window.location.href = "bna.html";
          });
      
        //MNDES
          //Marker
          var mndes = L.marker([36.158056, -86.770278], opacity=0.5).addTo(miniMap);
          //Pop-up
          mndes.bindPopup("Metro Nashville District Energy System").openPopup(
          );
          //Link
          mndes.on("dblclick", function() {
            window.location.href = "mndes.html";
          });
      
        //CGA
          //Marker
          var cga = L.marker([36.181944, -86.873333], opacity=0.5).addTo(miniMap);
          //Pop-up
          cga.bindPopup("Carlex Glass of America").openPopup();
          //Link
          cga.on("dblclick", function() {
            window.location.href = "cga.html";
          });

