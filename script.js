const animals = [
{
    name: 'House',
    id: 0
},
{
    name: 'Of',
    id: 1
},
{
    name: 'The',
    id: 2
},
{
    name: 'Rising',
    id: 3
},
{
    name: 'Sun',
    id: 4
},
]


function isAnimal(array, index) {
    try {

        console.log(`You have ${array[index].name}`)

        if (index > array.lenght) {
            throw TypeError()
            
        }
        
    } catch (error) {
        console.error(`${error.name}. Хибний індекс!`)
    }
    
}

isAnimal(animals, 0)
isAnimal(animals, 3)
isAnimal(animals, 5)
