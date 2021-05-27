import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";


@Injectable()
export class PortfoliosApiService {

  constructor(private apiService: ApiService) {
  }
}
