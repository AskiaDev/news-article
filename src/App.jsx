import { useState } from "react";
import Logo from "./components/logo";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Modal from "./components/Modal";
const DUMMY_DATA = [
  {
    article_id: 1,
    title:
      "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
    author: "Misty Matic",
    publish_date: "6/6/2007",
    category1: "politics",
    category2: "politics",
    category3: "entertainment",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    word_count: 43,
    expanded: false,
  },
  {
    article_id: 2,
    title: "ac lobortis vel dapibus at diam nam tristique tortor eu pede",
    author: "Nickolaus Merriott",
    publish_date: "12/19/2021",
    category1: "politics",
    category2: "technology",
    category3: "sports",
    content:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    word_count: 49,
    expanded: false,
  },
  {
    article_id: 3,
    title:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
    author: "Gabriella Penddreth",
    publish_date: "3/13/2011",
    category1: "politics",
    category2: "sports",
    category3: "sports",
    content:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    word_count: 30,
    expanded: false,
  },
  {
    article_id: 4,
    title:
      "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
    author: "Say Jahns",
    publish_date: "12/13/2017",
    category1: "entertainment",
    category2: "sports",
    category3: "politics",
    content:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    word_count: 3,
    expanded: true,
  },
  {
    article_id: 5,
    title:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
    author: "Mitzi Boorman",
    publish_date: "1/12/2001",
    category1: "technology",
    category2: "entertainment",
    category3: "politics",
    content:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    word_count: 38,
    expanded: true,
  },
  {
    article_id: 6,
    title:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
    author: "Shelly Dymick",
    publish_date: "8/29/2010",
    category1: "entertainment",
    category2: "entertainment",
    category3: "entertainment",
    content:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    word_count: 43,
    expanded: true,
  },
  {
    article_id: 7,
    title:
      "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
    author: "Ebony Virgin",
    publish_date: "11/29/2021",
    category1: "politics",
    category2: "entertainment",
    category3: "entertainment",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    word_count: 11,
    expanded: false,
  },
  {
    article_id: 8,
    title:
      "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
    author: "Doti Couronne",
    publish_date: "5/28/2003",
    category1: "sports",
    category2: "sports",
    category3: "technology",
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    word_count: 14,
    expanded: true,
  },
  {
    article_id: 9,
    title:
      "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    author: "Britni Preece",
    publish_date: "8/29/2010",
    category1: "technology",
    category2: "technology",
    category3: "sports",
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    word_count: 12,
    expanded: true,
  },
  {
    article_id: 10,
    title:
      "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
    author: "Orlan Springham",
    publish_date: "9/19/2009",
    category1: "technology",
    category2: "politics",
    category3: "technology",
    content:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    word_count: 21,
    expanded: false,
  },
  {
    article_id: 11,
    title:
      "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
    author: "Domeniga Craighill",
    publish_date: "1/13/2016",
    category1: "politics",
    category2: "sports",
    category3: "sports",
    content:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    word_count: 19,
    expanded: false,
  },
  {
    article_id: 12,
    title:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
    author: "Heather de Keep",
    publish_date: "4/23/2017",
    category1: "sports",
    category2: "politics",
    category3: "technology",
    content:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    word_count: 13,
    expanded: false,
  },
  {
    article_id: 13,
    title:
      "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
    author: "Clement Danielou",
    publish_date: "11/22/2008",
    category1: "entertainment",
    category2: "sports",
    category3: "sports",
    content:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    word_count: 46,
    expanded: true,
  },
  {
    article_id: 14,
    title:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    author: "Willow Kubal",
    publish_date: "8/16/2022",
    category1: "entertainment",
    category2: "technology",
    category3: "technology",
    content:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    word_count: 32,
    expanded: false,
  },
  {
    article_id: 15,
    title:
      "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
    author: "Madlin Jime",
    publish_date: "12/15/2015",
    category1: "entertainment",
    category2: "politics",
    category3: "technology",
    content:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    word_count: 16,
    expanded: false,
  },
  {
    article_id: 16,
    title:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
    author: "Nikaniki O'Henehan",
    publish_date: "3/9/2022",
    category1: "politics",
    category2: "politics",
    category3: "technology",
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    word_count: 8,
    expanded: false,
  },
  {
    article_id: 17,
    title:
      "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    author: "Carling Paoletti",
    publish_date: "1/10/2005",
    category1: "sports",
    category2: "sports",
    category3: "technology",
    content:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    word_count: 49,
    expanded: true,
  },
  {
    article_id: 18,
    title: "placerat ante nulla justo aliquam quis turpis eget elit sodales",
    author: "Coleman Pendrill",
    publish_date: "10/14/2009",
    category1: "sports",
    category2: "sports",
    category3: "sports",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    word_count: 48,
    expanded: true,
  },
  {
    article_id: 19,
    title:
      "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
    author: "Vin Reubens",
    publish_date: "8/23/2019",
    category1: "technology",
    category2: "politics",
    category3: "politics",
    content:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    word_count: 41,
    expanded: false,
  },
  {
    article_id: 20,
    title:
      "quis orci eget orci vehicula condimentum curabitur in libero ut massa",
    author: "Kalvin Peddersen",
    publish_date: "5/3/2018",
    category1: "politics",
    category2: "sports",
    category3: "entertainment",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    word_count: 26,
    expanded: false,
  },
  {
    article_id: 21,
    title:
      "nisl duis bibendum felis sed interdum venenatis turpis enim blandit",
    author: "Alyosha Orrow",
    publish_date: "8/15/2017",
    category1: "entertainment",
    category2: "technology",
    category3: "politics",
    content:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    word_count: 45,
    expanded: true,
  },
  {
    article_id: 22,
    title:
      "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
    author: "Moina Iston",
    publish_date: "1/9/2002",
    category1: "sports",
    category2: "entertainment",
    category3: "technology",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    word_count: 19,
    expanded: true,
  },
  {
    article_id: 23,
    title:
      "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    author: "Kaitlin Petyt",
    publish_date: "5/26/2009",
    category1: "technology",
    category2: "sports",
    category3: "entertainment",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    word_count: 6,
    expanded: false,
  },
  {
    article_id: 24,
    title:
      "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
    author: "Chrissy Jezzard",
    publish_date: "10/21/2005",
    category1: "sports",
    category2: "technology",
    category3: "politics",
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    word_count: 7,
    expanded: false,
  },
  {
    article_id: 25,
    title:
      "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
    author: "Leslie Mauditt",
    publish_date: "7/21/2022",
    category1: "politics",
    category2: "politics",
    category3: "entertainment",
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    word_count: 2,
    expanded: false,
  },
  {
    article_id: 26,
    title:
      "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
    author: "Benito Urry",
    publish_date: "1/25/2006",
    category1: "politics",
    category2: "sports",
    category3: "technology",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    word_count: 39,
    expanded: true,
  },
  {
    article_id: 27,
    title:
      "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
    author: "Riannon Whitton",
    publish_date: "9/29/2007",
    category1: "entertainment",
    category2: "technology",
    category3: "politics",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    word_count: 0,
    expanded: false,
  },
  {
    article_id: 28,
    title:
      "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
    author: "Any Gummory",
    publish_date: "12/16/2005",
    category1: "technology",
    category2: "entertainment",
    category3: "sports",
    content:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    word_count: 25,
    expanded: true,
  },
  {
    article_id: 29,
    title:
      "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
    author: "Theodoric Pettigree",
    publish_date: "12/3/2012",
    category1: "politics",
    category2: "technology",
    category3: "sports",
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    word_count: 44,
    expanded: true,
  },
  {
    article_id: 30,
    title:
      "nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    author: "Reuben Kindley",
    publish_date: "10/7/2009",
    category1: "technology",
    category2: "entertainment",
    category3: "entertainment",
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    word_count: 26,
    expanded: true,
  },
  {
    article_id: 31,
    title:
      "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
    author: "Tyler Rudgley",
    publish_date: "7/24/2016",
    category1: "technology",
    category2: "politics",
    category3: "technology",
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    word_count: 1,
    expanded: false,
  },
  {
    article_id: 32,
    title:
      "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
    author: "Brietta Blaxter",
    publish_date: "11/30/2001",
    category1: "entertainment",
    category2: "technology",
    category3: "politics",
    content:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    word_count: 24,
    expanded: false,
  },
  {
    article_id: 33,
    title:
      "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
    author: "Veriee Medgwick",
    publish_date: "12/30/2010",
    category1: "entertainment",
    category2: "sports",
    category3: "sports",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    word_count: 20,
    expanded: false,
  },
  {
    article_id: 34,
    title:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
    author: "Manfred O'Scandall",
    publish_date: "4/18/2005",
    category1: "politics",
    category2: "technology",
    category3: "politics",
    content:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    word_count: 49,
    expanded: false,
  },
  {
    article_id: 35,
    title:
      "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
    author: "Say Beyn",
    publish_date: "3/20/2017",
    category1: "politics",
    category2: "entertainment",
    category3: "entertainment",
    content: "Fusce consequat. Nulla nisl. Nunc nisl.",
    word_count: 49,
    expanded: false,
  },
  {
    article_id: 36,
    title:
      "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
    author: "Upton Lucia",
    publish_date: "11/26/2009",
    category1: "technology",
    category2: "technology",
    category3: "technology",
    content: "Fusce consequat. Nulla nisl. Nunc nisl.",
    word_count: 23,
    expanded: true,
  },
  {
    article_id: 37,
    title:
      "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
    author: "Ermin Joncic",
    publish_date: "7/6/2005",
    category1: "technology",
    category2: "technology",
    category3: "sports",
    content:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    word_count: 19,
    expanded: true,
  },
  {
    article_id: 38,
    title:
      "ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
    author: "Gratiana Trevance",
    publish_date: "4/18/2005",
    category1: "sports",
    category2: "technology",
    category3: "technology",
    content:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    word_count: 18,
    expanded: false,
  },
  {
    article_id: 39,
    title:
      "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
    author: "Alidia Peggrem",
    publish_date: "5/21/2002",
    category1: "technology",
    category2: "technology",
    category3: "technology",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    word_count: 25,
    expanded: false,
  },
  {
    article_id: 40,
    title:
      "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    author: "Ester Flaunders",
    publish_date: "11/19/2017",
    category1: "entertainment",
    category2: "sports",
    category3: "sports",
    content:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    word_count: 43,
    expanded: true,
  },
  {
    article_id: 41,
    title:
      "dapibus duis at velit eu est congue elementum in hac habitasse platea",
    author: "Michale Brunke",
    publish_date: "8/30/2020",
    category1: "entertainment",
    category2: "entertainment",
    category3: "technology",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    word_count: 32,
    expanded: false,
  },
  {
    article_id: 42,
    title:
      "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
    author: "Idaline Feechum",
    publish_date: "11/30/2005",
    category1: "technology",
    category2: "politics",
    category3: "technology",
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    word_count: 23,
    expanded: false,
  },
  {
    article_id: 43,
    title:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    author: "Tildie Cavalier",
    publish_date: "4/19/2002",
    category1: "entertainment",
    category2: "technology",
    category3: "technology",
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    word_count: 27,
    expanded: true,
  },
  {
    article_id: 44,
    title:
      "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    author: "Netta Askin",
    publish_date: "4/13/2020",
    category1: "technology",
    category2: "sports",
    category3: "politics",
    content:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    word_count: 21,
    expanded: true,
  },
  {
    article_id: 45,
    title:
      "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
    author: "Aundrea Elphinston",
    publish_date: "8/26/2019",
    category1: "entertainment",
    category2: "entertainment",
    category3: "sports",
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    word_count: 41,
    expanded: true,
  },
  {
    article_id: 46,
    title:
      "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
    author: "Egor Burgis",
    publish_date: "6/7/2022",
    category1: "technology",
    category2: "entertainment",
    category3: "politics",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    word_count: 35,
    expanded: true,
  },
  {
    article_id: 47,
    title:
      "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
    author: "Susannah Gadman",
    publish_date: "6/2/2007",
    category1: "entertainment",
    category2: "sports",
    category3: "politics",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    word_count: 46,
    expanded: false,
  },
  {
    article_id: 48,
    title: "volutpat in congue etiam justo etiam pretium iaculis justo in hac",
    author: "Dolly Wilce",
    publish_date: "3/14/2008",
    category1: "sports",
    category2: "politics",
    category3: "entertainment",
    content:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    word_count: 31,
    expanded: true,
  },
  {
    article_id: 49,
    title:
      "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
    author: "Ingeborg Szymanowicz",
    publish_date: "9/13/2012",
    category1: "sports",
    category2: "technology",
    category3: "entertainment",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    word_count: 20,
    expanded: true,
  },
  {
    article_id: 50,
    title:
      "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
    author: "Shirley Fosdike",
    publish_date: "2/20/2012",
    category1: "technology",
    category2: "sports",
    category3: "entertainment",
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    word_count: 42,
    expanded: true,
  },
];

