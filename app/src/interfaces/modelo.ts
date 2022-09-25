import { Imprimivel } from "../utils/logs/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}