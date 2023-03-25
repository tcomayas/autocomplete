      let videoTitles = [
        'How to Make Pancakes',
        'JavaScript Tutorial',
        'Funny Cat Videos',
        'Travel Vlog: Paris',
        'Movie Trailers 2023',
        'Fitness Challenge: 30 Days'
      ];

      let selectedItemIndex = -1;

      function searchVideo() {
        let searchValue = document.getElementById('searchInput').value.toLowerCase();

        selectedItemIndex = -1;

        document.getElementById('searchedList').innerHTML = '';

        for (let i = 0; i < videoTitles.length; i++) {
          if (videoTitles[i].toLowerCase().includes(searchValue)) {
            let li = document.createElement('li');
            li.innerHTML = videoTitles[i];
            document.getElementById('searchedList').appendChild(li);
            if (selectedItemIndex === -1) {
              selectedItemIndex = i;
            }
          }
        }

        if (selectedItemIndex === -1) {
          document.getElementById('searchResult').innerHTML = '"' + searchValue + '"' + " was not found.";
        } else {
          document.getElementById('searchResult').innerHTML = '';
        }

        let videoTitlesList = document.getElementById('searchedList');
        for (let i = 0; i < videoTitlesList.children.length; i++) {
          videoTitlesList.children[i].classList.remove('selected');
        }
      }

      function handleArrowKeys(event) {
        let searchedList = document.getElementById('searchedList');
        if (event.key === 'ArrowUp') {
          if (selectedItemIndex > 0) {
            selectedItemIndex--;
            searchedList.children[selectedItemIndex].classList.add('selected');
            if (selectedItemIndex === 0) {
              searchedList.scrollTop = 0;
            }
          }
        }
        }