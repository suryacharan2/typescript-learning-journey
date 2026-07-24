// repository.ts
// What this file demonstrates: a reusable generic repository class
// Concepts used: generics, generic constraints, arrays
// Expected output: no direct output, this class is used by taskService.ts

interface HasId {
  readonly id: number;
}

export class Repository<T extends HasId> {
  private items: T[] = [];
  private nextId = 1;

  add(itemWithoutId: Omit<T, "id">): T {
    const newItem = { ...itemWithoutId, id: this.nextId++ } as T;
    this.items.push(newItem);
    return newItem;
  }

  update(id: number, updates: Partial<T>): T | undefined {
    const item = this.items.find((i) => i.id === id);
    if (!item) return undefined;
    Object.assign(item, updates);
    return item;
  }

  findById(id: number): T | undefined {
    return this.items.find((i) => i.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  filter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}
