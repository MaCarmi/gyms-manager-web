
/**
 * Enum delle API CRUD esposte dal BACK-END, ogni api ha una funzione specifica,
 * queste stringhe vengono richiamate all'interno dei service di angular, che si occupano
 * di effettuare le chiamate al back-end
 * vedere https://github.com/simeraro1/gyms-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/services/gym.service.ts
 *
 * @export
 * @enum {number}
 */
export enum ApiList {
  CREATE_GYM='/api/gym',
  GET_GYM_BY_ID='/api/gym/{id}',
  UPDATE_GYM='/api/gym/{id}',
  DELETE_GYM='/api/gym/{id}',
  GET_GYMS='/api/gyms'
}