const data = [
  {
    article_id: 1,
    title:
      "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
    author: "Misty Matic",
    publish_date: "6/6/2007",
    category1: "politics",
    category2: "politics",
    category3: "entertainment",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    word_count: 43,
    expanded: false,
  },
  {
    article_id: 2,
    title: "ac lobortis vel dapibus at diam nam tristique tortor eu pede",
    author: "Nickolaus Merriott",
    publish_date: "12/19/2021",
    category1: "politics",
    category2: "technology",
    category3: "sports",
    content:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    word_count: 49,
    expanded: false,
  },
  {
    article_id: 3,
    title:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
    author: "Gabriella Penddreth",
    publish_date: "3/13/2011",
    category1: "politics",
    category2: "sports",
    category3: "sports",
    content:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    word_count: 30,
    expanded: false,
  },
];

function App() {
  const [items, setItems] = useState(DUMMY_DATA);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = () => {
    const updatedItems = items.filter((item) => !item.checked);
    setItems(updatedItems);
  };

  const handleCheckBox = (id) => {
    const updatedItems = items.map((item) => {
      return item.article_id === id
        ? { ...item, checked: !item.checked }
        : item;
    });
    setItems(updatedItems);
  };

  const handleContent = (item) => {
    setSelectedItem(item);
    console.log(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Logo />
      <Navbar onDelete={handleDelete} />
      <List
        items={items}
        onCheckedBoxChange={handleCheckBox}
        onReadFull={handleContent}
      />
      {selectedItem && (
        <Modal
          title={selectedItem.title}
          name={selectedItem.author}
          content={selectedItem.content}
          date={selectedItem.publish_date}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
