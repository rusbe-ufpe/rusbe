import {HttpHeaders} from "@angular/common/http";

export class RequestConstants {
    REQUEST_URL: string = "http://localhost:3333"

    HEADER_CONTENT_JSON: string = "application/json";
    DEFAULT_HEADERS: HttpHeaders = new HttpHeaders({"Content-type": this.HEADER_CONTENT_JSON});

    ROUTE_QUEUE: string = "/queue";
}