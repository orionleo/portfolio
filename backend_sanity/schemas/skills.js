export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'category',
            title:'Category',
            type:'string'
        },
        {
            name:'skill',
            title:'Skill',
            type: 'array',
            of:[{ type:'skill'}]
        },
        
    ],
    orderings: [
        {
          title: 'Categories, New',
          name: 'categoriesDesc',
          by: [
            {field: 'category', direction: 'desc'}
          ]
        },
        {
          title: 'Categories, Old',
          name: 'categoriesAsc',
          by: [
            {field: 'category', direction: 'asc'}
          ]
        }
      ]
}