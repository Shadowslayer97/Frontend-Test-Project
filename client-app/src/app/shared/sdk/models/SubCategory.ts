/* tslint:disable */
import {
  Category
} from '../index';

declare var Object: any;
export interface SubCategoryInterface {
  "name": string;
  "description"?: string;
  "parent-type"?: string;
  "type"?: string;
  "id"?: number;
  "categoryId"?: number;
  category?: Category;
}

export class SubCategory implements SubCategoryInterface {
  "name": string;
  "description": string;
  "parent-type": string;
  "type": string;
  "id": number;
  "categoryId": number;
  category: Category;
  constructor(data?: SubCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubCategory`.
   */
  public static getModelName() {
    return "SubCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubCategory for dynamic purposes.
  **/
  public static factory(data: SubCategoryInterface): SubCategory{
    return new SubCategory(data);
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
      name: 'SubCategory',
      plural: 'SubCategories',
      path: 'SubCategories',
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
        "parent-type": {
          name: 'parent-type',
          type: 'string',
          default: ''
        },
        "type": {
          name: 'type',
          type: 'string',
          default: ''
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "categoryId": {
          name: 'categoryId',
          type: 'number'
        },
      },
      relations: {
        category: {
          name: 'category',
          type: 'Category',
          model: 'Category',
          relationType: 'belongsTo',
                  keyFrom: 'categoryId',
          keyTo: 'id'
        },
      }
    }
  }
}
