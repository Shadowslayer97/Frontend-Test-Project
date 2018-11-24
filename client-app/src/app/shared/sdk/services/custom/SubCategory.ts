/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { JSONSearchParams } from '../core/search.params';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubCategory } from '../../models/SubCategory';
import { SocketConnection } from '../../sockets/socket.connections';
import { Category } from '../../models/Category';


/**
 * Api services for the `SubCategory` model.
 */
@Injectable()
export class SubCategoryApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super( http,connection,  models, auth, searchParams, errorHandler);
  }

  /**
   * Fetches belongsTo relation category.
   *
   * @param {any} id PersistedModel id
   *
   * @param {boolean} refresh
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `SubCategory` object.)
   * </em>
   */
  public getCategory(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/SubCategories/:id/category";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `SubCategory`.
   */
  public getModelName() {
    return "SubCategory";
  }
}
