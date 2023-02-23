import Objection, { PartialModelObject } from 'objection';
import { pgKnex } from '../../../pg-knex';

// Attach knex to objection model
Objection.Model.knex(pgKnex);

export class BaseObjectionModel extends Objection.Model {
  /**
   * Set this object's property values. Internally calls `Objection.Model.$set()` method but with
   * auto completion based on this model's properties.
   *
   * Related: https://github.com/Vincit/objection.js/issues/1716
   */
  set(values: PartialModelObject<this>): void {
    this.$set(values);
  }
}
