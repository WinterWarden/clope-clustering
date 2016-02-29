/// <reference path="Model.ts"/>
module Model{
    export class Transaction {
        private _id:number;
        private _parameters:string[];
        private _clusterId:number;

        constructor(id?:number, parameters?:string[]) {
            this._id = id;
            this._parameters = parameters;
        }

        get id():number {
            return this._id;
        }

        set id(value:number) {
            this._id = value;
        }

        get parameters():string[] {
            return this._parameters;
        }

        set parameters(values:string[]) {
            this._parameters = values;
        }

        get clusterId():number {
            return this._clusterId;
        }

        set clusterId(values:number) {
            this._clusterId = values;
        }
    }
}