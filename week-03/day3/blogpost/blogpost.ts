'use strict';
// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.


class BlogPost {
  authorName:string;
  title:string;
  text:string;
  publicationDate:string;

  constructor(author) {
    this.authorName = author
  }
}

let post1 = new BlogPost('John Doe')
post1.title = 'Lorem Ipsum'
post1.text = 'Lorem ipsum dolor sit amet.'
post1.publicationDate = '2000.05.04.'

console.log(post1);

let post2 = new BlogPost('Tim Urban')
post2.title = 'Wait but why'
post2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
post2.publicationDate = '2010.10.10.'

console.log(post2);

let post3 = new BlogPost('William Turton')
post3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump'
post3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
post3.publicationDate = '2017.03.28.'

console.log(post3);
