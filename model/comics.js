module.exports = {
  // Load Mock Comic Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('comic', JSON.stringify(
        [
        {
            "name": "Aquaman",
            "author":" Kurt Busiek and Jackson Guice",
            "edition": "3",
            "collection": "1995",
            "qualification" :4,
            "state": "old",
            "gender":"super heroe",
            "popular":"true",
            "price":"234.8",
            "description":"Aquaman is a fictional superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics.",
            "isSearch":"false",
            "image":"./images/store/aquaman.jpg"  ,
            "reviews": [
            {
            "stars": 3,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            },
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            }
            
            ]
        },
        {
            "name": "Gamora",
            "author":"Philosopher Umberto Eco",
            "edition": "1",
            "collection": "2015",
            "qualification" :5,
            "state": "new",
            "gender":"science fiction",
            "popular":"false",
            "price":"100.8",
            "description":"Gamora is a fictional character appearing in American comic books published by Marvel Comics. Created by Jim Starlin, the character first appeared in Strange Tales #180 (June 1975).",
            "isSearch":"true",
            "image":"./images/store/gamora.jpg" ,
            "reviews": [
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            },
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            }
            
            ] 
        },
        {
            "name": "grayskull",
            "author":"Beneath Oblivion",
            "edition": "4",
            "collection": "2011",
            "qualification" :5,
            "state": "new",
            "gender":"fantasy",
            "popular":"false",
            "price":"876.8",
            "description":"All of the original action figures came with minicomics that told stories involving the characters.In the earliest comics, He-Man is a wandering barbarian on Eternia,All of the original action figures came with minicomics",
            "isSearch":"true",
            "image":"./images/store/castillo_grayskull.jpg",
            "reviews": [
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            }
            
            ]  
        }, 
        {
            "name": "legacy",
            "author":"Tony Abbott",
            "edition": "1",
            "collection": "2012",
            "qualification" :1,
            "state": "new",
            "gender":"fantasy",
            "popular":"false",
            "price":"10.8",
            "description":"Legacy is a comic book series written by John Ostrander, primarily pencilled and co-scripted by Jan Duursema, and inked by Dan Parsons. Published by Dark Horse Comics.",
            "isSearch":"true",
            "image":"./images/store/legacy.jpg",
            "reviews": [ ]  
        },
        {
            "name": "marvel",
            "author":"Stan Lee",
            "edition": "5",
            "collection": "2014",
            "qualification" :5,
            "state": "new",
            "gender":"fantasy",
            "popular":"true",
            "price":"10.8",
            "description":"Marvel started in 1939 as Timely Publications, and by the early 1950s had generally become known as Atlas Comics. Marvel's modern incarnation dates from 1961,The Fantastic Four.",
            "isSearch":"true",
            "image":"./images/store/marvel.jpg" ,
            "reviews": [
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            }
            
            ] 
        },
        {
            "name": "Superman 2",
            "author":"Steve Ditko",
            "edition": "1",
            "collection": "2000",
            "qualification" :5,
            "state": "old",
            "gender":"fantasy",
            "popular":"true",
            "price":"25.8",
            "description":"Superman is a fictional superhero appearing in American comic books published by DC Comics. He was created by writer Jerry Siegel and artist Joe Shuster in 1933 later, in 1938.",
            "isSearch":"false",
            "image":"./images/store/superman2.gif" ,
            "reviews": [
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            },
            {
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
            }
            
            ] 
        },
            {
            "name": "legacy 2",
            "author":"Tony Abbott",
            "edition": "5",
            "collection": "2015",
            "qualification" :1,
            "state": "new",
            "gender":"fantasy",
            "popular":"true",
            "price":"12.8",
            "description":"Legacy is a comic book series written by John Ostrander, primarily pencilled and co-scripted by Jan Duursema, and inked by Dan Parsons.",
            "isSearch":"true",
            "image":"./images/store/legacy2.jpg",  
            "reviews": [ ]  
        },
            {
            "name": "Flash",
            "author":"Michael Lewis",
            "edition": "3",
            "collection": "2012",
            "qualification" :1,
            "state": "new",
            "gender":"fantasy",
            "popular":"true",
            "price":"8.8",
            "description":"The Flash is the fastest man alive. The protector of Central City and Keystone City, fighting against evil using his super-speed.",
            "isSearch":"false",
            "image":"./images/store/rayo.gif",
            "reviews": [ ]    
        },
            {
            "name": "Spiderman",
            "author":"Steve Ditko",
            "edition": "1",
            "collection": "2000",
            "qualification" :1,
            "state": "old",
            "gender":"fantasy",
            "popular":"true",
            "price":"20.8",
            "description":"Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics existing in its shared universe.",
            "isSearch":"true",
            "image":"./images/store/spiderman.jpg",
            "reviews": [ ]   
        }
    ]
    ));
  }

};