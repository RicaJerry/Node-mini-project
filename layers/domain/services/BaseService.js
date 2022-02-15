class BaseService{
  constructor(repository, name){
      this.repository = repository;
      this.name = name;
  }

  async findAll(){
      return this.repository.find();
  }
  
  async find(filter, projection){
      return this.repository.find(filter, projection);
  }

  async findOne(filter, projection){
    return this.repository.findOne(filter, projection);
}

  async create(data){
      return this.repository.create({
          ...data,
          createdAt: new Date(),
      })
  }

  async update(data){
      return this.repository.update(
      { _id: data._id }, 
      {
          $set: {
              ...data,
              updatedAt: new Date(),
          },
      });
  }
}

module.exports = BaseService;