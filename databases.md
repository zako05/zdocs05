# MongoDB

run docker 

```bash
docker run --name test-mongo -dit -p 27017:27017 --rm mongo:4.4.1
```

open mongoDB in docker

```bash
docker exec -it test-mongo mongo
```

list of all databases

```mongodb
show dbs;
```

defaults databases created by mongoDB

```
admin   0.000GB
config  0.000GB
local   0.000GB
```

database & collection

create DB - group of collections

```mongodb
use adoption;
```

record & document means the same, it's a collection

insert new collection into the DB

```mongodb
db.pets.insertOne({ name: "Luna", type: "dog", breed: "Havanese", age: 8})
```

output:

```monogdb
{
        "acknowledged" : true,
        "insertedId" : ObjectId("60707e31bb7b516cd7fb4725")
}
```

show all the commands can run upon our collection

```mongodb
db.pets.help()
```

or

for database itself

```mongodb
db.help()
```

```mongodb
db.stats()
```

## Querying MongoDB

findOne() returns first found object

```mongodb
db.pets.findOne()
```

or based on query object

```mongodb
db.pets.findOne({ type: "dog" })
```

output:

```mongodb
{
        "_id" : ObjectId("60707e31bb7b516cd7fb4725"),
        "name" : "Luna",
        "type" : "dog",
        "breed" : "Havanese",
        "age" : 8
}
```

find() returns all objects

```mongodb
db.pets.find()
```

insert 10000 documents into our collection "pets"

```mongodb
db.pets.insertMany(
  Array.from({ length: 10000 }).map((_, index) => ({
    name: [
      "Luna",
      "Fido",
      "Fluffy",
      "Carina",
      "Spot",
      "Beethoven",
      "Baxter",
      "Dug",
      "Zero",
      "Santa's Little Helper",
      "Snoopy",
    ][index % 9],
    type: ["dog", "cat", "bird", "reptile"][index % 4],
    age: (index % 18) + 1,
    breed: [
      "Havanese",
      "Bichon Frise",
      "Beagle",
      "Cockatoo",
      "African Gray",
      "Tabby",
      "Iguana",
    ][index % 7],
    index: index,
  }))
);
```

get how many cats of age grater than 12 do we have in our collection

```mongodb
db.pets.count({ type: "cat", age: { $gt: 12 } })
```

or grater than or equal to

```mongodb
db.pets.count({ type: "cat", age: { $gte: 12 } })
```

or equal to

```mongodb
db.pets.count({ type: "cat", age: { $eq: 12  }  })
```

or not equal

```mongodb
db.pets.count({ type: "cat", age: { $ne: 12  }  })
```

or less than

```mongodb
db.pets.count({ type: "cat", age: { $lt: 12  }  })
```

lets get how many pets do we have with name "Fido" and not a type "dog"

```mongodb
db.pets.count({ name: "Fido", type: { $ne: "dog" } })
```

## Logical Operators


