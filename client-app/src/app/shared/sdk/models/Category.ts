/* tslint:disable */
import {
  SubCategory
} from '../index';

declare var Object: any;
export interface CategoryInterface {
  "name": string;
  "description"?: string;
  "type": string;
  "id"?: number;
  subCategories?: SubCategory[];
}

export class Category implements CategoryInterface {
  "name": string;
  "description": string;
  "type": string;
  "id": number;
  subCategories: SubCategory[];
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Category',
      plural: 'Categories',
      path: 'Categories',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: 'default'
        },
        "description": {
          name: 'description',
          type: 'string',
          default: ''
        },
        "type": {
          name: 'type',
          type: 'string',
          default: 'global'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        subCategories: {
          name: 'subCategories',
          type: 'SubCategory[]',
          model: 'SubCategory',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'categoryId'
        },
      }
    }
  }
}
