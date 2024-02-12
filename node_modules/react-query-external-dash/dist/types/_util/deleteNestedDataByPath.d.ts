/**
 * Deletes nested data by path
 *
 * @param {unknown} oldData Data to be updated
 * @param {Array<string>} deletePath Path to the data to be deleted
 * @returns newData without the deleted items by path
 */
export declare const deleteNestedDataByPath: (oldData: unknown, deletePath: Array<string>) => any;
