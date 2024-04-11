// Seed data 

const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
];

const categories =[
    {
        id:'1',
        name:'Personal'
     
    },
    {
        id:'2',
        name:'Work'
       
    },
    {
        id:'1',
        name:'Outdoor'
    },
]

const events =[
    {
        id:'1',
        name: ['whatsapp'],
        image_url:'/whatsapp_icon.png',
        category_id:'1'
    },
    {
        id:'3',
        name:['facebook','messenger'],
        image_url:'/messenger_icon.png',
        category_id:'1'
    },
    {
        id:'4',
        name: ['facebook','browsing'],
        description:'/facebook_icon.png',
        image_url:'',
        category_id:'1'
    },
    {
        id:'5',
        name: ['youtube','browsing'],
        image_url:'/youtube_icon.png',
        category_id:'1'
    },
    {
        id:'6',
        name:['chat', 'work'],
        image_url:'/slack_icon',
        category_id:'2'
    },
    {
        id:'7',
        name:['call', 'appointment'],
        image_url:'/call_icon',
        category_id:'1'
    },
    {
        id:'9',
        name:['internet'],
        image_url:'/internet_icon.png',
        category_id:'2'
    },
    {
        id:'10',
        name:['netflix'],
        image_url:'/netflix_icon.png',
        category_id:'2'
    },

]

const timeSpent =[
  {
    id :'1',
    start :'2024-03-01',
    end :'2024-04-01',
    user_id :'410544b2-4001-4271-9855-fec4b6a6442a',
    event_id : 1,
    note : " something"
  }
]
   
const hashtags = [
    {
      id: '1',
      name: 'personal'
    },
    {
        id: '2',
        name: 'work'
    },
    {
        id: '3',
        name: 'phone'
    },
    {
        id: '4',
        name: 'pc'
    },
    {
        id: '5',
        name: 'TV'
    },
    {
        id: '6',
        name: 'outdoor'
    },
    {
        id: '7',
        name: 'chat'
    },
    {
        id: '8',
        name: 'call'
    },
    {
        id: '9',
        name: 'purchase'
    },
    {
        id: '10',
        name: 'learning'
    },
    {
        id: '11',
        name: 'workout'
    },
    {
        id: '12',
        name: 'facebook'
    },
    {
        id: '13',
        name: 'whatsapp'
    },
    {
        id: '14',
        name: 'messenger'
    },
    {
        id: '19',
        name: 'youtube'
    },

];
 
  module.exports = {
    users,
    hashtags,
    events,
    categories,
    timeSpent
  };


