
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Capacity
 * 
 */
export type Capacity = $Result.DefaultSelection<Prisma.$CapacityPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Size
 * 
 */
export type Size = $Result.DefaultSelection<Prisma.$SizePayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model GeneralInfo
 * 
 */
export type GeneralInfo = $Result.DefaultSelection<Prisma.$GeneralInfoPayload>
/**
 * Model Tool
 * 
 */
export type Tool = $Result.DefaultSelection<Prisma.$ToolPayload>
/**
 * Model Master
 * 
 */
export type Master = $Result.DefaultSelection<Prisma.$MasterPayload>
/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model MasterProfession
 * 
 */
export type MasterProfession = $Result.DefaultSelection<Prisma.$MasterProfessionPayload>
/**
 * Model professionTool
 * 
 */
export type professionTool = $Result.DefaultSelection<Prisma.$professionToolPayload>
/**
 * Model professionLevel
 * 
 */
export type professionLevel = $Result.DefaultSelection<Prisma.$professionLevelPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  VIEWER_ADMIN: 'VIEWER_ADMIN',
  USER_FIZ: 'USER_FIZ',
  USER_YUR: 'USER_YUR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capacity`: Exposes CRUD operations for the **Capacity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capacities
    * const capacities = await prisma.capacity.findMany()
    * ```
    */
  get capacity(): Prisma.CapacityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generalInfo`: Exposes CRUD operations for the **GeneralInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralInfos
    * const generalInfos = await prisma.generalInfo.findMany()
    * ```
    */
  get generalInfo(): Prisma.GeneralInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **Tool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tool.findMany()
    * ```
    */
  get tool(): Prisma.ToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.master`: Exposes CRUD operations for the **Master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Masters
    * const masters = await prisma.master.findMany()
    * ```
    */
  get master(): Prisma.MasterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterProfession`: Exposes CRUD operations for the **MasterProfession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterProfessions
    * const masterProfessions = await prisma.masterProfession.findMany()
    * ```
    */
  get masterProfession(): Prisma.MasterProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionTool`: Exposes CRUD operations for the **professionTool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionTools
    * const professionTools = await prisma.professionTool.findMany()
    * ```
    */
  get professionTool(): Prisma.professionToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionLevel`: Exposes CRUD operations for the **professionLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionLevels
    * const professionLevels = await prisma.professionLevel.findMany()
    * ```
    */
  get professionLevel(): Prisma.professionLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Region: 'Region',
    Capacity: 'Capacity',
    Brand: 'Brand',
    Size: 'Size',
    Level: 'Level',
    GeneralInfo: 'GeneralInfo',
    Tool: 'Tool',
    Master: 'Master',
    Profession: 'Profession',
    MasterProfession: 'MasterProfession',
    professionTool: 'professionTool',
    professionLevel: 'professionLevel',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "region" | "capacity" | "brand" | "size" | "level" | "generalInfo" | "tool" | "master" | "profession" | "masterProfession" | "professionTool" | "professionLevel" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Capacity: {
        payload: Prisma.$CapacityPayload<ExtArgs>
        fields: Prisma.CapacityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapacityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapacityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findFirst: {
            args: Prisma.CapacityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapacityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findMany: {
            args: Prisma.CapacityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          create: {
            args: Prisma.CapacityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          createMany: {
            args: Prisma.CapacityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapacityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          delete: {
            args: Prisma.CapacityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          update: {
            args: Prisma.CapacityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          deleteMany: {
            args: Prisma.CapacityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapacityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapacityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          upsert: {
            args: Prisma.CapacityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          aggregate: {
            args: Prisma.CapacityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapacity>
          }
          groupBy: {
            args: Prisma.CapacityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapacityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapacityCountArgs<ExtArgs>
            result: $Utils.Optional<CapacityCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Size: {
        payload: Prisma.$SizePayload<ExtArgs>
        fields: Prisma.SizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      GeneralInfo: {
        payload: Prisma.$GeneralInfoPayload<ExtArgs>
        fields: Prisma.GeneralInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          findFirst: {
            args: Prisma.GeneralInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          findMany: {
            args: Prisma.GeneralInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>[]
          }
          create: {
            args: Prisma.GeneralInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          createMany: {
            args: Prisma.GeneralInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneralInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>[]
          }
          delete: {
            args: Prisma.GeneralInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          update: {
            args: Prisma.GeneralInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          deleteMany: {
            args: Prisma.GeneralInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneralInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>[]
          }
          upsert: {
            args: Prisma.GeneralInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralInfoPayload>
          }
          aggregate: {
            args: Prisma.GeneralInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralInfo>
          }
          groupBy: {
            args: Prisma.GeneralInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralInfoCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralInfoCountAggregateOutputType> | number
          }
        }
      }
      Tool: {
        payload: Prisma.$ToolPayload<ExtArgs>
        fields: Prisma.ToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findFirst: {
            args: Prisma.ToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findMany: {
            args: Prisma.ToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          create: {
            args: Prisma.ToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          createMany: {
            args: Prisma.ToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          delete: {
            args: Prisma.ToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          update: {
            args: Prisma.ToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          deleteMany: {
            args: Prisma.ToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          upsert: {
            args: Prisma.ToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTool>
          }
          groupBy: {
            args: Prisma.ToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCountAggregateOutputType> | number
          }
        }
      }
      Master: {
        payload: Prisma.$MasterPayload<ExtArgs>
        fields: Prisma.MasterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          findFirst: {
            args: Prisma.MasterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          findMany: {
            args: Prisma.MasterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>[]
          }
          create: {
            args: Prisma.MasterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          createMany: {
            args: Prisma.MasterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>[]
          }
          delete: {
            args: Prisma.MasterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          update: {
            args: Prisma.MasterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          deleteMany: {
            args: Prisma.MasterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>[]
          }
          upsert: {
            args: Prisma.MasterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPayload>
          }
          aggregate: {
            args: Prisma.MasterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster>
          }
          groupBy: {
            args: Prisma.MasterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterCountArgs<ExtArgs>
            result: $Utils.Optional<MasterCountAggregateOutputType> | number
          }
        }
      }
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      MasterProfession: {
        payload: Prisma.$MasterProfessionPayload<ExtArgs>
        fields: Prisma.MasterProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          findFirst: {
            args: Prisma.MasterProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          findMany: {
            args: Prisma.MasterProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>[]
          }
          create: {
            args: Prisma.MasterProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          createMany: {
            args: Prisma.MasterProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>[]
          }
          delete: {
            args: Prisma.MasterProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          update: {
            args: Prisma.MasterProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          deleteMany: {
            args: Prisma.MasterProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>[]
          }
          upsert: {
            args: Prisma.MasterProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterProfessionPayload>
          }
          aggregate: {
            args: Prisma.MasterProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterProfession>
          }
          groupBy: {
            args: Prisma.MasterProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<MasterProfessionCountAggregateOutputType> | number
          }
        }
      }
      professionTool: {
        payload: Prisma.$professionToolPayload<ExtArgs>
        fields: Prisma.professionToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professionToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professionToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          findFirst: {
            args: Prisma.professionToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professionToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          findMany: {
            args: Prisma.professionToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>[]
          }
          create: {
            args: Prisma.professionToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          createMany: {
            args: Prisma.professionToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professionToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>[]
          }
          delete: {
            args: Prisma.professionToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          update: {
            args: Prisma.professionToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          deleteMany: {
            args: Prisma.professionToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professionToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professionToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>[]
          }
          upsert: {
            args: Prisma.professionToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionToolPayload>
          }
          aggregate: {
            args: Prisma.ProfessionToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionTool>
          }
          groupBy: {
            args: Prisma.professionToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.professionToolCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionToolCountAggregateOutputType> | number
          }
        }
      }
      professionLevel: {
        payload: Prisma.$professionLevelPayload<ExtArgs>
        fields: Prisma.professionLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professionLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professionLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          findFirst: {
            args: Prisma.professionLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professionLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          findMany: {
            args: Prisma.professionLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>[]
          }
          create: {
            args: Prisma.professionLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          createMany: {
            args: Prisma.professionLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professionLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>[]
          }
          delete: {
            args: Prisma.professionLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          update: {
            args: Prisma.professionLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          deleteMany: {
            args: Prisma.professionLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professionLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professionLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>[]
          }
          upsert: {
            args: Prisma.professionLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionLevelPayload>
          }
          aggregate: {
            args: Prisma.ProfessionLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionLevel>
          }
          groupBy: {
            args: Prisma.professionLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.professionLevelCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionLevelCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    region?: RegionOmit
    capacity?: CapacityOmit
    brand?: BrandOmit
    size?: SizeOmit
    level?: LevelOmit
    generalInfo?: GeneralInfoOmit
    tool?: ToolOmit
    master?: MasterOmit
    profession?: ProfessionOmit
    masterProfession?: MasterProfessionOmit
    professionTool?: professionToolOmit
    professionLevel?: professionLevelOmit
    order?: OrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    User: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RegionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CapacityCountOutputType
   */

  export type CapacityCountOutputType = {
    Tool: number
  }

  export type CapacityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | CapacityCountOutputTypeCountToolArgs
  }

  // Custom InputTypes
  /**
   * CapacityCountOutputType without action
   */
  export type CapacityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacityCountOutputType
     */
    select?: CapacityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CapacityCountOutputType without action
   */
  export type CapacityCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Tool: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | BrandCountOutputTypeCountToolArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }


  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    Tool: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | SizeCountOutputTypeCountToolArgs
  }

  // Custom InputTypes
  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
  }


  /**
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    MasterProfession: number
    professionLevel: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | LevelCountOutputTypeCountMasterProfessionArgs
    professionLevel?: boolean | LevelCountOutputTypeCountProfessionLevelArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountMasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterProfessionWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountProfessionLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionLevelWhereInput
  }


  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    professionTool: number
  }

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionTool?: boolean | ToolCountOutputTypeCountProfessionToolArgs
  }

  // Custom InputTypes
  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountProfessionToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionToolWhereInput
  }


  /**
   * Count Type MasterCountOutputType
   */

  export type MasterCountOutputType = {
    MasterProfession: number
  }

  export type MasterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | MasterCountOutputTypeCountMasterProfessionArgs
  }

  // Custom InputTypes
  /**
   * MasterCountOutputType without action
   */
  export type MasterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCountOutputType
     */
    select?: MasterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterCountOutputType without action
   */
  export type MasterCountOutputTypeCountMasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterProfessionWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    MasterProfession: number
    professionTool: number
    professionLevel: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | ProfessionCountOutputTypeCountMasterProfessionArgs
    professionTool?: boolean | ProfessionCountOutputTypeCountProfessionToolArgs
    professionLevel?: boolean | ProfessionCountOutputTypeCountProfessionLevelArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountMasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterProfessionWhereInput
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountProfessionToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionToolWhereInput
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountProfessionLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionLevelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    salary: number | null
  }

  export type UserSumAggregateOutputType = {
    salary: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    password: string | null
    inn: string | null
    bank: string | null
    mfo: string | null
    salary: number | null
    account: string | null
    address: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    regionId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    password: string | null
    inn: string | null
    bank: string | null
    mfo: string | null
    salary: number | null
    account: string | null
    address: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    regionId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    password: number
    inn: number
    bank: number
    mfo: number
    salary: number
    account: number
    address: number
    role: number
    createdAt: number
    regionId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    salary?: true
  }

  export type UserSumAggregateInputType = {
    salary?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    inn?: true
    bank?: true
    mfo?: true
    salary?: true
    account?: true
    address?: true
    role?: true
    createdAt?: true
    regionId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    inn?: true
    bank?: true
    mfo?: true
    salary?: true
    account?: true
    address?: true
    role?: true
    createdAt?: true
    regionId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    inn?: true
    bank?: true
    mfo?: true
    salary?: true
    account?: true
    address?: true
    role?: true
    createdAt?: true
    regionId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    password: string
    inn: string | null
    bank: string | null
    mfo: string | null
    salary: number | null
    account: string | null
    address: string | null
    role: $Enums.UserRole
    createdAt: Date
    regionId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    inn?: boolean
    bank?: boolean
    mfo?: boolean
    salary?: boolean
    account?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    regionId?: boolean
    Region?: boolean | RegionDefaultArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    inn?: boolean
    bank?: boolean
    mfo?: boolean
    salary?: boolean
    account?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    regionId?: boolean
    Region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    inn?: boolean
    bank?: boolean
    mfo?: boolean
    salary?: boolean
    account?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    regionId?: boolean
    Region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    inn?: boolean
    bank?: boolean
    mfo?: boolean
    salary?: boolean
    account?: boolean
    address?: boolean
    role?: boolean
    createdAt?: boolean
    regionId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "password" | "inn" | "bank" | "mfo" | "salary" | "account" | "address" | "role" | "createdAt" | "regionId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Region?: boolean | RegionDefaultArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Region: Prisma.$RegionPayload<ExtArgs>
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      password: string
      inn: string | null
      bank: string | null
      mfo: string | null
      salary: number | null
      account: string | null
      address: string | null
      role: $Enums.UserRole
      createdAt: Date
      regionId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly inn: FieldRef<"User", 'String'>
    readonly bank: FieldRef<"User", 'String'>
    readonly mfo: FieldRef<"User", 'String'>
    readonly salary: FieldRef<"User", 'Float'>
    readonly account: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly regionId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    createdAt: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt: Date
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
    User?: boolean | Region$UserArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "createdAt", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Region$UserArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      createdAt: Date
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Region$UserArgs<ExtArgs> = {}>(args?: Subset<T, Region$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly name_uz: FieldRef<"Region", 'String'>
    readonly name_ru: FieldRef<"Region", 'String'>
    readonly name_en: FieldRef<"Region", 'String'>
    readonly createdAt: FieldRef<"Region", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.User
   */
  export type Region$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Capacity
   */

  export type AggregateCapacity = {
    _count: CapacityCountAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  export type CapacityMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type CapacityMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type CapacityCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    createdAt: number
    _all: number
  }


  export type CapacityMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type CapacityMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type CapacityCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
    _all?: true
  }

  export type CapacityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacity to aggregate.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capacities
    **/
    _count?: true | CapacityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapacityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapacityMaxAggregateInputType
  }

  export type GetCapacityAggregateType<T extends CapacityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapacity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapacity[P]>
      : GetScalarType<T[P], AggregateCapacity[P]>
  }




  export type CapacityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapacityWhereInput
    orderBy?: CapacityOrderByWithAggregationInput | CapacityOrderByWithAggregationInput[]
    by: CapacityScalarFieldEnum[] | CapacityScalarFieldEnum
    having?: CapacityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapacityCountAggregateInputType | true
    _min?: CapacityMinAggregateInputType
    _max?: CapacityMaxAggregateInputType
  }

  export type CapacityGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt: Date
    _count: CapacityCountAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  type GetCapacityGroupByPayload<T extends CapacityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapacityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapacityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapacityGroupByOutputType[P]>
            : GetScalarType<T[P], CapacityGroupByOutputType[P]>
        }
      >
    >


  export type CapacitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
    Tool?: boolean | Capacity$ToolArgs<ExtArgs>
    _count?: boolean | CapacityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }

  export type CapacityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "createdAt", ExtArgs["result"]["capacity"]>
  export type CapacityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | Capacity$ToolArgs<ExtArgs>
    _count?: boolean | CapacityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CapacityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CapacityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CapacityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capacity"
    objects: {
      Tool: Prisma.$ToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      createdAt: Date
    }, ExtArgs["result"]["capacity"]>
    composites: {}
  }

  type CapacityGetPayload<S extends boolean | null | undefined | CapacityDefaultArgs> = $Result.GetResult<Prisma.$CapacityPayload, S>

  type CapacityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapacityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapacityCountAggregateInputType | true
    }

  export interface CapacityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capacity'], meta: { name: 'Capacity' } }
    /**
     * Find zero or one Capacity that matches the filter.
     * @param {CapacityFindUniqueArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapacityFindUniqueArgs>(args: SelectSubset<T, CapacityFindUniqueArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Capacity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapacityFindUniqueOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapacityFindUniqueOrThrowArgs>(args: SelectSubset<T, CapacityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capacity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapacityFindFirstArgs>(args?: SelectSubset<T, CapacityFindFirstArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capacity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapacityFindFirstOrThrowArgs>(args?: SelectSubset<T, CapacityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capacities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capacities
     * const capacities = await prisma.capacity.findMany()
     * 
     * // Get first 10 Capacities
     * const capacities = await prisma.capacity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capacityWithIdOnly = await prisma.capacity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapacityFindManyArgs>(args?: SelectSubset<T, CapacityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Capacity.
     * @param {CapacityCreateArgs} args - Arguments to create a Capacity.
     * @example
     * // Create one Capacity
     * const Capacity = await prisma.capacity.create({
     *   data: {
     *     // ... data to create a Capacity
     *   }
     * })
     * 
     */
    create<T extends CapacityCreateArgs>(args: SelectSubset<T, CapacityCreateArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Capacities.
     * @param {CapacityCreateManyArgs} args - Arguments to create many Capacities.
     * @example
     * // Create many Capacities
     * const capacity = await prisma.capacity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapacityCreateManyArgs>(args?: SelectSubset<T, CapacityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Capacities and returns the data saved in the database.
     * @param {CapacityCreateManyAndReturnArgs} args - Arguments to create many Capacities.
     * @example
     * // Create many Capacities
     * const capacity = await prisma.capacity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Capacities and only return the `id`
     * const capacityWithIdOnly = await prisma.capacity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapacityCreateManyAndReturnArgs>(args?: SelectSubset<T, CapacityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Capacity.
     * @param {CapacityDeleteArgs} args - Arguments to delete one Capacity.
     * @example
     * // Delete one Capacity
     * const Capacity = await prisma.capacity.delete({
     *   where: {
     *     // ... filter to delete one Capacity
     *   }
     * })
     * 
     */
    delete<T extends CapacityDeleteArgs>(args: SelectSubset<T, CapacityDeleteArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Capacity.
     * @param {CapacityUpdateArgs} args - Arguments to update one Capacity.
     * @example
     * // Update one Capacity
     * const capacity = await prisma.capacity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapacityUpdateArgs>(args: SelectSubset<T, CapacityUpdateArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Capacities.
     * @param {CapacityDeleteManyArgs} args - Arguments to filter Capacities to delete.
     * @example
     * // Delete a few Capacities
     * const { count } = await prisma.capacity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapacityDeleteManyArgs>(args?: SelectSubset<T, CapacityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapacityUpdateManyArgs>(args: SelectSubset<T, CapacityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities and returns the data updated in the database.
     * @param {CapacityUpdateManyAndReturnArgs} args - Arguments to update many Capacities.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Capacities and only return the `id`
     * const capacityWithIdOnly = await prisma.capacity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapacityUpdateManyAndReturnArgs>(args: SelectSubset<T, CapacityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Capacity.
     * @param {CapacityUpsertArgs} args - Arguments to update or create a Capacity.
     * @example
     * // Update or create a Capacity
     * const capacity = await prisma.capacity.upsert({
     *   create: {
     *     // ... data to create a Capacity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capacity we want to update
     *   }
     * })
     */
    upsert<T extends CapacityUpsertArgs>(args: SelectSubset<T, CapacityUpsertArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityCountArgs} args - Arguments to filter Capacities to count.
     * @example
     * // Count the number of Capacities
     * const count = await prisma.capacity.count({
     *   where: {
     *     // ... the filter for the Capacities we want to count
     *   }
     * })
    **/
    count<T extends CapacityCountArgs>(
      args?: Subset<T, CapacityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapacityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapacityAggregateArgs>(args: Subset<T, CapacityAggregateArgs>): Prisma.PrismaPromise<GetCapacityAggregateType<T>>

    /**
     * Group by Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapacityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapacityGroupByArgs['orderBy'] }
        : { orderBy?: CapacityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapacityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapacityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capacity model
   */
  readonly fields: CapacityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capacity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapacityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tool<T extends Capacity$ToolArgs<ExtArgs> = {}>(args?: Subset<T, Capacity$ToolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Capacity model
   */
  interface CapacityFieldRefs {
    readonly id: FieldRef<"Capacity", 'String'>
    readonly name_uz: FieldRef<"Capacity", 'String'>
    readonly name_ru: FieldRef<"Capacity", 'String'>
    readonly name_en: FieldRef<"Capacity", 'String'>
    readonly createdAt: FieldRef<"Capacity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Capacity findUnique
   */
  export type CapacityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity findUniqueOrThrow
   */
  export type CapacityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity findFirst
   */
  export type CapacityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity findFirstOrThrow
   */
  export type CapacityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity findMany
   */
  export type CapacityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacities to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity create
   */
  export type CapacityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The data needed to create a Capacity.
     */
    data: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
  }

  /**
   * Capacity createMany
   */
  export type CapacityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capacities.
     */
    data: CapacityCreateManyInput | CapacityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capacity createManyAndReturn
   */
  export type CapacityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data used to create many Capacities.
     */
    data: CapacityCreateManyInput | CapacityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capacity update
   */
  export type CapacityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The data needed to update a Capacity.
     */
    data: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
    /**
     * Choose, which Capacity to update.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity updateMany
   */
  export type CapacityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capacities.
     */
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyInput>
    /**
     * Filter which Capacities to update
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to update.
     */
    limit?: number
  }

  /**
   * Capacity updateManyAndReturn
   */
  export type CapacityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data used to update Capacities.
     */
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyInput>
    /**
     * Filter which Capacities to update
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to update.
     */
    limit?: number
  }

  /**
   * Capacity upsert
   */
  export type CapacityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The filter to search for the Capacity to update in case it exists.
     */
    where: CapacityWhereUniqueInput
    /**
     * In case the Capacity found by the `where` argument doesn't exist, create a new Capacity with this data.
     */
    create: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
    /**
     * In case the Capacity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
  }

  /**
   * Capacity delete
   */
  export type CapacityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter which Capacity to delete.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity deleteMany
   */
  export type CapacityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacities to delete
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to delete.
     */
    limit?: number
  }

  /**
   * Capacity.Tool
   */
  export type Capacity$ToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Capacity without action
   */
  export type CapacityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapacityInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    createdAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
    Tool?: boolean | Brand$ToolArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "createdAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | Brand$ToolArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Tool: Prisma.$ToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      createdAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tool<T extends Brand$ToolArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ToolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name_uz: FieldRef<"Brand", 'String'>
    readonly name_ru: FieldRef<"Brand", 'String'>
    readonly name_en: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.Tool
   */
  export type Brand$ToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type SizeMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    createdAt: number
    _all: number
  }


  export type SizeMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithAggregationInput | SizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt: Date
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
    Tool?: boolean | Size$ToolArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["size"]>

  export type SizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }

  export type SizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "createdAt", ExtArgs["result"]["size"]>
  export type SizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tool?: boolean | Size$ToolArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size"
    objects: {
      Tool: Prisma.$ToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      createdAt: Date
    }, ExtArgs["result"]["size"]>
    composites: {}
  }

  type SizeGetPayload<S extends boolean | null | undefined | SizeDefaultArgs> = $Result.GetResult<Prisma.$SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SizeFindUniqueArgs>(args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Size that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs>(args: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SizeFindFirstArgs>(args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs>(args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SizeFindManyArgs>(args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
     */
    create<T extends SizeCreateArgs>(args: SelectSubset<T, SizeCreateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SizeCreateManyArgs>(args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {SizeCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SizeCreateManyAndReturnArgs>(args?: SelectSubset<T, SizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
     */
    delete<T extends SizeDeleteArgs>(args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SizeUpdateArgs>(args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SizeDeleteManyArgs>(args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SizeUpdateManyArgs>(args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {SizeUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SizeUpdateManyAndReturnArgs>(args: SelectSubset<T, SizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
     */
    upsert<T extends SizeUpsertArgs>(args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size model
   */
  readonly fields: SizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tool<T extends Size$ToolArgs<ExtArgs> = {}>(args?: Subset<T, Size$ToolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Size model
   */
  interface SizeFieldRefs {
    readonly id: FieldRef<"Size", 'String'>
    readonly name_uz: FieldRef<"Size", 'String'>
    readonly name_ru: FieldRef<"Size", 'String'>
    readonly name_en: FieldRef<"Size", 'String'>
    readonly createdAt: FieldRef<"Size", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }

  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Size createManyAndReturn
   */
  export type SizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Size updateManyAndReturn
   */
  export type SizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }

  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to delete.
     */
    limit?: number
  }

  /**
   * Size.Tool
   */
  export type Size$ToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    cursor?: ToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Size without action
   */
  export type SizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type LevelMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    createdAt: Date | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    createdAt: number
    _all: number
  }


  export type LevelMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    createdAt?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt: Date
    _count: LevelCountAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
    MasterProfession?: boolean | Level$MasterProfessionArgs<ExtArgs>
    professionLevel?: boolean | Level$professionLevelArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    createdAt?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "createdAt", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | Level$MasterProfessionArgs<ExtArgs>
    professionLevel?: boolean | Level$professionLevelArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      MasterProfession: Prisma.$MasterProfessionPayload<ExtArgs>[]
      professionLevel: Prisma.$professionLevelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      createdAt: Date
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MasterProfession<T extends Level$MasterProfessionArgs<ExtArgs> = {}>(args?: Subset<T, Level$MasterProfessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionLevel<T extends Level$professionLevelArgs<ExtArgs> = {}>(args?: Subset<T, Level$professionLevelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'String'>
    readonly name_uz: FieldRef<"Level", 'String'>
    readonly name_ru: FieldRef<"Level", 'String'>
    readonly name_en: FieldRef<"Level", 'String'>
    readonly createdAt: FieldRef<"Level", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.MasterProfession
   */
  export type Level$MasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    where?: MasterProfessionWhereInput
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    cursor?: MasterProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * Level.professionLevel
   */
  export type Level$professionLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    where?: professionLevelWhereInput
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    cursor?: professionLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionLevelScalarFieldEnum | ProfessionLevelScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model GeneralInfo
   */

  export type AggregateGeneralInfo = {
    _count: GeneralInfoCountAggregateOutputType | null
    _min: GeneralInfoMinAggregateOutputType | null
    _max: GeneralInfoMaxAggregateOutputType | null
  }

  export type GeneralInfoMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    address: string | null
    telegram: string | null
    instagram: string | null
    description: string | null
    createdAt: Date | null
  }

  export type GeneralInfoMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    address: string | null
    telegram: string | null
    instagram: string | null
    description: string | null
    createdAt: Date | null
  }

  export type GeneralInfoCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    address: number
    telegram: number
    instagram: number
    description: number
    createdAt: number
    _all: number
  }


  export type GeneralInfoMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    address?: true
    telegram?: true
    instagram?: true
    description?: true
    createdAt?: true
  }

  export type GeneralInfoMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    address?: true
    telegram?: true
    instagram?: true
    description?: true
    createdAt?: true
  }

  export type GeneralInfoCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    address?: true
    telegram?: true
    instagram?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type GeneralInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralInfo to aggregate.
     */
    where?: GeneralInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralInfos to fetch.
     */
    orderBy?: GeneralInfoOrderByWithRelationInput | GeneralInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralInfos
    **/
    _count?: true | GeneralInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralInfoMaxAggregateInputType
  }

  export type GetGeneralInfoAggregateType<T extends GeneralInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralInfo[P]>
      : GetScalarType<T[P], AggregateGeneralInfo[P]>
  }




  export type GeneralInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralInfoWhereInput
    orderBy?: GeneralInfoOrderByWithAggregationInput | GeneralInfoOrderByWithAggregationInput[]
    by: GeneralInfoScalarFieldEnum[] | GeneralInfoScalarFieldEnum
    having?: GeneralInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralInfoCountAggregateInputType | true
    _min?: GeneralInfoMinAggregateInputType
    _max?: GeneralInfoMaxAggregateInputType
  }

  export type GeneralInfoGroupByOutputType = {
    id: string
    phone: string
    email: string
    address: string | null
    telegram: string | null
    instagram: string | null
    description: string | null
    createdAt: Date
    _count: GeneralInfoCountAggregateOutputType | null
    _min: GeneralInfoMinAggregateOutputType | null
    _max: GeneralInfoMaxAggregateOutputType | null
  }

  type GetGeneralInfoGroupByPayload<T extends GeneralInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralInfoGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralInfoGroupByOutputType[P]>
        }
      >
    >


  export type GeneralInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    telegram?: boolean
    instagram?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["generalInfo"]>

  export type GeneralInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    telegram?: boolean
    instagram?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["generalInfo"]>

  export type GeneralInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    telegram?: boolean
    instagram?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["generalInfo"]>

  export type GeneralInfoSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    telegram?: boolean
    instagram?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type GeneralInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "address" | "telegram" | "instagram" | "description" | "createdAt", ExtArgs["result"]["generalInfo"]>

  export type $GeneralInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      email: string
      address: string | null
      telegram: string | null
      instagram: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["generalInfo"]>
    composites: {}
  }

  type GeneralInfoGetPayload<S extends boolean | null | undefined | GeneralInfoDefaultArgs> = $Result.GetResult<Prisma.$GeneralInfoPayload, S>

  type GeneralInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralInfoCountAggregateInputType | true
    }

  export interface GeneralInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralInfo'], meta: { name: 'GeneralInfo' } }
    /**
     * Find zero or one GeneralInfo that matches the filter.
     * @param {GeneralInfoFindUniqueArgs} args - Arguments to find a GeneralInfo
     * @example
     * // Get one GeneralInfo
     * const generalInfo = await prisma.generalInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralInfoFindUniqueArgs>(args: SelectSubset<T, GeneralInfoFindUniqueArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneralInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralInfoFindUniqueOrThrowArgs} args - Arguments to find a GeneralInfo
     * @example
     * // Get one GeneralInfo
     * const generalInfo = await prisma.generalInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoFindFirstArgs} args - Arguments to find a GeneralInfo
     * @example
     * // Get one GeneralInfo
     * const generalInfo = await prisma.generalInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralInfoFindFirstArgs>(args?: SelectSubset<T, GeneralInfoFindFirstArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoFindFirstOrThrowArgs} args - Arguments to find a GeneralInfo
     * @example
     * // Get one GeneralInfo
     * const generalInfo = await prisma.generalInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralInfos
     * const generalInfos = await prisma.generalInfo.findMany()
     * 
     * // Get first 10 GeneralInfos
     * const generalInfos = await prisma.generalInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalInfoWithIdOnly = await prisma.generalInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralInfoFindManyArgs>(args?: SelectSubset<T, GeneralInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneralInfo.
     * @param {GeneralInfoCreateArgs} args - Arguments to create a GeneralInfo.
     * @example
     * // Create one GeneralInfo
     * const GeneralInfo = await prisma.generalInfo.create({
     *   data: {
     *     // ... data to create a GeneralInfo
     *   }
     * })
     * 
     */
    create<T extends GeneralInfoCreateArgs>(args: SelectSubset<T, GeneralInfoCreateArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneralInfos.
     * @param {GeneralInfoCreateManyArgs} args - Arguments to create many GeneralInfos.
     * @example
     * // Create many GeneralInfos
     * const generalInfo = await prisma.generalInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralInfoCreateManyArgs>(args?: SelectSubset<T, GeneralInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneralInfos and returns the data saved in the database.
     * @param {GeneralInfoCreateManyAndReturnArgs} args - Arguments to create many GeneralInfos.
     * @example
     * // Create many GeneralInfos
     * const generalInfo = await prisma.generalInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneralInfos and only return the `id`
     * const generalInfoWithIdOnly = await prisma.generalInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneralInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneralInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneralInfo.
     * @param {GeneralInfoDeleteArgs} args - Arguments to delete one GeneralInfo.
     * @example
     * // Delete one GeneralInfo
     * const GeneralInfo = await prisma.generalInfo.delete({
     *   where: {
     *     // ... filter to delete one GeneralInfo
     *   }
     * })
     * 
     */
    delete<T extends GeneralInfoDeleteArgs>(args: SelectSubset<T, GeneralInfoDeleteArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneralInfo.
     * @param {GeneralInfoUpdateArgs} args - Arguments to update one GeneralInfo.
     * @example
     * // Update one GeneralInfo
     * const generalInfo = await prisma.generalInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralInfoUpdateArgs>(args: SelectSubset<T, GeneralInfoUpdateArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneralInfos.
     * @param {GeneralInfoDeleteManyArgs} args - Arguments to filter GeneralInfos to delete.
     * @example
     * // Delete a few GeneralInfos
     * const { count } = await prisma.generalInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralInfoDeleteManyArgs>(args?: SelectSubset<T, GeneralInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralInfos
     * const generalInfo = await prisma.generalInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralInfoUpdateManyArgs>(args: SelectSubset<T, GeneralInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralInfos and returns the data updated in the database.
     * @param {GeneralInfoUpdateManyAndReturnArgs} args - Arguments to update many GeneralInfos.
     * @example
     * // Update many GeneralInfos
     * const generalInfo = await prisma.generalInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneralInfos and only return the `id`
     * const generalInfoWithIdOnly = await prisma.generalInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneralInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneralInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneralInfo.
     * @param {GeneralInfoUpsertArgs} args - Arguments to update or create a GeneralInfo.
     * @example
     * // Update or create a GeneralInfo
     * const generalInfo = await prisma.generalInfo.upsert({
     *   create: {
     *     // ... data to create a GeneralInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralInfo we want to update
     *   }
     * })
     */
    upsert<T extends GeneralInfoUpsertArgs>(args: SelectSubset<T, GeneralInfoUpsertArgs<ExtArgs>>): Prisma__GeneralInfoClient<$Result.GetResult<Prisma.$GeneralInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneralInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoCountArgs} args - Arguments to filter GeneralInfos to count.
     * @example
     * // Count the number of GeneralInfos
     * const count = await prisma.generalInfo.count({
     *   where: {
     *     // ... the filter for the GeneralInfos we want to count
     *   }
     * })
    **/
    count<T extends GeneralInfoCountArgs>(
      args?: Subset<T, GeneralInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneralInfoAggregateArgs>(args: Subset<T, GeneralInfoAggregateArgs>): Prisma.PrismaPromise<GetGeneralInfoAggregateType<T>>

    /**
     * Group by GeneralInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneralInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralInfoGroupByArgs['orderBy'] }
        : { orderBy?: GeneralInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneralInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralInfo model
   */
  readonly fields: GeneralInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneralInfo model
   */
  interface GeneralInfoFieldRefs {
    readonly id: FieldRef<"GeneralInfo", 'String'>
    readonly phone: FieldRef<"GeneralInfo", 'String'>
    readonly email: FieldRef<"GeneralInfo", 'String'>
    readonly address: FieldRef<"GeneralInfo", 'String'>
    readonly telegram: FieldRef<"GeneralInfo", 'String'>
    readonly instagram: FieldRef<"GeneralInfo", 'String'>
    readonly description: FieldRef<"GeneralInfo", 'String'>
    readonly createdAt: FieldRef<"GeneralInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneralInfo findUnique
   */
  export type GeneralInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter, which GeneralInfo to fetch.
     */
    where: GeneralInfoWhereUniqueInput
  }

  /**
   * GeneralInfo findUniqueOrThrow
   */
  export type GeneralInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter, which GeneralInfo to fetch.
     */
    where: GeneralInfoWhereUniqueInput
  }

  /**
   * GeneralInfo findFirst
   */
  export type GeneralInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter, which GeneralInfo to fetch.
     */
    where?: GeneralInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralInfos to fetch.
     */
    orderBy?: GeneralInfoOrderByWithRelationInput | GeneralInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralInfos.
     */
    cursor?: GeneralInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralInfos.
     */
    distinct?: GeneralInfoScalarFieldEnum | GeneralInfoScalarFieldEnum[]
  }

  /**
   * GeneralInfo findFirstOrThrow
   */
  export type GeneralInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter, which GeneralInfo to fetch.
     */
    where?: GeneralInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralInfos to fetch.
     */
    orderBy?: GeneralInfoOrderByWithRelationInput | GeneralInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralInfos.
     */
    cursor?: GeneralInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralInfos.
     */
    distinct?: GeneralInfoScalarFieldEnum | GeneralInfoScalarFieldEnum[]
  }

  /**
   * GeneralInfo findMany
   */
  export type GeneralInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter, which GeneralInfos to fetch.
     */
    where?: GeneralInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralInfos to fetch.
     */
    orderBy?: GeneralInfoOrderByWithRelationInput | GeneralInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralInfos.
     */
    cursor?: GeneralInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralInfos.
     */
    skip?: number
    distinct?: GeneralInfoScalarFieldEnum | GeneralInfoScalarFieldEnum[]
  }

  /**
   * GeneralInfo create
   */
  export type GeneralInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a GeneralInfo.
     */
    data: XOR<GeneralInfoCreateInput, GeneralInfoUncheckedCreateInput>
  }

  /**
   * GeneralInfo createMany
   */
  export type GeneralInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralInfos.
     */
    data: GeneralInfoCreateManyInput | GeneralInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralInfo createManyAndReturn
   */
  export type GeneralInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * The data used to create many GeneralInfos.
     */
    data: GeneralInfoCreateManyInput | GeneralInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralInfo update
   */
  export type GeneralInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a GeneralInfo.
     */
    data: XOR<GeneralInfoUpdateInput, GeneralInfoUncheckedUpdateInput>
    /**
     * Choose, which GeneralInfo to update.
     */
    where: GeneralInfoWhereUniqueInput
  }

  /**
   * GeneralInfo updateMany
   */
  export type GeneralInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralInfos.
     */
    data: XOR<GeneralInfoUpdateManyMutationInput, GeneralInfoUncheckedUpdateManyInput>
    /**
     * Filter which GeneralInfos to update
     */
    where?: GeneralInfoWhereInput
    /**
     * Limit how many GeneralInfos to update.
     */
    limit?: number
  }

  /**
   * GeneralInfo updateManyAndReturn
   */
  export type GeneralInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * The data used to update GeneralInfos.
     */
    data: XOR<GeneralInfoUpdateManyMutationInput, GeneralInfoUncheckedUpdateManyInput>
    /**
     * Filter which GeneralInfos to update
     */
    where?: GeneralInfoWhereInput
    /**
     * Limit how many GeneralInfos to update.
     */
    limit?: number
  }

  /**
   * GeneralInfo upsert
   */
  export type GeneralInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the GeneralInfo to update in case it exists.
     */
    where: GeneralInfoWhereUniqueInput
    /**
     * In case the GeneralInfo found by the `where` argument doesn't exist, create a new GeneralInfo with this data.
     */
    create: XOR<GeneralInfoCreateInput, GeneralInfoUncheckedCreateInput>
    /**
     * In case the GeneralInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralInfoUpdateInput, GeneralInfoUncheckedUpdateInput>
  }

  /**
   * GeneralInfo delete
   */
  export type GeneralInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
    /**
     * Filter which GeneralInfo to delete.
     */
    where: GeneralInfoWhereUniqueInput
  }

  /**
   * GeneralInfo deleteMany
   */
  export type GeneralInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralInfos to delete
     */
    where?: GeneralInfoWhereInput
    /**
     * Limit how many GeneralInfos to delete.
     */
    limit?: number
  }

  /**
   * GeneralInfo without action
   */
  export type GeneralInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralInfo
     */
    select?: GeneralInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralInfo
     */
    omit?: GeneralInfoOmit<ExtArgs> | null
  }


  /**
   * Model Tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  export type ToolAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    code: number | null
  }

  export type ToolSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    code: number | null
  }

  export type ToolMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    desc_uz: string | null
    desc_ru: string | null
    desc_en: string | null
    image: string | null
    price: number | null
    quantity: number | null
    code: number | null
    isActive: boolean | null
    createdAt: Date | null
    brandId: string | null
    capacityId: string | null
    sizeId: string | null
  }

  export type ToolMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    desc_uz: string | null
    desc_ru: string | null
    desc_en: string | null
    image: string | null
    price: number | null
    quantity: number | null
    code: number | null
    isActive: boolean | null
    createdAt: Date | null
    brandId: string | null
    capacityId: string | null
    sizeId: string | null
  }

  export type ToolCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    desc_uz: number
    desc_ru: number
    desc_en: number
    image: number
    price: number
    quantity: number
    code: number
    isActive: number
    createdAt: number
    brandId: number
    capacityId: number
    sizeId: number
    _all: number
  }


  export type ToolAvgAggregateInputType = {
    price?: true
    quantity?: true
    code?: true
  }

  export type ToolSumAggregateInputType = {
    price?: true
    quantity?: true
    code?: true
  }

  export type ToolMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    desc_uz?: true
    desc_ru?: true
    desc_en?: true
    image?: true
    price?: true
    quantity?: true
    code?: true
    isActive?: true
    createdAt?: true
    brandId?: true
    capacityId?: true
    sizeId?: true
  }

  export type ToolMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    desc_uz?: true
    desc_ru?: true
    desc_en?: true
    image?: true
    price?: true
    quantity?: true
    code?: true
    isActive?: true
    createdAt?: true
    brandId?: true
    capacityId?: true
    sizeId?: true
  }

  export type ToolCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    desc_uz?: true
    desc_ru?: true
    desc_en?: true
    image?: true
    price?: true
    quantity?: true
    code?: true
    isActive?: true
    createdAt?: true
    brandId?: true
    capacityId?: true
    sizeId?: true
    _all?: true
  }

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tool to aggregate.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolMaxAggregateInputType
  }

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
        [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>
  }




  export type ToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithAggregationInput | ToolOrderByWithAggregationInput[]
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum
    having?: ToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCountAggregateInputType | true
    _avg?: ToolAvgAggregateInputType
    _sum?: ToolSumAggregateInputType
    _min?: ToolMinAggregateInputType
    _max?: ToolMaxAggregateInputType
  }

  export type ToolGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code: number | null
    isActive: boolean | null
    createdAt: Date
    brandId: string
    capacityId: string
    sizeId: string
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  type GetToolGroupByPayload<T extends ToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolGroupByOutputType[P]>
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
        }
      >
    >


  export type ToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    desc_uz?: boolean
    desc_ru?: boolean
    desc_en?: boolean
    image?: boolean
    price?: boolean
    quantity?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    brandId?: boolean
    capacityId?: boolean
    sizeId?: boolean
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
    professionTool?: boolean | Tool$professionToolArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    desc_uz?: boolean
    desc_ru?: boolean
    desc_en?: boolean
    image?: boolean
    price?: boolean
    quantity?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    brandId?: boolean
    capacityId?: boolean
    sizeId?: boolean
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    desc_uz?: boolean
    desc_ru?: boolean
    desc_en?: boolean
    image?: boolean
    price?: boolean
    quantity?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    brandId?: boolean
    capacityId?: boolean
    sizeId?: boolean
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    desc_uz?: boolean
    desc_ru?: boolean
    desc_en?: boolean
    image?: boolean
    price?: boolean
    quantity?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    brandId?: boolean
    capacityId?: boolean
    sizeId?: boolean
  }

  export type ToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "desc_uz" | "desc_ru" | "desc_en" | "image" | "price" | "quantity" | "code" | "isActive" | "createdAt" | "brandId" | "capacityId" | "sizeId", ExtArgs["result"]["tool"]>
  export type ToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
    professionTool?: boolean | Tool$professionToolArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
  }
  export type ToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | BrandDefaultArgs<ExtArgs>
    Capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    Size?: boolean | SizeDefaultArgs<ExtArgs>
  }

  export type $ToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tool"
    objects: {
      Brand: Prisma.$BrandPayload<ExtArgs>
      Capacity: Prisma.$CapacityPayload<ExtArgs>
      Size: Prisma.$SizePayload<ExtArgs>
      professionTool: Prisma.$professionToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      desc_uz: string
      desc_ru: string
      desc_en: string
      image: string
      price: number
      quantity: number
      code: number | null
      isActive: boolean | null
      createdAt: Date
      brandId: string
      capacityId: string
      sizeId: string
    }, ExtArgs["result"]["tool"]>
    composites: {}
  }

  type ToolGetPayload<S extends boolean | null | undefined | ToolDefaultArgs> = $Result.GetResult<Prisma.$ToolPayload, S>

  type ToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCountAggregateInputType | true
    }

  export interface ToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tool'], meta: { name: 'Tool' } }
    /**
     * Find zero or one Tool that matches the filter.
     * @param {ToolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolFindUniqueArgs>(args: SelectSubset<T, ToolFindUniqueArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolFindFirstArgs>(args?: SelectSubset<T, ToolFindFirstArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolFindManyArgs>(args?: SelectSubset<T, ToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tool.
     * @param {ToolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     * 
     */
    create<T extends ToolCreateArgs>(args: SelectSubset<T, ToolCreateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {ToolCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCreateManyArgs>(args?: SelectSubset<T, ToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tool.
     * @param {ToolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     * 
     */
    delete<T extends ToolDeleteArgs>(args: SelectSubset<T, ToolDeleteArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tool.
     * @param {ToolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolUpdateArgs>(args: SelectSubset<T, ToolUpdateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {ToolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolDeleteManyArgs>(args?: SelectSubset<T, ToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolUpdateManyArgs>(args: SelectSubset<T, ToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tool.
     * @param {ToolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     */
    upsert<T extends ToolUpsertArgs>(args: SelectSubset<T, ToolUpsertArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolCountArgs>(
      args?: Subset<T, ToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToolAggregateArgs>(args: Subset<T, ToolAggregateArgs>): Prisma.PrismaPromise<GetToolAggregateType<T>>

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolGroupByArgs['orderBy'] }
        : { orderBy?: ToolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tool model
   */
  readonly fields: ToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Capacity<T extends CapacityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CapacityDefaultArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Size<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professionTool<T extends Tool$professionToolArgs<ExtArgs> = {}>(args?: Subset<T, Tool$professionToolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tool model
   */
  interface ToolFieldRefs {
    readonly id: FieldRef<"Tool", 'String'>
    readonly name_uz: FieldRef<"Tool", 'String'>
    readonly name_ru: FieldRef<"Tool", 'String'>
    readonly name_en: FieldRef<"Tool", 'String'>
    readonly desc_uz: FieldRef<"Tool", 'String'>
    readonly desc_ru: FieldRef<"Tool", 'String'>
    readonly desc_en: FieldRef<"Tool", 'String'>
    readonly image: FieldRef<"Tool", 'String'>
    readonly price: FieldRef<"Tool", 'Int'>
    readonly quantity: FieldRef<"Tool", 'Int'>
    readonly code: FieldRef<"Tool", 'Int'>
    readonly isActive: FieldRef<"Tool", 'Boolean'>
    readonly createdAt: FieldRef<"Tool", 'DateTime'>
    readonly brandId: FieldRef<"Tool", 'String'>
    readonly capacityId: FieldRef<"Tool", 'String'>
    readonly sizeId: FieldRef<"Tool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tool findUnique
   */
  export type ToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findUniqueOrThrow
   */
  export type ToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findFirst
   */
  export type ToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findFirstOrThrow
   */
  export type ToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findMany
   */
  export type ToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool create
   */
  export type ToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to create a Tool.
     */
    data: XOR<ToolCreateInput, ToolUncheckedCreateInput>
  }

  /**
   * Tool createMany
   */
  export type ToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tool createManyAndReturn
   */
  export type ToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool update
   */
  export type ToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to update a Tool.
     */
    data: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
    /**
     * Choose, which Tool to update.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool updateMany
   */
  export type ToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tool updateManyAndReturn
   */
  export type ToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tool upsert
   */
  export type ToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The filter to search for the Tool to update in case it exists.
     */
    where: ToolWhereUniqueInput
    /**
     * In case the Tool found by the `where` argument doesn't exist, create a new Tool with this data.
     */
    create: XOR<ToolCreateInput, ToolUncheckedCreateInput>
    /**
     * In case the Tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
  }

  /**
   * Tool delete
   */
  export type ToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter which Tool to delete.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool deleteMany
   */
  export type ToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to delete.
     */
    limit?: number
  }

  /**
   * Tool.professionTool
   */
  export type Tool$professionToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    where?: professionToolWhereInput
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    cursor?: professionToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionToolScalarFieldEnum | ProfessionToolScalarFieldEnum[]
  }

  /**
   * Tool without action
   */
  export type ToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
  }


  /**
   * Model Master
   */

  export type AggregateMaster = {
    _count: MasterCountAggregateOutputType | null
    _avg: MasterAvgAggregateOutputType | null
    _sum: MasterSumAggregateOutputType | null
    _min: MasterMinAggregateOutputType | null
    _max: MasterMaxAggregateOutputType | null
  }

  export type MasterAvgAggregateOutputType = {
    birthYear: number | null
  }

  export type MasterSumAggregateOutputType = {
    birthYear: number | null
  }

  export type MasterMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    birthYear: number | null
    isActive: boolean | null
    image: string | null
    passportImg: string | null
    about: string | null
    createdAt: Date | null
  }

  export type MasterMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    birthYear: number | null
    isActive: boolean | null
    image: string | null
    passportImg: string | null
    about: string | null
    createdAt: Date | null
  }

  export type MasterCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    birthYear: number
    isActive: number
    image: number
    passportImg: number
    about: number
    createdAt: number
    _all: number
  }


  export type MasterAvgAggregateInputType = {
    birthYear?: true
  }

  export type MasterSumAggregateInputType = {
    birthYear?: true
  }

  export type MasterMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    birthYear?: true
    isActive?: true
    image?: true
    passportImg?: true
    about?: true
    createdAt?: true
  }

  export type MasterMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    birthYear?: true
    isActive?: true
    image?: true
    passportImg?: true
    about?: true
    createdAt?: true
  }

  export type MasterCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    birthYear?: true
    isActive?: true
    image?: true
    passportImg?: true
    about?: true
    createdAt?: true
    _all?: true
  }

  export type MasterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Master to aggregate.
     */
    where?: MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masters to fetch.
     */
    orderBy?: MasterOrderByWithRelationInput | MasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Masters
    **/
    _count?: true | MasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterMaxAggregateInputType
  }

  export type GetMasterAggregateType<T extends MasterAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster[P]>
      : GetScalarType<T[P], AggregateMaster[P]>
  }




  export type MasterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterWhereInput
    orderBy?: MasterOrderByWithAggregationInput | MasterOrderByWithAggregationInput[]
    by: MasterScalarFieldEnum[] | MasterScalarFieldEnum
    having?: MasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterCountAggregateInputType | true
    _avg?: MasterAvgAggregateInputType
    _sum?: MasterSumAggregateInputType
    _min?: MasterMinAggregateInputType
    _max?: MasterMaxAggregateInputType
  }

  export type MasterGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive: boolean | null
    image: string | null
    passportImg: string | null
    about: string
    createdAt: Date
    _count: MasterCountAggregateOutputType | null
    _avg: MasterAvgAggregateOutputType | null
    _sum: MasterSumAggregateOutputType | null
    _min: MasterMinAggregateOutputType | null
    _max: MasterMaxAggregateOutputType | null
  }

  type GetMasterGroupByPayload<T extends MasterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterGroupByOutputType[P]>
            : GetScalarType<T[P], MasterGroupByOutputType[P]>
        }
      >
    >


  export type MasterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    birthYear?: boolean
    isActive?: boolean
    image?: boolean
    passportImg?: boolean
    about?: boolean
    createdAt?: boolean
    MasterProfession?: boolean | Master$MasterProfessionArgs<ExtArgs>
    _count?: boolean | MasterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master"]>

  export type MasterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    birthYear?: boolean
    isActive?: boolean
    image?: boolean
    passportImg?: boolean
    about?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["master"]>

  export type MasterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    birthYear?: boolean
    isActive?: boolean
    image?: boolean
    passportImg?: boolean
    about?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["master"]>

  export type MasterSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    birthYear?: boolean
    isActive?: boolean
    image?: boolean
    passportImg?: boolean
    about?: boolean
    createdAt?: boolean
  }

  export type MasterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "birthYear" | "isActive" | "image" | "passportImg" | "about" | "createdAt", ExtArgs["result"]["master"]>
  export type MasterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | Master$MasterProfessionArgs<ExtArgs>
    _count?: boolean | MasterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MasterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Master"
    objects: {
      MasterProfession: Prisma.$MasterProfessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phone: string
      birthYear: number
      isActive: boolean | null
      image: string | null
      passportImg: string | null
      about: string
      createdAt: Date
    }, ExtArgs["result"]["master"]>
    composites: {}
  }

  type MasterGetPayload<S extends boolean | null | undefined | MasterDefaultArgs> = $Result.GetResult<Prisma.$MasterPayload, S>

  type MasterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterCountAggregateInputType | true
    }

  export interface MasterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Master'], meta: { name: 'Master' } }
    /**
     * Find zero or one Master that matches the filter.
     * @param {MasterFindUniqueArgs} args - Arguments to find a Master
     * @example
     * // Get one Master
     * const master = await prisma.master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterFindUniqueArgs>(args: SelectSubset<T, MasterFindUniqueArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterFindUniqueOrThrowArgs} args - Arguments to find a Master
     * @example
     * // Get one Master
     * const master = await prisma.master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFindFirstArgs} args - Arguments to find a Master
     * @example
     * // Get one Master
     * const master = await prisma.master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterFindFirstArgs>(args?: SelectSubset<T, MasterFindFirstArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFindFirstOrThrowArgs} args - Arguments to find a Master
     * @example
     * // Get one Master
     * const master = await prisma.master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Masters
     * const masters = await prisma.master.findMany()
     * 
     * // Get first 10 Masters
     * const masters = await prisma.master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterWithIdOnly = await prisma.master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterFindManyArgs>(args?: SelectSubset<T, MasterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Master.
     * @param {MasterCreateArgs} args - Arguments to create a Master.
     * @example
     * // Create one Master
     * const Master = await prisma.master.create({
     *   data: {
     *     // ... data to create a Master
     *   }
     * })
     * 
     */
    create<T extends MasterCreateArgs>(args: SelectSubset<T, MasterCreateArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Masters.
     * @param {MasterCreateManyArgs} args - Arguments to create many Masters.
     * @example
     * // Create many Masters
     * const master = await prisma.master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterCreateManyArgs>(args?: SelectSubset<T, MasterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Masters and returns the data saved in the database.
     * @param {MasterCreateManyAndReturnArgs} args - Arguments to create many Masters.
     * @example
     * // Create many Masters
     * const master = await prisma.master.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Masters and only return the `id`
     * const masterWithIdOnly = await prisma.master.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Master.
     * @param {MasterDeleteArgs} args - Arguments to delete one Master.
     * @example
     * // Delete one Master
     * const Master = await prisma.master.delete({
     *   where: {
     *     // ... filter to delete one Master
     *   }
     * })
     * 
     */
    delete<T extends MasterDeleteArgs>(args: SelectSubset<T, MasterDeleteArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Master.
     * @param {MasterUpdateArgs} args - Arguments to update one Master.
     * @example
     * // Update one Master
     * const master = await prisma.master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterUpdateArgs>(args: SelectSubset<T, MasterUpdateArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Masters.
     * @param {MasterDeleteManyArgs} args - Arguments to filter Masters to delete.
     * @example
     * // Delete a few Masters
     * const { count } = await prisma.master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterDeleteManyArgs>(args?: SelectSubset<T, MasterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Masters
     * const master = await prisma.master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterUpdateManyArgs>(args: SelectSubset<T, MasterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masters and returns the data updated in the database.
     * @param {MasterUpdateManyAndReturnArgs} args - Arguments to update many Masters.
     * @example
     * // Update many Masters
     * const master = await prisma.master.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Masters and only return the `id`
     * const masterWithIdOnly = await prisma.master.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Master.
     * @param {MasterUpsertArgs} args - Arguments to update or create a Master.
     * @example
     * // Update or create a Master
     * const master = await prisma.master.upsert({
     *   create: {
     *     // ... data to create a Master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master we want to update
     *   }
     * })
     */
    upsert<T extends MasterUpsertArgs>(args: SelectSubset<T, MasterUpsertArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCountArgs} args - Arguments to filter Masters to count.
     * @example
     * // Count the number of Masters
     * const count = await prisma.master.count({
     *   where: {
     *     // ... the filter for the Masters we want to count
     *   }
     * })
    **/
    count<T extends MasterCountArgs>(
      args?: Subset<T, MasterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterAggregateArgs>(args: Subset<T, MasterAggregateArgs>): Prisma.PrismaPromise<GetMasterAggregateType<T>>

    /**
     * Group by Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterGroupByArgs['orderBy'] }
        : { orderBy?: MasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Master model
   */
  readonly fields: MasterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MasterProfession<T extends Master$MasterProfessionArgs<ExtArgs> = {}>(args?: Subset<T, Master$MasterProfessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Master model
   */
  interface MasterFieldRefs {
    readonly id: FieldRef<"Master", 'String'>
    readonly firstName: FieldRef<"Master", 'String'>
    readonly lastName: FieldRef<"Master", 'String'>
    readonly phone: FieldRef<"Master", 'String'>
    readonly birthYear: FieldRef<"Master", 'Int'>
    readonly isActive: FieldRef<"Master", 'Boolean'>
    readonly image: FieldRef<"Master", 'String'>
    readonly passportImg: FieldRef<"Master", 'String'>
    readonly about: FieldRef<"Master", 'String'>
    readonly createdAt: FieldRef<"Master", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Master findUnique
   */
  export type MasterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter, which Master to fetch.
     */
    where: MasterWhereUniqueInput
  }

  /**
   * Master findUniqueOrThrow
   */
  export type MasterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter, which Master to fetch.
     */
    where: MasterWhereUniqueInput
  }

  /**
   * Master findFirst
   */
  export type MasterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter, which Master to fetch.
     */
    where?: MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masters to fetch.
     */
    orderBy?: MasterOrderByWithRelationInput | MasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masters.
     */
    cursor?: MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masters.
     */
    distinct?: MasterScalarFieldEnum | MasterScalarFieldEnum[]
  }

  /**
   * Master findFirstOrThrow
   */
  export type MasterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter, which Master to fetch.
     */
    where?: MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masters to fetch.
     */
    orderBy?: MasterOrderByWithRelationInput | MasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masters.
     */
    cursor?: MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masters.
     */
    distinct?: MasterScalarFieldEnum | MasterScalarFieldEnum[]
  }

  /**
   * Master findMany
   */
  export type MasterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter, which Masters to fetch.
     */
    where?: MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masters to fetch.
     */
    orderBy?: MasterOrderByWithRelationInput | MasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Masters.
     */
    cursor?: MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masters.
     */
    skip?: number
    distinct?: MasterScalarFieldEnum | MasterScalarFieldEnum[]
  }

  /**
   * Master create
   */
  export type MasterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * The data needed to create a Master.
     */
    data: XOR<MasterCreateInput, MasterUncheckedCreateInput>
  }

  /**
   * Master createMany
   */
  export type MasterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Masters.
     */
    data: MasterCreateManyInput | MasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Master createManyAndReturn
   */
  export type MasterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * The data used to create many Masters.
     */
    data: MasterCreateManyInput | MasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Master update
   */
  export type MasterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * The data needed to update a Master.
     */
    data: XOR<MasterUpdateInput, MasterUncheckedUpdateInput>
    /**
     * Choose, which Master to update.
     */
    where: MasterWhereUniqueInput
  }

  /**
   * Master updateMany
   */
  export type MasterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Masters.
     */
    data: XOR<MasterUpdateManyMutationInput, MasterUncheckedUpdateManyInput>
    /**
     * Filter which Masters to update
     */
    where?: MasterWhereInput
    /**
     * Limit how many Masters to update.
     */
    limit?: number
  }

  /**
   * Master updateManyAndReturn
   */
  export type MasterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * The data used to update Masters.
     */
    data: XOR<MasterUpdateManyMutationInput, MasterUncheckedUpdateManyInput>
    /**
     * Filter which Masters to update
     */
    where?: MasterWhereInput
    /**
     * Limit how many Masters to update.
     */
    limit?: number
  }

  /**
   * Master upsert
   */
  export type MasterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * The filter to search for the Master to update in case it exists.
     */
    where: MasterWhereUniqueInput
    /**
     * In case the Master found by the `where` argument doesn't exist, create a new Master with this data.
     */
    create: XOR<MasterCreateInput, MasterUncheckedCreateInput>
    /**
     * In case the Master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterUpdateInput, MasterUncheckedUpdateInput>
  }

  /**
   * Master delete
   */
  export type MasterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
    /**
     * Filter which Master to delete.
     */
    where: MasterWhereUniqueInput
  }

  /**
   * Master deleteMany
   */
  export type MasterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Masters to delete
     */
    where?: MasterWhereInput
    /**
     * Limit how many Masters to delete.
     */
    limit?: number
  }

  /**
   * Master.MasterProfession
   */
  export type Master$MasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    where?: MasterProfessionWhereInput
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    cursor?: MasterProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * Master without action
   */
  export type MasterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master
     */
    select?: MasterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Master
     */
    omit?: MasterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterInclude<ExtArgs> | null
  }


  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionMinAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    image: string | null
    isActive: boolean | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id: string | null
    name_uz: string | null
    name_ru: string | null
    name_en: string | null
    image: string | null
    isActive: boolean | null
  }

  export type ProfessionCountAggregateOutputType = {
    id: number
    name_uz: number
    name_ru: number
    name_en: number
    image: number
    isActive: number
    _all: number
  }


  export type ProfessionMinAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    image?: true
    isActive?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    image?: true
    isActive?: true
  }

  export type ProfessionCountAggregateInputType = {
    id?: true
    name_uz?: true
    name_ru?: true
    name_en?: true
    image?: true
    isActive?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    image?: boolean
    isActive?: boolean
    MasterProfession?: boolean | Profession$MasterProfessionArgs<ExtArgs>
    professionTool?: boolean | Profession$professionToolArgs<ExtArgs>
    professionLevel?: boolean | Profession$professionLevelArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    image?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    image?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectScalar = {
    id?: boolean
    name_uz?: boolean
    name_ru?: boolean
    name_en?: boolean
    image?: boolean
    isActive?: boolean
  }

  export type ProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_uz" | "name_ru" | "name_en" | "image" | "isActive", ExtArgs["result"]["profession"]>
  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MasterProfession?: boolean | Profession$MasterProfessionArgs<ExtArgs>
    professionTool?: boolean | Profession$professionToolArgs<ExtArgs>
    professionLevel?: boolean | Profession$professionLevelArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      MasterProfession: Prisma.$MasterProfessionPayload<ExtArgs>[]
      professionTool: Prisma.$professionToolPayload<ExtArgs>[]
      professionLevel: Prisma.$professionLevelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_uz: string
      name_ru: string
      name_en: string
      image: string
      isActive: boolean
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionWithIdOnly = await prisma.profession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {ProfessionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions and returns the data updated in the database.
     * @param {ProfessionUpdateManyAndReturnArgs} args - Arguments to update many Professions.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MasterProfession<T extends Profession$MasterProfessionArgs<ExtArgs> = {}>(args?: Subset<T, Profession$MasterProfessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionTool<T extends Profession$professionToolArgs<ExtArgs> = {}>(args?: Subset<T, Profession$professionToolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionLevel<T extends Profession$professionLevelArgs<ExtArgs> = {}>(args?: Subset<T, Profession$professionLevelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profession model
   */
  interface ProfessionFieldRefs {
    readonly id: FieldRef<"Profession", 'String'>
    readonly name_uz: FieldRef<"Profession", 'String'>
    readonly name_ru: FieldRef<"Profession", 'String'>
    readonly name_en: FieldRef<"Profession", 'String'>
    readonly image: FieldRef<"Profession", 'String'>
    readonly isActive: FieldRef<"Profession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession createManyAndReturn
   */
  export type ProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession updateManyAndReturn
   */
  export type ProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to delete.
     */
    limit?: number
  }

  /**
   * Profession.MasterProfession
   */
  export type Profession$MasterProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    where?: MasterProfessionWhereInput
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    cursor?: MasterProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * Profession.professionTool
   */
  export type Profession$professionToolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    where?: professionToolWhereInput
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    cursor?: professionToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionToolScalarFieldEnum | ProfessionToolScalarFieldEnum[]
  }

  /**
   * Profession.professionLevel
   */
  export type Profession$professionLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    where?: professionLevelWhereInput
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    cursor?: professionLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionLevelScalarFieldEnum | ProfessionLevelScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model MasterProfession
   */

  export type AggregateMasterProfession = {
    _count: MasterProfessionCountAggregateOutputType | null
    _avg: MasterProfessionAvgAggregateOutputType | null
    _sum: MasterProfessionSumAggregateOutputType | null
    _min: MasterProfessionMinAggregateOutputType | null
    _max: MasterProfessionMaxAggregateOutputType | null
  }

  export type MasterProfessionAvgAggregateOutputType = {
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
    experience: Decimal | null
  }

  export type MasterProfessionSumAggregateOutputType = {
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
    experience: Decimal | null
  }

  export type MasterProfessionMinAggregateOutputType = {
    id: string | null
    professionId: string | null
    masterId: string | null
    levelId: string | null
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
    experience: Decimal | null
  }

  export type MasterProfessionMaxAggregateOutputType = {
    id: string | null
    professionId: string | null
    masterId: string | null
    levelId: string | null
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
    experience: Decimal | null
  }

  export type MasterProfessionCountAggregateOutputType = {
    id: number
    professionId: number
    masterId: number
    levelId: number
    minWorkingHours: number
    priceHourly: number
    priceDaily: number
    experience: number
    _all: number
  }


  export type MasterProfessionAvgAggregateInputType = {
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    experience?: true
  }

  export type MasterProfessionSumAggregateInputType = {
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    experience?: true
  }

  export type MasterProfessionMinAggregateInputType = {
    id?: true
    professionId?: true
    masterId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    experience?: true
  }

  export type MasterProfessionMaxAggregateInputType = {
    id?: true
    professionId?: true
    masterId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    experience?: true
  }

  export type MasterProfessionCountAggregateInputType = {
    id?: true
    professionId?: true
    masterId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    experience?: true
    _all?: true
  }

  export type MasterProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterProfession to aggregate.
     */
    where?: MasterProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterProfessions to fetch.
     */
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterProfessions
    **/
    _count?: true | MasterProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterProfessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterProfessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterProfessionMaxAggregateInputType
  }

  export type GetMasterProfessionAggregateType<T extends MasterProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterProfession[P]>
      : GetScalarType<T[P], AggregateMasterProfession[P]>
  }




  export type MasterProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterProfessionWhereInput
    orderBy?: MasterProfessionOrderByWithAggregationInput | MasterProfessionOrderByWithAggregationInput[]
    by: MasterProfessionScalarFieldEnum[] | MasterProfessionScalarFieldEnum
    having?: MasterProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterProfessionCountAggregateInputType | true
    _avg?: MasterProfessionAvgAggregateInputType
    _sum?: MasterProfessionSumAggregateInputType
    _min?: MasterProfessionMinAggregateInputType
    _max?: MasterProfessionMaxAggregateInputType
  }

  export type MasterProfessionGroupByOutputType = {
    id: string
    professionId: string
    masterId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal
    priceDaily: Decimal
    experience: Decimal
    _count: MasterProfessionCountAggregateOutputType | null
    _avg: MasterProfessionAvgAggregateOutputType | null
    _sum: MasterProfessionSumAggregateOutputType | null
    _min: MasterProfessionMinAggregateOutputType | null
    _max: MasterProfessionMaxAggregateOutputType | null
  }

  type GetMasterProfessionGroupByPayload<T extends MasterProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], MasterProfessionGroupByOutputType[P]>
        }
      >
    >


  export type MasterProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    masterId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    experience?: boolean
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterProfession"]>

  export type MasterProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    masterId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    experience?: boolean
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterProfession"]>

  export type MasterProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    masterId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    experience?: boolean
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterProfession"]>

  export type MasterProfessionSelectScalar = {
    id?: boolean
    professionId?: boolean
    masterId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    experience?: boolean
  }

  export type MasterProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionId" | "masterId" | "levelId" | "minWorkingHours" | "priceHourly" | "priceDaily" | "experience", ExtArgs["result"]["masterProfession"]>
  export type MasterProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type MasterProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type MasterProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pofession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Master?: boolean | MasterDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $MasterProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterProfession"
    objects: {
      Pofession: Prisma.$ProfessionPayload<ExtArgs>
      Master: Prisma.$MasterPayload<ExtArgs>
      Level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionId: string
      masterId: string
      levelId: string
      minWorkingHours: number
      priceHourly: Prisma.Decimal
      priceDaily: Prisma.Decimal
      experience: Prisma.Decimal
    }, ExtArgs["result"]["masterProfession"]>
    composites: {}
  }

  type MasterProfessionGetPayload<S extends boolean | null | undefined | MasterProfessionDefaultArgs> = $Result.GetResult<Prisma.$MasterProfessionPayload, S>

  type MasterProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterProfessionCountAggregateInputType | true
    }

  export interface MasterProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterProfession'], meta: { name: 'MasterProfession' } }
    /**
     * Find zero or one MasterProfession that matches the filter.
     * @param {MasterProfessionFindUniqueArgs} args - Arguments to find a MasterProfession
     * @example
     * // Get one MasterProfession
     * const masterProfession = await prisma.masterProfession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterProfessionFindUniqueArgs>(args: SelectSubset<T, MasterProfessionFindUniqueArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterProfession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterProfessionFindUniqueOrThrowArgs} args - Arguments to find a MasterProfession
     * @example
     * // Get one MasterProfession
     * const masterProfession = await prisma.masterProfession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterProfession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionFindFirstArgs} args - Arguments to find a MasterProfession
     * @example
     * // Get one MasterProfession
     * const masterProfession = await prisma.masterProfession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterProfessionFindFirstArgs>(args?: SelectSubset<T, MasterProfessionFindFirstArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterProfession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionFindFirstOrThrowArgs} args - Arguments to find a MasterProfession
     * @example
     * // Get one MasterProfession
     * const masterProfession = await prisma.masterProfession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterProfessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterProfessions
     * const masterProfessions = await prisma.masterProfession.findMany()
     * 
     * // Get first 10 MasterProfessions
     * const masterProfessions = await prisma.masterProfession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterProfessionWithIdOnly = await prisma.masterProfession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterProfessionFindManyArgs>(args?: SelectSubset<T, MasterProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterProfession.
     * @param {MasterProfessionCreateArgs} args - Arguments to create a MasterProfession.
     * @example
     * // Create one MasterProfession
     * const MasterProfession = await prisma.masterProfession.create({
     *   data: {
     *     // ... data to create a MasterProfession
     *   }
     * })
     * 
     */
    create<T extends MasterProfessionCreateArgs>(args: SelectSubset<T, MasterProfessionCreateArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterProfessions.
     * @param {MasterProfessionCreateManyArgs} args - Arguments to create many MasterProfessions.
     * @example
     * // Create many MasterProfessions
     * const masterProfession = await prisma.masterProfession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterProfessionCreateManyArgs>(args?: SelectSubset<T, MasterProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterProfessions and returns the data saved in the database.
     * @param {MasterProfessionCreateManyAndReturnArgs} args - Arguments to create many MasterProfessions.
     * @example
     * // Create many MasterProfessions
     * const masterProfession = await prisma.masterProfession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterProfessions and only return the `id`
     * const masterProfessionWithIdOnly = await prisma.masterProfession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterProfession.
     * @param {MasterProfessionDeleteArgs} args - Arguments to delete one MasterProfession.
     * @example
     * // Delete one MasterProfession
     * const MasterProfession = await prisma.masterProfession.delete({
     *   where: {
     *     // ... filter to delete one MasterProfession
     *   }
     * })
     * 
     */
    delete<T extends MasterProfessionDeleteArgs>(args: SelectSubset<T, MasterProfessionDeleteArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterProfession.
     * @param {MasterProfessionUpdateArgs} args - Arguments to update one MasterProfession.
     * @example
     * // Update one MasterProfession
     * const masterProfession = await prisma.masterProfession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterProfessionUpdateArgs>(args: SelectSubset<T, MasterProfessionUpdateArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterProfessions.
     * @param {MasterProfessionDeleteManyArgs} args - Arguments to filter MasterProfessions to delete.
     * @example
     * // Delete a few MasterProfessions
     * const { count } = await prisma.masterProfession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterProfessionDeleteManyArgs>(args?: SelectSubset<T, MasterProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterProfessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterProfessions
     * const masterProfession = await prisma.masterProfession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterProfessionUpdateManyArgs>(args: SelectSubset<T, MasterProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterProfessions and returns the data updated in the database.
     * @param {MasterProfessionUpdateManyAndReturnArgs} args - Arguments to update many MasterProfessions.
     * @example
     * // Update many MasterProfessions
     * const masterProfession = await prisma.masterProfession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterProfessions and only return the `id`
     * const masterProfessionWithIdOnly = await prisma.masterProfession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterProfession.
     * @param {MasterProfessionUpsertArgs} args - Arguments to update or create a MasterProfession.
     * @example
     * // Update or create a MasterProfession
     * const masterProfession = await prisma.masterProfession.upsert({
     *   create: {
     *     // ... data to create a MasterProfession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterProfession we want to update
     *   }
     * })
     */
    upsert<T extends MasterProfessionUpsertArgs>(args: SelectSubset<T, MasterProfessionUpsertArgs<ExtArgs>>): Prisma__MasterProfessionClient<$Result.GetResult<Prisma.$MasterProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterProfessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionCountArgs} args - Arguments to filter MasterProfessions to count.
     * @example
     * // Count the number of MasterProfessions
     * const count = await prisma.masterProfession.count({
     *   where: {
     *     // ... the filter for the MasterProfessions we want to count
     *   }
     * })
    **/
    count<T extends MasterProfessionCountArgs>(
      args?: Subset<T, MasterProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterProfession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterProfessionAggregateArgs>(args: Subset<T, MasterProfessionAggregateArgs>): Prisma.PrismaPromise<GetMasterProfessionAggregateType<T>>

    /**
     * Group by MasterProfession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterProfessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterProfessionGroupByArgs['orderBy'] }
        : { orderBy?: MasterProfessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterProfession model
   */
  readonly fields: MasterProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterProfession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pofession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Master<T extends MasterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterDefaultArgs<ExtArgs>>): Prisma__MasterClient<$Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterProfession model
   */
  interface MasterProfessionFieldRefs {
    readonly id: FieldRef<"MasterProfession", 'String'>
    readonly professionId: FieldRef<"MasterProfession", 'String'>
    readonly masterId: FieldRef<"MasterProfession", 'String'>
    readonly levelId: FieldRef<"MasterProfession", 'String'>
    readonly minWorkingHours: FieldRef<"MasterProfession", 'Int'>
    readonly priceHourly: FieldRef<"MasterProfession", 'Decimal'>
    readonly priceDaily: FieldRef<"MasterProfession", 'Decimal'>
    readonly experience: FieldRef<"MasterProfession", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * MasterProfession findUnique
   */
  export type MasterProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter, which MasterProfession to fetch.
     */
    where: MasterProfessionWhereUniqueInput
  }

  /**
   * MasterProfession findUniqueOrThrow
   */
  export type MasterProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter, which MasterProfession to fetch.
     */
    where: MasterProfessionWhereUniqueInput
  }

  /**
   * MasterProfession findFirst
   */
  export type MasterProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter, which MasterProfession to fetch.
     */
    where?: MasterProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterProfessions to fetch.
     */
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterProfessions.
     */
    cursor?: MasterProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterProfessions.
     */
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * MasterProfession findFirstOrThrow
   */
  export type MasterProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter, which MasterProfession to fetch.
     */
    where?: MasterProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterProfessions to fetch.
     */
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterProfessions.
     */
    cursor?: MasterProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterProfessions.
     */
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * MasterProfession findMany
   */
  export type MasterProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter, which MasterProfessions to fetch.
     */
    where?: MasterProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterProfessions to fetch.
     */
    orderBy?: MasterProfessionOrderByWithRelationInput | MasterProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterProfessions.
     */
    cursor?: MasterProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterProfessions.
     */
    skip?: number
    distinct?: MasterProfessionScalarFieldEnum | MasterProfessionScalarFieldEnum[]
  }

  /**
   * MasterProfession create
   */
  export type MasterProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterProfession.
     */
    data: XOR<MasterProfessionCreateInput, MasterProfessionUncheckedCreateInput>
  }

  /**
   * MasterProfession createMany
   */
  export type MasterProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterProfessions.
     */
    data: MasterProfessionCreateManyInput | MasterProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterProfession createManyAndReturn
   */
  export type MasterProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many MasterProfessions.
     */
    data: MasterProfessionCreateManyInput | MasterProfessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterProfession update
   */
  export type MasterProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterProfession.
     */
    data: XOR<MasterProfessionUpdateInput, MasterProfessionUncheckedUpdateInput>
    /**
     * Choose, which MasterProfession to update.
     */
    where: MasterProfessionWhereUniqueInput
  }

  /**
   * MasterProfession updateMany
   */
  export type MasterProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterProfessions.
     */
    data: XOR<MasterProfessionUpdateManyMutationInput, MasterProfessionUncheckedUpdateManyInput>
    /**
     * Filter which MasterProfessions to update
     */
    where?: MasterProfessionWhereInput
    /**
     * Limit how many MasterProfessions to update.
     */
    limit?: number
  }

  /**
   * MasterProfession updateManyAndReturn
   */
  export type MasterProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * The data used to update MasterProfessions.
     */
    data: XOR<MasterProfessionUpdateManyMutationInput, MasterProfessionUncheckedUpdateManyInput>
    /**
     * Filter which MasterProfessions to update
     */
    where?: MasterProfessionWhereInput
    /**
     * Limit how many MasterProfessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterProfession upsert
   */
  export type MasterProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterProfession to update in case it exists.
     */
    where: MasterProfessionWhereUniqueInput
    /**
     * In case the MasterProfession found by the `where` argument doesn't exist, create a new MasterProfession with this data.
     */
    create: XOR<MasterProfessionCreateInput, MasterProfessionUncheckedCreateInput>
    /**
     * In case the MasterProfession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterProfessionUpdateInput, MasterProfessionUncheckedUpdateInput>
  }

  /**
   * MasterProfession delete
   */
  export type MasterProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
    /**
     * Filter which MasterProfession to delete.
     */
    where: MasterProfessionWhereUniqueInput
  }

  /**
   * MasterProfession deleteMany
   */
  export type MasterProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterProfessions to delete
     */
    where?: MasterProfessionWhereInput
    /**
     * Limit how many MasterProfessions to delete.
     */
    limit?: number
  }

  /**
   * MasterProfession without action
   */
  export type MasterProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterProfession
     */
    select?: MasterProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterProfession
     */
    omit?: MasterProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterProfessionInclude<ExtArgs> | null
  }


  /**
   * Model professionTool
   */

  export type AggregateProfessionTool = {
    _count: ProfessionToolCountAggregateOutputType | null
    _min: ProfessionToolMinAggregateOutputType | null
    _max: ProfessionToolMaxAggregateOutputType | null
  }

  export type ProfessionToolMinAggregateOutputType = {
    id: string | null
    professionId: string | null
    toolId: string | null
  }

  export type ProfessionToolMaxAggregateOutputType = {
    id: string | null
    professionId: string | null
    toolId: string | null
  }

  export type ProfessionToolCountAggregateOutputType = {
    id: number
    professionId: number
    toolId: number
    _all: number
  }


  export type ProfessionToolMinAggregateInputType = {
    id?: true
    professionId?: true
    toolId?: true
  }

  export type ProfessionToolMaxAggregateInputType = {
    id?: true
    professionId?: true
    toolId?: true
  }

  export type ProfessionToolCountAggregateInputType = {
    id?: true
    professionId?: true
    toolId?: true
    _all?: true
  }

  export type ProfessionToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professionTool to aggregate.
     */
    where?: professionToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionTools to fetch.
     */
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professionToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professionTools
    **/
    _count?: true | ProfessionToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionToolMaxAggregateInputType
  }

  export type GetProfessionToolAggregateType<T extends ProfessionToolAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionTool[P]>
      : GetScalarType<T[P], AggregateProfessionTool[P]>
  }




  export type professionToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionToolWhereInput
    orderBy?: professionToolOrderByWithAggregationInput | professionToolOrderByWithAggregationInput[]
    by: ProfessionToolScalarFieldEnum[] | ProfessionToolScalarFieldEnum
    having?: professionToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionToolCountAggregateInputType | true
    _min?: ProfessionToolMinAggregateInputType
    _max?: ProfessionToolMaxAggregateInputType
  }

  export type ProfessionToolGroupByOutputType = {
    id: string
    professionId: string
    toolId: string
    _count: ProfessionToolCountAggregateOutputType | null
    _min: ProfessionToolMinAggregateOutputType | null
    _max: ProfessionToolMaxAggregateOutputType | null
  }

  type GetProfessionToolGroupByPayload<T extends professionToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionToolGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionToolGroupByOutputType[P]>
        }
      >
    >


  export type professionToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    toolId?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionTool"]>

  export type professionToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    toolId?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionTool"]>

  export type professionToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    toolId?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionTool"]>

  export type professionToolSelectScalar = {
    id?: boolean
    professionId?: boolean
    toolId?: boolean
  }

  export type professionToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionId" | "toolId", ExtArgs["result"]["professionTool"]>
  export type professionToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type professionToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type professionToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $professionToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professionTool"
    objects: {
      Profession: Prisma.$ProfessionPayload<ExtArgs>
      Tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionId: string
      toolId: string
    }, ExtArgs["result"]["professionTool"]>
    composites: {}
  }

  type professionToolGetPayload<S extends boolean | null | undefined | professionToolDefaultArgs> = $Result.GetResult<Prisma.$professionToolPayload, S>

  type professionToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professionToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionToolCountAggregateInputType | true
    }

  export interface professionToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professionTool'], meta: { name: 'professionTool' } }
    /**
     * Find zero or one ProfessionTool that matches the filter.
     * @param {professionToolFindUniqueArgs} args - Arguments to find a ProfessionTool
     * @example
     * // Get one ProfessionTool
     * const professionTool = await prisma.professionTool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professionToolFindUniqueArgs>(args: SelectSubset<T, professionToolFindUniqueArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionTool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professionToolFindUniqueOrThrowArgs} args - Arguments to find a ProfessionTool
     * @example
     * // Get one ProfessionTool
     * const professionTool = await prisma.professionTool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professionToolFindUniqueOrThrowArgs>(args: SelectSubset<T, professionToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionTool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolFindFirstArgs} args - Arguments to find a ProfessionTool
     * @example
     * // Get one ProfessionTool
     * const professionTool = await prisma.professionTool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professionToolFindFirstArgs>(args?: SelectSubset<T, professionToolFindFirstArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionTool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolFindFirstOrThrowArgs} args - Arguments to find a ProfessionTool
     * @example
     * // Get one ProfessionTool
     * const professionTool = await prisma.professionTool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professionToolFindFirstOrThrowArgs>(args?: SelectSubset<T, professionToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionTools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionTools
     * const professionTools = await prisma.professionTool.findMany()
     * 
     * // Get first 10 ProfessionTools
     * const professionTools = await prisma.professionTool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionToolWithIdOnly = await prisma.professionTool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends professionToolFindManyArgs>(args?: SelectSubset<T, professionToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionTool.
     * @param {professionToolCreateArgs} args - Arguments to create a ProfessionTool.
     * @example
     * // Create one ProfessionTool
     * const ProfessionTool = await prisma.professionTool.create({
     *   data: {
     *     // ... data to create a ProfessionTool
     *   }
     * })
     * 
     */
    create<T extends professionToolCreateArgs>(args: SelectSubset<T, professionToolCreateArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionTools.
     * @param {professionToolCreateManyArgs} args - Arguments to create many ProfessionTools.
     * @example
     * // Create many ProfessionTools
     * const professionTool = await prisma.professionTool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professionToolCreateManyArgs>(args?: SelectSubset<T, professionToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionTools and returns the data saved in the database.
     * @param {professionToolCreateManyAndReturnArgs} args - Arguments to create many ProfessionTools.
     * @example
     * // Create many ProfessionTools
     * const professionTool = await prisma.professionTool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionTools and only return the `id`
     * const professionToolWithIdOnly = await prisma.professionTool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professionToolCreateManyAndReturnArgs>(args?: SelectSubset<T, professionToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionTool.
     * @param {professionToolDeleteArgs} args - Arguments to delete one ProfessionTool.
     * @example
     * // Delete one ProfessionTool
     * const ProfessionTool = await prisma.professionTool.delete({
     *   where: {
     *     // ... filter to delete one ProfessionTool
     *   }
     * })
     * 
     */
    delete<T extends professionToolDeleteArgs>(args: SelectSubset<T, professionToolDeleteArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionTool.
     * @param {professionToolUpdateArgs} args - Arguments to update one ProfessionTool.
     * @example
     * // Update one ProfessionTool
     * const professionTool = await prisma.professionTool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professionToolUpdateArgs>(args: SelectSubset<T, professionToolUpdateArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionTools.
     * @param {professionToolDeleteManyArgs} args - Arguments to filter ProfessionTools to delete.
     * @example
     * // Delete a few ProfessionTools
     * const { count } = await prisma.professionTool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professionToolDeleteManyArgs>(args?: SelectSubset<T, professionToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionTools
     * const professionTool = await prisma.professionTool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professionToolUpdateManyArgs>(args: SelectSubset<T, professionToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionTools and returns the data updated in the database.
     * @param {professionToolUpdateManyAndReturnArgs} args - Arguments to update many ProfessionTools.
     * @example
     * // Update many ProfessionTools
     * const professionTool = await prisma.professionTool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionTools and only return the `id`
     * const professionToolWithIdOnly = await prisma.professionTool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professionToolUpdateManyAndReturnArgs>(args: SelectSubset<T, professionToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionTool.
     * @param {professionToolUpsertArgs} args - Arguments to update or create a ProfessionTool.
     * @example
     * // Update or create a ProfessionTool
     * const professionTool = await prisma.professionTool.upsert({
     *   create: {
     *     // ... data to create a ProfessionTool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionTool we want to update
     *   }
     * })
     */
    upsert<T extends professionToolUpsertArgs>(args: SelectSubset<T, professionToolUpsertArgs<ExtArgs>>): Prisma__professionToolClient<$Result.GetResult<Prisma.$professionToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolCountArgs} args - Arguments to filter ProfessionTools to count.
     * @example
     * // Count the number of ProfessionTools
     * const count = await prisma.professionTool.count({
     *   where: {
     *     // ... the filter for the ProfessionTools we want to count
     *   }
     * })
    **/
    count<T extends professionToolCountArgs>(
      args?: Subset<T, professionToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionToolAggregateArgs>(args: Subset<T, ProfessionToolAggregateArgs>): Prisma.PrismaPromise<GetProfessionToolAggregateType<T>>

    /**
     * Group by ProfessionTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionToolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professionToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professionToolGroupByArgs['orderBy'] }
        : { orderBy?: professionToolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professionToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professionTool model
   */
  readonly fields: professionToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professionTool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professionToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professionTool model
   */
  interface professionToolFieldRefs {
    readonly id: FieldRef<"professionTool", 'String'>
    readonly professionId: FieldRef<"professionTool", 'String'>
    readonly toolId: FieldRef<"professionTool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * professionTool findUnique
   */
  export type professionToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter, which professionTool to fetch.
     */
    where: professionToolWhereUniqueInput
  }

  /**
   * professionTool findUniqueOrThrow
   */
  export type professionToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter, which professionTool to fetch.
     */
    where: professionToolWhereUniqueInput
  }

  /**
   * professionTool findFirst
   */
  export type professionToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter, which professionTool to fetch.
     */
    where?: professionToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionTools to fetch.
     */
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professionTools.
     */
    cursor?: professionToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professionTools.
     */
    distinct?: ProfessionToolScalarFieldEnum | ProfessionToolScalarFieldEnum[]
  }

  /**
   * professionTool findFirstOrThrow
   */
  export type professionToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter, which professionTool to fetch.
     */
    where?: professionToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionTools to fetch.
     */
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professionTools.
     */
    cursor?: professionToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professionTools.
     */
    distinct?: ProfessionToolScalarFieldEnum | ProfessionToolScalarFieldEnum[]
  }

  /**
   * professionTool findMany
   */
  export type professionToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter, which professionTools to fetch.
     */
    where?: professionToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionTools to fetch.
     */
    orderBy?: professionToolOrderByWithRelationInput | professionToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professionTools.
     */
    cursor?: professionToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionTools.
     */
    skip?: number
    distinct?: ProfessionToolScalarFieldEnum | ProfessionToolScalarFieldEnum[]
  }

  /**
   * professionTool create
   */
  export type professionToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * The data needed to create a professionTool.
     */
    data: XOR<professionToolCreateInput, professionToolUncheckedCreateInput>
  }

  /**
   * professionTool createMany
   */
  export type professionToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professionTools.
     */
    data: professionToolCreateManyInput | professionToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professionTool createManyAndReturn
   */
  export type professionToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * The data used to create many professionTools.
     */
    data: professionToolCreateManyInput | professionToolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * professionTool update
   */
  export type professionToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * The data needed to update a professionTool.
     */
    data: XOR<professionToolUpdateInput, professionToolUncheckedUpdateInput>
    /**
     * Choose, which professionTool to update.
     */
    where: professionToolWhereUniqueInput
  }

  /**
   * professionTool updateMany
   */
  export type professionToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professionTools.
     */
    data: XOR<professionToolUpdateManyMutationInput, professionToolUncheckedUpdateManyInput>
    /**
     * Filter which professionTools to update
     */
    where?: professionToolWhereInput
    /**
     * Limit how many professionTools to update.
     */
    limit?: number
  }

  /**
   * professionTool updateManyAndReturn
   */
  export type professionToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * The data used to update professionTools.
     */
    data: XOR<professionToolUpdateManyMutationInput, professionToolUncheckedUpdateManyInput>
    /**
     * Filter which professionTools to update
     */
    where?: professionToolWhereInput
    /**
     * Limit how many professionTools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * professionTool upsert
   */
  export type professionToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * The filter to search for the professionTool to update in case it exists.
     */
    where: professionToolWhereUniqueInput
    /**
     * In case the professionTool found by the `where` argument doesn't exist, create a new professionTool with this data.
     */
    create: XOR<professionToolCreateInput, professionToolUncheckedCreateInput>
    /**
     * In case the professionTool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professionToolUpdateInput, professionToolUncheckedUpdateInput>
  }

  /**
   * professionTool delete
   */
  export type professionToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
    /**
     * Filter which professionTool to delete.
     */
    where: professionToolWhereUniqueInput
  }

  /**
   * professionTool deleteMany
   */
  export type professionToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professionTools to delete
     */
    where?: professionToolWhereInput
    /**
     * Limit how many professionTools to delete.
     */
    limit?: number
  }

  /**
   * professionTool without action
   */
  export type professionToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionTool
     */
    select?: professionToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionTool
     */
    omit?: professionToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionToolInclude<ExtArgs> | null
  }


  /**
   * Model professionLevel
   */

  export type AggregateProfessionLevel = {
    _count: ProfessionLevelCountAggregateOutputType | null
    _avg: ProfessionLevelAvgAggregateOutputType | null
    _sum: ProfessionLevelSumAggregateOutputType | null
    _min: ProfessionLevelMinAggregateOutputType | null
    _max: ProfessionLevelMaxAggregateOutputType | null
  }

  export type ProfessionLevelAvgAggregateOutputType = {
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
  }

  export type ProfessionLevelSumAggregateOutputType = {
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
  }

  export type ProfessionLevelMinAggregateOutputType = {
    id: string | null
    professionId: string | null
    levelId: string | null
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
  }

  export type ProfessionLevelMaxAggregateOutputType = {
    id: string | null
    professionId: string | null
    levelId: string | null
    minWorkingHours: number | null
    priceHourly: Decimal | null
    priceDaily: Decimal | null
  }

  export type ProfessionLevelCountAggregateOutputType = {
    id: number
    professionId: number
    levelId: number
    minWorkingHours: number
    priceHourly: number
    priceDaily: number
    _all: number
  }


  export type ProfessionLevelAvgAggregateInputType = {
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
  }

  export type ProfessionLevelSumAggregateInputType = {
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
  }

  export type ProfessionLevelMinAggregateInputType = {
    id?: true
    professionId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
  }

  export type ProfessionLevelMaxAggregateInputType = {
    id?: true
    professionId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
  }

  export type ProfessionLevelCountAggregateInputType = {
    id?: true
    professionId?: true
    levelId?: true
    minWorkingHours?: true
    priceHourly?: true
    priceDaily?: true
    _all?: true
  }

  export type ProfessionLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professionLevel to aggregate.
     */
    where?: professionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionLevels to fetch.
     */
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professionLevels
    **/
    _count?: true | ProfessionLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionLevelMaxAggregateInputType
  }

  export type GetProfessionLevelAggregateType<T extends ProfessionLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionLevel[P]>
      : GetScalarType<T[P], AggregateProfessionLevel[P]>
  }




  export type professionLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionLevelWhereInput
    orderBy?: professionLevelOrderByWithAggregationInput | professionLevelOrderByWithAggregationInput[]
    by: ProfessionLevelScalarFieldEnum[] | ProfessionLevelScalarFieldEnum
    having?: professionLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionLevelCountAggregateInputType | true
    _avg?: ProfessionLevelAvgAggregateInputType
    _sum?: ProfessionLevelSumAggregateInputType
    _min?: ProfessionLevelMinAggregateInputType
    _max?: ProfessionLevelMaxAggregateInputType
  }

  export type ProfessionLevelGroupByOutputType = {
    id: string
    professionId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal
    priceDaily: Decimal
    _count: ProfessionLevelCountAggregateOutputType | null
    _avg: ProfessionLevelAvgAggregateOutputType | null
    _sum: ProfessionLevelSumAggregateOutputType | null
    _min: ProfessionLevelMinAggregateOutputType | null
    _max: ProfessionLevelMaxAggregateOutputType | null
  }

  type GetProfessionLevelGroupByPayload<T extends professionLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionLevelGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionLevelGroupByOutputType[P]>
        }
      >
    >


  export type professionLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionLevel"]>

  export type professionLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionLevel"]>

  export type professionLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionLevel"]>

  export type professionLevelSelectScalar = {
    id?: boolean
    professionId?: boolean
    levelId?: boolean
    minWorkingHours?: boolean
    priceHourly?: boolean
    priceDaily?: boolean
  }

  export type professionLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionId" | "levelId" | "minWorkingHours" | "priceHourly" | "priceDaily", ExtArgs["result"]["professionLevel"]>
  export type professionLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type professionLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type professionLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    Level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $professionLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professionLevel"
    objects: {
      Profession: Prisma.$ProfessionPayload<ExtArgs>
      Level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionId: string
      levelId: string
      minWorkingHours: number
      priceHourly: Prisma.Decimal
      priceDaily: Prisma.Decimal
    }, ExtArgs["result"]["professionLevel"]>
    composites: {}
  }

  type professionLevelGetPayload<S extends boolean | null | undefined | professionLevelDefaultArgs> = $Result.GetResult<Prisma.$professionLevelPayload, S>

  type professionLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professionLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionLevelCountAggregateInputType | true
    }

  export interface professionLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professionLevel'], meta: { name: 'professionLevel' } }
    /**
     * Find zero or one ProfessionLevel that matches the filter.
     * @param {professionLevelFindUniqueArgs} args - Arguments to find a ProfessionLevel
     * @example
     * // Get one ProfessionLevel
     * const professionLevel = await prisma.professionLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professionLevelFindUniqueArgs>(args: SelectSubset<T, professionLevelFindUniqueArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professionLevelFindUniqueOrThrowArgs} args - Arguments to find a ProfessionLevel
     * @example
     * // Get one ProfessionLevel
     * const professionLevel = await prisma.professionLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professionLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, professionLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelFindFirstArgs} args - Arguments to find a ProfessionLevel
     * @example
     * // Get one ProfessionLevel
     * const professionLevel = await prisma.professionLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professionLevelFindFirstArgs>(args?: SelectSubset<T, professionLevelFindFirstArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelFindFirstOrThrowArgs} args - Arguments to find a ProfessionLevel
     * @example
     * // Get one ProfessionLevel
     * const professionLevel = await prisma.professionLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professionLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, professionLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionLevels
     * const professionLevels = await prisma.professionLevel.findMany()
     * 
     * // Get first 10 ProfessionLevels
     * const professionLevels = await prisma.professionLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionLevelWithIdOnly = await prisma.professionLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends professionLevelFindManyArgs>(args?: SelectSubset<T, professionLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionLevel.
     * @param {professionLevelCreateArgs} args - Arguments to create a ProfessionLevel.
     * @example
     * // Create one ProfessionLevel
     * const ProfessionLevel = await prisma.professionLevel.create({
     *   data: {
     *     // ... data to create a ProfessionLevel
     *   }
     * })
     * 
     */
    create<T extends professionLevelCreateArgs>(args: SelectSubset<T, professionLevelCreateArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionLevels.
     * @param {professionLevelCreateManyArgs} args - Arguments to create many ProfessionLevels.
     * @example
     * // Create many ProfessionLevels
     * const professionLevel = await prisma.professionLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professionLevelCreateManyArgs>(args?: SelectSubset<T, professionLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionLevels and returns the data saved in the database.
     * @param {professionLevelCreateManyAndReturnArgs} args - Arguments to create many ProfessionLevels.
     * @example
     * // Create many ProfessionLevels
     * const professionLevel = await prisma.professionLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionLevels and only return the `id`
     * const professionLevelWithIdOnly = await prisma.professionLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professionLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, professionLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionLevel.
     * @param {professionLevelDeleteArgs} args - Arguments to delete one ProfessionLevel.
     * @example
     * // Delete one ProfessionLevel
     * const ProfessionLevel = await prisma.professionLevel.delete({
     *   where: {
     *     // ... filter to delete one ProfessionLevel
     *   }
     * })
     * 
     */
    delete<T extends professionLevelDeleteArgs>(args: SelectSubset<T, professionLevelDeleteArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionLevel.
     * @param {professionLevelUpdateArgs} args - Arguments to update one ProfessionLevel.
     * @example
     * // Update one ProfessionLevel
     * const professionLevel = await prisma.professionLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professionLevelUpdateArgs>(args: SelectSubset<T, professionLevelUpdateArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionLevels.
     * @param {professionLevelDeleteManyArgs} args - Arguments to filter ProfessionLevels to delete.
     * @example
     * // Delete a few ProfessionLevels
     * const { count } = await prisma.professionLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professionLevelDeleteManyArgs>(args?: SelectSubset<T, professionLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionLevels
     * const professionLevel = await prisma.professionLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professionLevelUpdateManyArgs>(args: SelectSubset<T, professionLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionLevels and returns the data updated in the database.
     * @param {professionLevelUpdateManyAndReturnArgs} args - Arguments to update many ProfessionLevels.
     * @example
     * // Update many ProfessionLevels
     * const professionLevel = await prisma.professionLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionLevels and only return the `id`
     * const professionLevelWithIdOnly = await prisma.professionLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professionLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, professionLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionLevel.
     * @param {professionLevelUpsertArgs} args - Arguments to update or create a ProfessionLevel.
     * @example
     * // Update or create a ProfessionLevel
     * const professionLevel = await prisma.professionLevel.upsert({
     *   create: {
     *     // ... data to create a ProfessionLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionLevel we want to update
     *   }
     * })
     */
    upsert<T extends professionLevelUpsertArgs>(args: SelectSubset<T, professionLevelUpsertArgs<ExtArgs>>): Prisma__professionLevelClient<$Result.GetResult<Prisma.$professionLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelCountArgs} args - Arguments to filter ProfessionLevels to count.
     * @example
     * // Count the number of ProfessionLevels
     * const count = await prisma.professionLevel.count({
     *   where: {
     *     // ... the filter for the ProfessionLevels we want to count
     *   }
     * })
    **/
    count<T extends professionLevelCountArgs>(
      args?: Subset<T, professionLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionLevelAggregateArgs>(args: Subset<T, ProfessionLevelAggregateArgs>): Prisma.PrismaPromise<GetProfessionLevelAggregateType<T>>

    /**
     * Group by ProfessionLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professionLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professionLevelGroupByArgs['orderBy'] }
        : { orderBy?: professionLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professionLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professionLevel model
   */
  readonly fields: professionLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professionLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professionLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professionLevel model
   */
  interface professionLevelFieldRefs {
    readonly id: FieldRef<"professionLevel", 'String'>
    readonly professionId: FieldRef<"professionLevel", 'String'>
    readonly levelId: FieldRef<"professionLevel", 'String'>
    readonly minWorkingHours: FieldRef<"professionLevel", 'Int'>
    readonly priceHourly: FieldRef<"professionLevel", 'Decimal'>
    readonly priceDaily: FieldRef<"professionLevel", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * professionLevel findUnique
   */
  export type professionLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter, which professionLevel to fetch.
     */
    where: professionLevelWhereUniqueInput
  }

  /**
   * professionLevel findUniqueOrThrow
   */
  export type professionLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter, which professionLevel to fetch.
     */
    where: professionLevelWhereUniqueInput
  }

  /**
   * professionLevel findFirst
   */
  export type professionLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter, which professionLevel to fetch.
     */
    where?: professionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionLevels to fetch.
     */
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professionLevels.
     */
    cursor?: professionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professionLevels.
     */
    distinct?: ProfessionLevelScalarFieldEnum | ProfessionLevelScalarFieldEnum[]
  }

  /**
   * professionLevel findFirstOrThrow
   */
  export type professionLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter, which professionLevel to fetch.
     */
    where?: professionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionLevels to fetch.
     */
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professionLevels.
     */
    cursor?: professionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professionLevels.
     */
    distinct?: ProfessionLevelScalarFieldEnum | ProfessionLevelScalarFieldEnum[]
  }

  /**
   * professionLevel findMany
   */
  export type professionLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter, which professionLevels to fetch.
     */
    where?: professionLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professionLevels to fetch.
     */
    orderBy?: professionLevelOrderByWithRelationInput | professionLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professionLevels.
     */
    cursor?: professionLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professionLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professionLevels.
     */
    skip?: number
    distinct?: ProfessionLevelScalarFieldEnum | ProfessionLevelScalarFieldEnum[]
  }

  /**
   * professionLevel create
   */
  export type professionLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a professionLevel.
     */
    data: XOR<professionLevelCreateInput, professionLevelUncheckedCreateInput>
  }

  /**
   * professionLevel createMany
   */
  export type professionLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professionLevels.
     */
    data: professionLevelCreateManyInput | professionLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professionLevel createManyAndReturn
   */
  export type professionLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * The data used to create many professionLevels.
     */
    data: professionLevelCreateManyInput | professionLevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * professionLevel update
   */
  export type professionLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a professionLevel.
     */
    data: XOR<professionLevelUpdateInput, professionLevelUncheckedUpdateInput>
    /**
     * Choose, which professionLevel to update.
     */
    where: professionLevelWhereUniqueInput
  }

  /**
   * professionLevel updateMany
   */
  export type professionLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professionLevels.
     */
    data: XOR<professionLevelUpdateManyMutationInput, professionLevelUncheckedUpdateManyInput>
    /**
     * Filter which professionLevels to update
     */
    where?: professionLevelWhereInput
    /**
     * Limit how many professionLevels to update.
     */
    limit?: number
  }

  /**
   * professionLevel updateManyAndReturn
   */
  export type professionLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * The data used to update professionLevels.
     */
    data: XOR<professionLevelUpdateManyMutationInput, professionLevelUncheckedUpdateManyInput>
    /**
     * Filter which professionLevels to update
     */
    where?: professionLevelWhereInput
    /**
     * Limit how many professionLevels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * professionLevel upsert
   */
  export type professionLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the professionLevel to update in case it exists.
     */
    where: professionLevelWhereUniqueInput
    /**
     * In case the professionLevel found by the `where` argument doesn't exist, create a new professionLevel with this data.
     */
    create: XOR<professionLevelCreateInput, professionLevelUncheckedCreateInput>
    /**
     * In case the professionLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professionLevelUpdateInput, professionLevelUncheckedUpdateInput>
  }

  /**
   * professionLevel delete
   */
  export type professionLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
    /**
     * Filter which professionLevel to delete.
     */
    where: professionLevelWhereUniqueInput
  }

  /**
   * professionLevel deleteMany
   */
  export type professionLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professionLevels to delete
     */
    where?: professionLevelWhereInput
    /**
     * Limit how many professionLevels to delete.
     */
    limit?: number
  }

  /**
   * professionLevel without action
   */
  export type professionLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professionLevel
     */
    select?: professionLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professionLevel
     */
    omit?: professionLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionLevelInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalPrice: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalPrice: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    latitude: string | null
    longitude: string | null
    date: Date | null
    totalPrice: Decimal | null
    paymentType: string | null
    withDelivery: boolean | null
    status: string | null
    deliveryComment: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    latitude: string | null
    longitude: string | null
    date: Date | null
    totalPrice: Decimal | null
    paymentType: string | null
    withDelivery: boolean | null
    status: string | null
    deliveryComment: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    latitude: number
    longitude: number
    date: number
    totalPrice: number
    paymentType: number
    withDelivery: number
    status: number
    deliveryComment: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    date?: true
    totalPrice?: true
    paymentType?: true
    withDelivery?: true
    status?: true
    deliveryComment?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    date?: true
    totalPrice?: true
    paymentType?: true
    withDelivery?: true
    status?: true
    deliveryComment?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    latitude?: true
    longitude?: true
    date?: true
    totalPrice?: true
    paymentType?: true
    withDelivery?: true
    status?: true
    deliveryComment?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    address: string
    latitude: string
    longitude: string
    date: Date
    totalPrice: Decimal
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment: string | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    date?: boolean
    totalPrice?: boolean
    paymentType?: boolean
    withDelivery?: boolean
    status?: boolean
    deliveryComment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    date?: boolean
    totalPrice?: boolean
    paymentType?: boolean
    withDelivery?: boolean
    status?: boolean
    deliveryComment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    date?: boolean
    totalPrice?: boolean
    paymentType?: boolean
    withDelivery?: boolean
    status?: boolean
    deliveryComment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    date?: boolean
    totalPrice?: boolean
    paymentType?: boolean
    withDelivery?: boolean
    status?: boolean
    deliveryComment?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "latitude" | "longitude" | "date" | "totalPrice" | "paymentType" | "withDelivery" | "status" | "deliveryComment" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      address: string
      latitude: string
      longitude: string
      date: Date
      totalPrice: Prisma.Decimal
      paymentType: string
      withDelivery: boolean
      status: string
      deliveryComment: string | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly latitude: FieldRef<"Order", 'String'>
    readonly longitude: FieldRef<"Order", 'String'>
    readonly date: FieldRef<"Order", 'DateTime'>
    readonly totalPrice: FieldRef<"Order", 'Decimal'>
    readonly paymentType: FieldRef<"Order", 'String'>
    readonly withDelivery: FieldRef<"Order", 'Boolean'>
    readonly status: FieldRef<"Order", 'String'>
    readonly deliveryComment: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    password: 'password',
    inn: 'inn',
    bank: 'bank',
    mfo: 'mfo',
    salary: 'salary',
    account: 'account',
    address: 'address',
    role: 'role',
    createdAt: 'createdAt',
    regionId: 'regionId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    createdAt: 'createdAt'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const CapacityScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    createdAt: 'createdAt'
  };

  export type CapacityScalarFieldEnum = (typeof CapacityScalarFieldEnum)[keyof typeof CapacityScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    createdAt: 'createdAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    createdAt: 'createdAt'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    createdAt: 'createdAt'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const GeneralInfoScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    address: 'address',
    telegram: 'telegram',
    instagram: 'instagram',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type GeneralInfoScalarFieldEnum = (typeof GeneralInfoScalarFieldEnum)[keyof typeof GeneralInfoScalarFieldEnum]


  export const ToolScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    desc_uz: 'desc_uz',
    desc_ru: 'desc_ru',
    desc_en: 'desc_en',
    image: 'image',
    price: 'price',
    quantity: 'quantity',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt',
    brandId: 'brandId',
    capacityId: 'capacityId',
    sizeId: 'sizeId'
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum]


  export const MasterScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    birthYear: 'birthYear',
    isActive: 'isActive',
    image: 'image',
    passportImg: 'passportImg',
    about: 'about',
    createdAt: 'createdAt'
  };

  export type MasterScalarFieldEnum = (typeof MasterScalarFieldEnum)[keyof typeof MasterScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    id: 'id',
    name_uz: 'name_uz',
    name_ru: 'name_ru',
    name_en: 'name_en',
    image: 'image',
    isActive: 'isActive'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const MasterProfessionScalarFieldEnum: {
    id: 'id',
    professionId: 'professionId',
    masterId: 'masterId',
    levelId: 'levelId',
    minWorkingHours: 'minWorkingHours',
    priceHourly: 'priceHourly',
    priceDaily: 'priceDaily',
    experience: 'experience'
  };

  export type MasterProfessionScalarFieldEnum = (typeof MasterProfessionScalarFieldEnum)[keyof typeof MasterProfessionScalarFieldEnum]


  export const ProfessionToolScalarFieldEnum: {
    id: 'id',
    professionId: 'professionId',
    toolId: 'toolId'
  };

  export type ProfessionToolScalarFieldEnum = (typeof ProfessionToolScalarFieldEnum)[keyof typeof ProfessionToolScalarFieldEnum]


  export const ProfessionLevelScalarFieldEnum: {
    id: 'id',
    professionId: 'professionId',
    levelId: 'levelId',
    minWorkingHours: 'minWorkingHours',
    priceHourly: 'priceHourly',
    priceDaily: 'priceDaily'
  };

  export type ProfessionLevelScalarFieldEnum = (typeof ProfessionLevelScalarFieldEnum)[keyof typeof ProfessionLevelScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    date: 'date',
    totalPrice: 'totalPrice',
    paymentType: 'paymentType',
    withDelivery: 'withDelivery',
    status: 'status',
    deliveryComment: 'deliveryComment',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    inn?: StringNullableFilter<"User"> | string | null
    bank?: StringNullableFilter<"User"> | string | null
    mfo?: StringNullableFilter<"User"> | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    account?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    regionId?: StringFilter<"User"> | string
    Region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    Order?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    inn?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    mfo?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    regionId?: SortOrder
    Region?: RegionOrderByWithRelationInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    inn?: StringNullableFilter<"User"> | string | null
    bank?: StringNullableFilter<"User"> | string | null
    mfo?: StringNullableFilter<"User"> | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    account?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    regionId?: StringFilter<"User"> | string
    Region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    Order?: OrderListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    inn?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    mfo?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    regionId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    inn?: StringNullableWithAggregatesFilter<"User"> | string | null
    bank?: StringNullableWithAggregatesFilter<"User"> | string | null
    mfo?: StringNullableWithAggregatesFilter<"User"> | string | null
    salary?: FloatNullableWithAggregatesFilter<"User"> | number | null
    account?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    regionId?: StringWithAggregatesFilter<"User"> | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    name_uz?: StringFilter<"Region"> | string
    name_ru?: StringFilter<"Region"> | string
    name_en?: StringFilter<"Region"> | string
    createdAt?: DateTimeFilter<"Region"> | Date | string
    User?: UserListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name_uz?: StringFilter<"Region"> | string
    name_ru?: StringFilter<"Region"> | string
    name_en?: StringFilter<"Region"> | string
    createdAt?: DateTimeFilter<"Region"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    name_uz?: StringWithAggregatesFilter<"Region"> | string
    name_ru?: StringWithAggregatesFilter<"Region"> | string
    name_en?: StringWithAggregatesFilter<"Region"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Region"> | Date | string
  }

  export type CapacityWhereInput = {
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    id?: StringFilter<"Capacity"> | string
    name_uz?: StringFilter<"Capacity"> | string
    name_ru?: StringFilter<"Capacity"> | string
    name_en?: StringFilter<"Capacity"> | string
    createdAt?: DateTimeFilter<"Capacity"> | Date | string
    Tool?: ToolListRelationFilter
  }

  export type CapacityOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    Tool?: ToolOrderByRelationAggregateInput
  }

  export type CapacityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    name_uz?: StringFilter<"Capacity"> | string
    name_ru?: StringFilter<"Capacity"> | string
    name_en?: StringFilter<"Capacity"> | string
    createdAt?: DateTimeFilter<"Capacity"> | Date | string
    Tool?: ToolListRelationFilter
  }, "id">

  export type CapacityOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    _count?: CapacityCountOrderByAggregateInput
    _max?: CapacityMaxOrderByAggregateInput
    _min?: CapacityMinOrderByAggregateInput
  }

  export type CapacityScalarWhereWithAggregatesInput = {
    AND?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    OR?: CapacityScalarWhereWithAggregatesInput[]
    NOT?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Capacity"> | string
    name_uz?: StringWithAggregatesFilter<"Capacity"> | string
    name_ru?: StringWithAggregatesFilter<"Capacity"> | string
    name_en?: StringWithAggregatesFilter<"Capacity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Capacity"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name_uz?: StringFilter<"Brand"> | string
    name_ru?: StringFilter<"Brand"> | string
    name_en?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    Tool?: ToolListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    Tool?: ToolOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name_uz?: StringFilter<"Brand"> | string
    name_ru?: StringFilter<"Brand"> | string
    name_en?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    Tool?: ToolListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name_uz?: StringWithAggregatesFilter<"Brand"> | string
    name_ru?: StringWithAggregatesFilter<"Brand"> | string
    name_en?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type SizeWhereInput = {
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    id?: StringFilter<"Size"> | string
    name_uz?: StringFilter<"Size"> | string
    name_ru?: StringFilter<"Size"> | string
    name_en?: StringFilter<"Size"> | string
    createdAt?: DateTimeFilter<"Size"> | Date | string
    Tool?: ToolListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    Tool?: ToolOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    name_uz?: StringFilter<"Size"> | string
    name_ru?: StringFilter<"Size"> | string
    name_en?: StringFilter<"Size"> | string
    createdAt?: DateTimeFilter<"Size"> | Date | string
    Tool?: ToolListRelationFilter
  }, "id">

  export type SizeOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    OR?: SizeScalarWhereWithAggregatesInput[]
    NOT?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Size"> | string
    name_uz?: StringWithAggregatesFilter<"Size"> | string
    name_ru?: StringWithAggregatesFilter<"Size"> | string
    name_en?: StringWithAggregatesFilter<"Size"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Size"> | Date | string
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: StringFilter<"Level"> | string
    name_uz?: StringFilter<"Level"> | string
    name_ru?: StringFilter<"Level"> | string
    name_en?: StringFilter<"Level"> | string
    createdAt?: DateTimeFilter<"Level"> | Date | string
    MasterProfession?: MasterProfessionListRelationFilter
    professionLevel?: ProfessionLevelListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    MasterProfession?: MasterProfessionOrderByRelationAggregateInput
    professionLevel?: professionLevelOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    name_uz?: StringFilter<"Level"> | string
    name_ru?: StringFilter<"Level"> | string
    name_en?: StringFilter<"Level"> | string
    createdAt?: DateTimeFilter<"Level"> | Date | string
    MasterProfession?: MasterProfessionListRelationFilter
    professionLevel?: ProfessionLevelListRelationFilter
  }, "id">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Level"> | string
    name_uz?: StringWithAggregatesFilter<"Level"> | string
    name_ru?: StringWithAggregatesFilter<"Level"> | string
    name_en?: StringWithAggregatesFilter<"Level"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Level"> | Date | string
  }

  export type GeneralInfoWhereInput = {
    AND?: GeneralInfoWhereInput | GeneralInfoWhereInput[]
    OR?: GeneralInfoWhereInput[]
    NOT?: GeneralInfoWhereInput | GeneralInfoWhereInput[]
    id?: StringFilter<"GeneralInfo"> | string
    phone?: StringFilter<"GeneralInfo"> | string
    email?: StringFilter<"GeneralInfo"> | string
    address?: StringNullableFilter<"GeneralInfo"> | string | null
    telegram?: StringNullableFilter<"GeneralInfo"> | string | null
    instagram?: StringNullableFilter<"GeneralInfo"> | string | null
    description?: StringNullableFilter<"GeneralInfo"> | string | null
    createdAt?: DateTimeFilter<"GeneralInfo"> | Date | string
  }

  export type GeneralInfoOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type GeneralInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneralInfoWhereInput | GeneralInfoWhereInput[]
    OR?: GeneralInfoWhereInput[]
    NOT?: GeneralInfoWhereInput | GeneralInfoWhereInput[]
    phone?: StringFilter<"GeneralInfo"> | string
    email?: StringFilter<"GeneralInfo"> | string
    address?: StringNullableFilter<"GeneralInfo"> | string | null
    telegram?: StringNullableFilter<"GeneralInfo"> | string | null
    instagram?: StringNullableFilter<"GeneralInfo"> | string | null
    description?: StringNullableFilter<"GeneralInfo"> | string | null
    createdAt?: DateTimeFilter<"GeneralInfo"> | Date | string
  }, "id">

  export type GeneralInfoOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GeneralInfoCountOrderByAggregateInput
    _max?: GeneralInfoMaxOrderByAggregateInput
    _min?: GeneralInfoMinOrderByAggregateInput
  }

  export type GeneralInfoScalarWhereWithAggregatesInput = {
    AND?: GeneralInfoScalarWhereWithAggregatesInput | GeneralInfoScalarWhereWithAggregatesInput[]
    OR?: GeneralInfoScalarWhereWithAggregatesInput[]
    NOT?: GeneralInfoScalarWhereWithAggregatesInput | GeneralInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneralInfo"> | string
    phone?: StringWithAggregatesFilter<"GeneralInfo"> | string
    email?: StringWithAggregatesFilter<"GeneralInfo"> | string
    address?: StringNullableWithAggregatesFilter<"GeneralInfo"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"GeneralInfo"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"GeneralInfo"> | string | null
    description?: StringNullableWithAggregatesFilter<"GeneralInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GeneralInfo"> | Date | string
  }

  export type ToolWhereInput = {
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    id?: StringFilter<"Tool"> | string
    name_uz?: StringFilter<"Tool"> | string
    name_ru?: StringFilter<"Tool"> | string
    name_en?: StringFilter<"Tool"> | string
    desc_uz?: StringFilter<"Tool"> | string
    desc_ru?: StringFilter<"Tool"> | string
    desc_en?: StringFilter<"Tool"> | string
    image?: StringFilter<"Tool"> | string
    price?: IntFilter<"Tool"> | number
    quantity?: IntFilter<"Tool"> | number
    code?: IntNullableFilter<"Tool"> | number | null
    isActive?: BoolNullableFilter<"Tool"> | boolean | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    brandId?: StringFilter<"Tool"> | string
    capacityId?: StringFilter<"Tool"> | string
    sizeId?: StringFilter<"Tool"> | string
    Brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    Capacity?: XOR<CapacityScalarRelationFilter, CapacityWhereInput>
    Size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    professionTool?: ProfessionToolListRelationFilter
  }

  export type ToolOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    desc_uz?: SortOrder
    desc_ru?: SortOrder
    desc_en?: SortOrder
    image?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    brandId?: SortOrder
    capacityId?: SortOrder
    sizeId?: SortOrder
    Brand?: BrandOrderByWithRelationInput
    Capacity?: CapacityOrderByWithRelationInput
    Size?: SizeOrderByWithRelationInput
    professionTool?: professionToolOrderByRelationAggregateInput
  }

  export type ToolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    name_uz?: StringFilter<"Tool"> | string
    name_ru?: StringFilter<"Tool"> | string
    name_en?: StringFilter<"Tool"> | string
    desc_uz?: StringFilter<"Tool"> | string
    desc_ru?: StringFilter<"Tool"> | string
    desc_en?: StringFilter<"Tool"> | string
    image?: StringFilter<"Tool"> | string
    price?: IntFilter<"Tool"> | number
    quantity?: IntFilter<"Tool"> | number
    code?: IntNullableFilter<"Tool"> | number | null
    isActive?: BoolNullableFilter<"Tool"> | boolean | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    brandId?: StringFilter<"Tool"> | string
    capacityId?: StringFilter<"Tool"> | string
    sizeId?: StringFilter<"Tool"> | string
    Brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    Capacity?: XOR<CapacityScalarRelationFilter, CapacityWhereInput>
    Size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    professionTool?: ProfessionToolListRelationFilter
  }, "id">

  export type ToolOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    desc_uz?: SortOrder
    desc_ru?: SortOrder
    desc_en?: SortOrder
    image?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    brandId?: SortOrder
    capacityId?: SortOrder
    sizeId?: SortOrder
    _count?: ToolCountOrderByAggregateInput
    _avg?: ToolAvgOrderByAggregateInput
    _max?: ToolMaxOrderByAggregateInput
    _min?: ToolMinOrderByAggregateInput
    _sum?: ToolSumOrderByAggregateInput
  }

  export type ToolScalarWhereWithAggregatesInput = {
    AND?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    OR?: ToolScalarWhereWithAggregatesInput[]
    NOT?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tool"> | string
    name_uz?: StringWithAggregatesFilter<"Tool"> | string
    name_ru?: StringWithAggregatesFilter<"Tool"> | string
    name_en?: StringWithAggregatesFilter<"Tool"> | string
    desc_uz?: StringWithAggregatesFilter<"Tool"> | string
    desc_ru?: StringWithAggregatesFilter<"Tool"> | string
    desc_en?: StringWithAggregatesFilter<"Tool"> | string
    image?: StringWithAggregatesFilter<"Tool"> | string
    price?: IntWithAggregatesFilter<"Tool"> | number
    quantity?: IntWithAggregatesFilter<"Tool"> | number
    code?: IntNullableWithAggregatesFilter<"Tool"> | number | null
    isActive?: BoolNullableWithAggregatesFilter<"Tool"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
    brandId?: StringWithAggregatesFilter<"Tool"> | string
    capacityId?: StringWithAggregatesFilter<"Tool"> | string
    sizeId?: StringWithAggregatesFilter<"Tool"> | string
  }

  export type MasterWhereInput = {
    AND?: MasterWhereInput | MasterWhereInput[]
    OR?: MasterWhereInput[]
    NOT?: MasterWhereInput | MasterWhereInput[]
    id?: StringFilter<"Master"> | string
    firstName?: StringFilter<"Master"> | string
    lastName?: StringFilter<"Master"> | string
    phone?: StringFilter<"Master"> | string
    birthYear?: IntFilter<"Master"> | number
    isActive?: BoolNullableFilter<"Master"> | boolean | null
    image?: StringNullableFilter<"Master"> | string | null
    passportImg?: StringNullableFilter<"Master"> | string | null
    about?: StringFilter<"Master"> | string
    createdAt?: DateTimeFilter<"Master"> | Date | string
    MasterProfession?: MasterProfessionListRelationFilter
  }

  export type MasterOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    birthYear?: SortOrder
    isActive?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    MasterProfession?: MasterProfessionOrderByRelationAggregateInput
  }

  export type MasterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterWhereInput | MasterWhereInput[]
    OR?: MasterWhereInput[]
    NOT?: MasterWhereInput | MasterWhereInput[]
    firstName?: StringFilter<"Master"> | string
    lastName?: StringFilter<"Master"> | string
    phone?: StringFilter<"Master"> | string
    birthYear?: IntFilter<"Master"> | number
    isActive?: BoolNullableFilter<"Master"> | boolean | null
    image?: StringNullableFilter<"Master"> | string | null
    passportImg?: StringNullableFilter<"Master"> | string | null
    about?: StringFilter<"Master"> | string
    createdAt?: DateTimeFilter<"Master"> | Date | string
    MasterProfession?: MasterProfessionListRelationFilter
  }, "id">

  export type MasterOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    birthYear?: SortOrder
    isActive?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    _count?: MasterCountOrderByAggregateInput
    _avg?: MasterAvgOrderByAggregateInput
    _max?: MasterMaxOrderByAggregateInput
    _min?: MasterMinOrderByAggregateInput
    _sum?: MasterSumOrderByAggregateInput
  }

  export type MasterScalarWhereWithAggregatesInput = {
    AND?: MasterScalarWhereWithAggregatesInput | MasterScalarWhereWithAggregatesInput[]
    OR?: MasterScalarWhereWithAggregatesInput[]
    NOT?: MasterScalarWhereWithAggregatesInput | MasterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Master"> | string
    firstName?: StringWithAggregatesFilter<"Master"> | string
    lastName?: StringWithAggregatesFilter<"Master"> | string
    phone?: StringWithAggregatesFilter<"Master"> | string
    birthYear?: IntWithAggregatesFilter<"Master"> | number
    isActive?: BoolNullableWithAggregatesFilter<"Master"> | boolean | null
    image?: StringNullableWithAggregatesFilter<"Master"> | string | null
    passportImg?: StringNullableWithAggregatesFilter<"Master"> | string | null
    about?: StringWithAggregatesFilter<"Master"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Master"> | Date | string
  }

  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    id?: StringFilter<"Profession"> | string
    name_uz?: StringFilter<"Profession"> | string
    name_ru?: StringFilter<"Profession"> | string
    name_en?: StringFilter<"Profession"> | string
    image?: StringFilter<"Profession"> | string
    isActive?: BoolFilter<"Profession"> | boolean
    MasterProfession?: MasterProfessionListRelationFilter
    professionTool?: ProfessionToolListRelationFilter
    professionLevel?: ProfessionLevelListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    MasterProfession?: MasterProfessionOrderByRelationAggregateInput
    professionTool?: professionToolOrderByRelationAggregateInput
    professionLevel?: professionLevelOrderByRelationAggregateInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    name_uz?: StringFilter<"Profession"> | string
    name_ru?: StringFilter<"Profession"> | string
    name_en?: StringFilter<"Profession"> | string
    image?: StringFilter<"Profession"> | string
    isActive?: BoolFilter<"Profession"> | boolean
    MasterProfession?: MasterProfessionListRelationFilter
    professionTool?: ProfessionToolListRelationFilter
    professionLevel?: ProfessionLevelListRelationFilter
  }, "id">

  export type ProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profession"> | string
    name_uz?: StringWithAggregatesFilter<"Profession"> | string
    name_ru?: StringWithAggregatesFilter<"Profession"> | string
    name_en?: StringWithAggregatesFilter<"Profession"> | string
    image?: StringWithAggregatesFilter<"Profession"> | string
    isActive?: BoolWithAggregatesFilter<"Profession"> | boolean
  }

  export type MasterProfessionWhereInput = {
    AND?: MasterProfessionWhereInput | MasterProfessionWhereInput[]
    OR?: MasterProfessionWhereInput[]
    NOT?: MasterProfessionWhereInput | MasterProfessionWhereInput[]
    id?: StringFilter<"MasterProfession"> | string
    professionId?: StringFilter<"MasterProfession"> | string
    masterId?: StringFilter<"MasterProfession"> | string
    levelId?: StringFilter<"MasterProfession"> | string
    minWorkingHours?: IntFilter<"MasterProfession"> | number
    priceHourly?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    experience?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    Pofession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Master?: XOR<MasterScalarRelationFilter, MasterWhereInput>
    Level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type MasterProfessionOrderByWithRelationInput = {
    id?: SortOrder
    professionId?: SortOrder
    masterId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
    Pofession?: ProfessionOrderByWithRelationInput
    Master?: MasterOrderByWithRelationInput
    Level?: LevelOrderByWithRelationInput
  }

  export type MasterProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterProfessionWhereInput | MasterProfessionWhereInput[]
    OR?: MasterProfessionWhereInput[]
    NOT?: MasterProfessionWhereInput | MasterProfessionWhereInput[]
    professionId?: StringFilter<"MasterProfession"> | string
    masterId?: StringFilter<"MasterProfession"> | string
    levelId?: StringFilter<"MasterProfession"> | string
    minWorkingHours?: IntFilter<"MasterProfession"> | number
    priceHourly?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    experience?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    Pofession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Master?: XOR<MasterScalarRelationFilter, MasterWhereInput>
    Level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type MasterProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    professionId?: SortOrder
    masterId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
    _count?: MasterProfessionCountOrderByAggregateInput
    _avg?: MasterProfessionAvgOrderByAggregateInput
    _max?: MasterProfessionMaxOrderByAggregateInput
    _min?: MasterProfessionMinOrderByAggregateInput
    _sum?: MasterProfessionSumOrderByAggregateInput
  }

  export type MasterProfessionScalarWhereWithAggregatesInput = {
    AND?: MasterProfessionScalarWhereWithAggregatesInput | MasterProfessionScalarWhereWithAggregatesInput[]
    OR?: MasterProfessionScalarWhereWithAggregatesInput[]
    NOT?: MasterProfessionScalarWhereWithAggregatesInput | MasterProfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterProfession"> | string
    professionId?: StringWithAggregatesFilter<"MasterProfession"> | string
    masterId?: StringWithAggregatesFilter<"MasterProfession"> | string
    levelId?: StringWithAggregatesFilter<"MasterProfession"> | string
    minWorkingHours?: IntWithAggregatesFilter<"MasterProfession"> | number
    priceHourly?: DecimalWithAggregatesFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalWithAggregatesFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    experience?: DecimalWithAggregatesFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
  }

  export type professionToolWhereInput = {
    AND?: professionToolWhereInput | professionToolWhereInput[]
    OR?: professionToolWhereInput[]
    NOT?: professionToolWhereInput | professionToolWhereInput[]
    id?: StringFilter<"professionTool"> | string
    professionId?: StringFilter<"professionTool"> | string
    toolId?: StringFilter<"professionTool"> | string
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type professionToolOrderByWithRelationInput = {
    id?: SortOrder
    professionId?: SortOrder
    toolId?: SortOrder
    Profession?: ProfessionOrderByWithRelationInput
    Tool?: ToolOrderByWithRelationInput
  }

  export type professionToolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: professionToolWhereInput | professionToolWhereInput[]
    OR?: professionToolWhereInput[]
    NOT?: professionToolWhereInput | professionToolWhereInput[]
    professionId?: StringFilter<"professionTool"> | string
    toolId?: StringFilter<"professionTool"> | string
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type professionToolOrderByWithAggregationInput = {
    id?: SortOrder
    professionId?: SortOrder
    toolId?: SortOrder
    _count?: professionToolCountOrderByAggregateInput
    _max?: professionToolMaxOrderByAggregateInput
    _min?: professionToolMinOrderByAggregateInput
  }

  export type professionToolScalarWhereWithAggregatesInput = {
    AND?: professionToolScalarWhereWithAggregatesInput | professionToolScalarWhereWithAggregatesInput[]
    OR?: professionToolScalarWhereWithAggregatesInput[]
    NOT?: professionToolScalarWhereWithAggregatesInput | professionToolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"professionTool"> | string
    professionId?: StringWithAggregatesFilter<"professionTool"> | string
    toolId?: StringWithAggregatesFilter<"professionTool"> | string
  }

  export type professionLevelWhereInput = {
    AND?: professionLevelWhereInput | professionLevelWhereInput[]
    OR?: professionLevelWhereInput[]
    NOT?: professionLevelWhereInput | professionLevelWhereInput[]
    id?: StringFilter<"professionLevel"> | string
    professionId?: StringFilter<"professionLevel"> | string
    levelId?: StringFilter<"professionLevel"> | string
    minWorkingHours?: IntFilter<"professionLevel"> | number
    priceHourly?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type professionLevelOrderByWithRelationInput = {
    id?: SortOrder
    professionId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    Profession?: ProfessionOrderByWithRelationInput
    Level?: LevelOrderByWithRelationInput
  }

  export type professionLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: professionLevelWhereInput | professionLevelWhereInput[]
    OR?: professionLevelWhereInput[]
    NOT?: professionLevelWhereInput | professionLevelWhereInput[]
    professionId?: StringFilter<"professionLevel"> | string
    levelId?: StringFilter<"professionLevel"> | string
    minWorkingHours?: IntFilter<"professionLevel"> | number
    priceHourly?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    Level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type professionLevelOrderByWithAggregationInput = {
    id?: SortOrder
    professionId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    _count?: professionLevelCountOrderByAggregateInput
    _avg?: professionLevelAvgOrderByAggregateInput
    _max?: professionLevelMaxOrderByAggregateInput
    _min?: professionLevelMinOrderByAggregateInput
    _sum?: professionLevelSumOrderByAggregateInput
  }

  export type professionLevelScalarWhereWithAggregatesInput = {
    AND?: professionLevelScalarWhereWithAggregatesInput | professionLevelScalarWhereWithAggregatesInput[]
    OR?: professionLevelScalarWhereWithAggregatesInput[]
    NOT?: professionLevelScalarWhereWithAggregatesInput | professionLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"professionLevel"> | string
    professionId?: StringWithAggregatesFilter<"professionLevel"> | string
    levelId?: StringWithAggregatesFilter<"professionLevel"> | string
    minWorkingHours?: IntWithAggregatesFilter<"professionLevel"> | number
    priceHourly?: DecimalWithAggregatesFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalWithAggregatesFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    latitude?: StringFilter<"Order"> | string
    longitude?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentType?: StringFilter<"Order"> | string
    withDelivery?: BoolFilter<"Order"> | boolean
    status?: StringFilter<"Order"> | string
    deliveryComment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    paymentType?: SortOrder
    withDelivery?: SortOrder
    status?: SortOrder
    deliveryComment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    latitude?: StringFilter<"Order"> | string
    longitude?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentType?: StringFilter<"Order"> | string
    withDelivery?: BoolFilter<"Order"> | boolean
    status?: StringFilter<"Order"> | string
    deliveryComment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    paymentType?: SortOrder
    withDelivery?: SortOrder
    status?: SortOrder
    deliveryComment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    latitude?: StringWithAggregatesFilter<"Order"> | string
    longitude?: StringWithAggregatesFilter<"Order"> | string
    date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    totalPrice?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentType?: StringWithAggregatesFilter<"Order"> | string
    withDelivery?: BoolWithAggregatesFilter<"Order"> | boolean
    status?: StringWithAggregatesFilter<"Order"> | string
    deliveryComment?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    Region: RegionCreateNestedOneWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    regionId: string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Region?: RegionUpdateOneRequiredWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: StringFieldUpdateOperationsInput | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    regionId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolCreateNestedManyWithoutCapacityInput
  }

  export type CapacityUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolUncheckedCreateNestedManyWithoutCapacityInput
  }

  export type CapacityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUncheckedUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type CapacityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    Tool?: ToolUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tool?: ToolUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type SizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionCreateNestedManyWithoutLevelInput
    professionLevel?: professionLevelCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutLevelInput
    professionLevel?: professionLevelUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUpdateManyWithoutLevelNestedInput
    professionLevel?: professionLevelUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutLevelNestedInput
    professionLevel?: professionLevelUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type LevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralInfoCreateInput = {
    id?: string
    phone: string
    email: string
    address?: string | null
    telegram?: string | null
    instagram?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type GeneralInfoUncheckedCreateInput = {
    id?: string
    phone: string
    email: string
    address?: string | null
    telegram?: string | null
    instagram?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type GeneralInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralInfoCreateManyInput = {
    id?: string
    phone: string
    email: string
    address?: string | null
    telegram?: string | null
    instagram?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type GeneralInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    Brand: BrandCreateNestedOneWithoutToolInput
    Capacity: CapacityCreateNestedOneWithoutToolInput
    Size: SizeCreateNestedOneWithoutToolInput
    professionTool?: professionToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    capacityId: string
    sizeId: string
    professionTool?: professionToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneRequiredWithoutToolNestedInput
    Capacity?: CapacityUpdateOneRequiredWithoutToolNestedInput
    Size?: SizeUpdateOneRequiredWithoutToolNestedInput
    professionTool?: professionToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    capacityId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    professionTool?: professionToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    capacityId: string
    sizeId: string
  }

  export type ToolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    capacityId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive?: boolean | null
    image?: string | null
    passportImg?: string | null
    about: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionCreateNestedManyWithoutMasterInput
  }

  export type MasterUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive?: boolean | null
    image?: string | null
    passportImg?: string | null
    about: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutMasterInput
  }

  export type MasterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUpdateManyWithoutMasterNestedInput
  }

  export type MasterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutMasterNestedInput
  }

  export type MasterCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive?: boolean | null
    image?: string | null
    passportImg?: string | null
    about: string
    createdAt?: Date | string
  }

  export type MasterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionCreateNestedManyWithoutPofessionInput
    professionTool?: professionToolCreateNestedManyWithoutProfessionInput
    professionLevel?: professionLevelCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutPofessionInput
    professionTool?: professionToolUncheckedCreateNestedManyWithoutProfessionInput
    professionLevel?: professionLevelUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUpdateManyWithoutPofessionNestedInput
    professionTool?: professionToolUpdateManyWithoutProfessionNestedInput
    professionLevel?: professionLevelUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutPofessionNestedInput
    professionTool?: professionToolUncheckedUpdateManyWithoutProfessionNestedInput
    professionLevel?: professionLevelUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
  }

  export type ProfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MasterProfessionCreateInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
    Pofession: ProfessionCreateNestedOneWithoutMasterProfessionInput
    Master: MasterCreateNestedOneWithoutMasterProfessionInput
    Level: LevelCreateNestedOneWithoutMasterProfessionInput
  }

  export type MasterProfessionUncheckedCreateInput = {
    id?: string
    professionId: string
    masterId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pofession?: ProfessionUpdateOneRequiredWithoutMasterProfessionNestedInput
    Master?: MasterUpdateOneRequiredWithoutMasterProfessionNestedInput
    Level?: LevelUpdateOneRequiredWithoutMasterProfessionNestedInput
  }

  export type MasterProfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionCreateManyInput = {
    id?: string
    professionId: string
    masterId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionToolCreateInput = {
    id?: string
    Profession: ProfessionCreateNestedOneWithoutProfessionToolInput
    Tool: ToolCreateNestedOneWithoutProfessionToolInput
  }

  export type professionToolUncheckedCreateInput = {
    id?: string
    professionId: string
    toolId: string
  }

  export type professionToolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Profession?: ProfessionUpdateOneRequiredWithoutProfessionToolNestedInput
    Tool?: ToolUpdateOneRequiredWithoutProfessionToolNestedInput
  }

  export type professionToolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type professionToolCreateManyInput = {
    id?: string
    professionId: string
    toolId: string
  }

  export type professionToolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type professionToolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type professionLevelCreateInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    Profession: ProfessionCreateNestedOneWithoutProfessionLevelInput
    Level: LevelCreateNestedOneWithoutProfessionLevelInput
  }

  export type professionLevelUncheckedCreateInput = {
    id?: string
    professionId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Profession?: ProfessionUpdateOneRequiredWithoutProfessionLevelNestedInput
    Level?: LevelUpdateOneRequiredWithoutProfessionLevelNestedInput
  }

  export type professionLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelCreateManyInput = {
    id?: string
    professionId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderCreateInput = {
    id?: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    inn?: SortOrder
    bank?: SortOrder
    mfo?: SortOrder
    salary?: SortOrder
    account?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    regionId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    inn?: SortOrder
    bank?: SortOrder
    mfo?: SortOrder
    salary?: SortOrder
    account?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    regionId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    inn?: SortOrder
    bank?: SortOrder
    mfo?: SortOrder
    salary?: SortOrder
    account?: SortOrder
    address?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    regionId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolListRelationFilter = {
    every?: ToolWhereInput
    some?: ToolWhereInput
    none?: ToolWhereInput
  }

  export type ToolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapacityCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type CapacityMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type CapacityMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type SizeCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterProfessionListRelationFilter = {
    every?: MasterProfessionWhereInput
    some?: MasterProfessionWhereInput
    none?: MasterProfessionWhereInput
  }

  export type ProfessionLevelListRelationFilter = {
    every?: professionLevelWhereInput
    some?: professionLevelWhereInput
    none?: professionLevelWhereInput
  }

  export type MasterProfessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professionLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneralInfoCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneralInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneralInfoMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type CapacityScalarRelationFilter = {
    is?: CapacityWhereInput
    isNot?: CapacityWhereInput
  }

  export type SizeScalarRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type ProfessionToolListRelationFilter = {
    every?: professionToolWhereInput
    some?: professionToolWhereInput
    none?: professionToolWhereInput
  }

  export type professionToolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    desc_uz?: SortOrder
    desc_ru?: SortOrder
    desc_en?: SortOrder
    image?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    brandId?: SortOrder
    capacityId?: SortOrder
    sizeId?: SortOrder
  }

  export type ToolAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrder
  }

  export type ToolMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    desc_uz?: SortOrder
    desc_ru?: SortOrder
    desc_en?: SortOrder
    image?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    brandId?: SortOrder
    capacityId?: SortOrder
    sizeId?: SortOrder
  }

  export type ToolMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    desc_uz?: SortOrder
    desc_ru?: SortOrder
    desc_en?: SortOrder
    image?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    brandId?: SortOrder
    capacityId?: SortOrder
    sizeId?: SortOrder
  }

  export type ToolSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    code?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MasterCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    birthYear?: SortOrder
    isActive?: SortOrder
    image?: SortOrder
    passportImg?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterAvgOrderByAggregateInput = {
    birthYear?: SortOrder
  }

  export type MasterMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    birthYear?: SortOrder
    isActive?: SortOrder
    image?: SortOrder
    passportImg?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    birthYear?: SortOrder
    isActive?: SortOrder
    image?: SortOrder
    passportImg?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterSumOrderByAggregateInput = {
    birthYear?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProfessionScalarRelationFilter = {
    is?: ProfessionWhereInput
    isNot?: ProfessionWhereInput
  }

  export type MasterScalarRelationFilter = {
    is?: MasterWhereInput
    isNot?: MasterWhereInput
  }

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type MasterProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    masterId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
  }

  export type MasterProfessionAvgOrderByAggregateInput = {
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
  }

  export type MasterProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    masterId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
  }

  export type MasterProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    masterId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
  }

  export type MasterProfessionSumOrderByAggregateInput = {
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
    experience?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ToolScalarRelationFilter = {
    is?: ToolWhereInput
    isNot?: ToolWhereInput
  }

  export type professionToolCountOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    toolId?: SortOrder
  }

  export type professionToolMaxOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    toolId?: SortOrder
  }

  export type professionToolMinOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    toolId?: SortOrder
  }

  export type professionLevelCountOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
  }

  export type professionLevelAvgOrderByAggregateInput = {
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
  }

  export type professionLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
  }

  export type professionLevelMinOrderByAggregateInput = {
    id?: SortOrder
    professionId?: SortOrder
    levelId?: SortOrder
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
  }

  export type professionLevelSumOrderByAggregateInput = {
    minWorkingHours?: SortOrder
    priceHourly?: SortOrder
    priceDaily?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    paymentType?: SortOrder
    withDelivery?: SortOrder
    status?: SortOrder
    deliveryComment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    paymentType?: SortOrder
    withDelivery?: SortOrder
    status?: SortOrder
    deliveryComment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    paymentType?: SortOrder
    withDelivery?: SortOrder
    status?: SortOrder
    deliveryComment?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type RegionCreateNestedOneWithoutUserInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput
    connect?: RegionWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegionUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput
    upsert?: RegionUpsertWithoutUserInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutUserInput, RegionUpdateWithoutUserInput>, RegionUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ToolCreateNestedManyWithoutCapacityInput = {
    create?: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput> | ToolCreateWithoutCapacityInput[] | ToolUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCapacityInput | ToolCreateOrConnectWithoutCapacityInput[]
    createMany?: ToolCreateManyCapacityInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutCapacityInput = {
    create?: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput> | ToolCreateWithoutCapacityInput[] | ToolUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCapacityInput | ToolCreateOrConnectWithoutCapacityInput[]
    createMany?: ToolCreateManyCapacityInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUpdateManyWithoutCapacityNestedInput = {
    create?: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput> | ToolCreateWithoutCapacityInput[] | ToolUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCapacityInput | ToolCreateOrConnectWithoutCapacityInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCapacityInput | ToolUpsertWithWhereUniqueWithoutCapacityInput[]
    createMany?: ToolCreateManyCapacityInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCapacityInput | ToolUpdateWithWhereUniqueWithoutCapacityInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCapacityInput | ToolUpdateManyWithWhereWithoutCapacityInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutCapacityNestedInput = {
    create?: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput> | ToolCreateWithoutCapacityInput[] | ToolUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutCapacityInput | ToolCreateOrConnectWithoutCapacityInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutCapacityInput | ToolUpsertWithWhereUniqueWithoutCapacityInput[]
    createMany?: ToolCreateManyCapacityInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutCapacityInput | ToolUpdateWithWhereUniqueWithoutCapacityInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutCapacityInput | ToolUpdateManyWithWhereWithoutCapacityInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolCreateNestedManyWithoutBrandInput = {
    create?: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput> | ToolCreateWithoutBrandInput[] | ToolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutBrandInput | ToolCreateOrConnectWithoutBrandInput[]
    createMany?: ToolCreateManyBrandInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput> | ToolCreateWithoutBrandInput[] | ToolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutBrandInput | ToolCreateOrConnectWithoutBrandInput[]
    createMany?: ToolCreateManyBrandInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput> | ToolCreateWithoutBrandInput[] | ToolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutBrandInput | ToolCreateOrConnectWithoutBrandInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutBrandInput | ToolUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ToolCreateManyBrandInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutBrandInput | ToolUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutBrandInput | ToolUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput> | ToolCreateWithoutBrandInput[] | ToolUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutBrandInput | ToolCreateOrConnectWithoutBrandInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutBrandInput | ToolUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ToolCreateManyBrandInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutBrandInput | ToolUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutBrandInput | ToolUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolCreateNestedManyWithoutSizeInput = {
    create?: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput> | ToolCreateWithoutSizeInput[] | ToolUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSizeInput | ToolCreateOrConnectWithoutSizeInput[]
    createMany?: ToolCreateManySizeInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput> | ToolCreateWithoutSizeInput[] | ToolUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSizeInput | ToolCreateOrConnectWithoutSizeInput[]
    createMany?: ToolCreateManySizeInputEnvelope
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
  }

  export type ToolUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput> | ToolCreateWithoutSizeInput[] | ToolUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSizeInput | ToolCreateOrConnectWithoutSizeInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutSizeInput | ToolUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ToolCreateManySizeInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutSizeInput | ToolUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutSizeInput | ToolUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type ToolUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput> | ToolCreateWithoutSizeInput[] | ToolUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ToolCreateOrConnectWithoutSizeInput | ToolCreateOrConnectWithoutSizeInput[]
    upsert?: ToolUpsertWithWhereUniqueWithoutSizeInput | ToolUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ToolCreateManySizeInputEnvelope
    set?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    disconnect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    delete?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    connect?: ToolWhereUniqueInput | ToolWhereUniqueInput[]
    update?: ToolUpdateWithWhereUniqueWithoutSizeInput | ToolUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ToolUpdateManyWithWhereWithoutSizeInput | ToolUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ToolScalarWhereInput | ToolScalarWhereInput[]
  }

  export type MasterProfessionCreateNestedManyWithoutLevelInput = {
    create?: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput> | MasterProfessionCreateWithoutLevelInput[] | MasterProfessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutLevelInput | MasterProfessionCreateOrConnectWithoutLevelInput[]
    createMany?: MasterProfessionCreateManyLevelInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type professionLevelCreateNestedManyWithoutLevelInput = {
    create?: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput> | professionLevelCreateWithoutLevelInput[] | professionLevelUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutLevelInput | professionLevelCreateOrConnectWithoutLevelInput[]
    createMany?: professionLevelCreateManyLevelInputEnvelope
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
  }

  export type MasterProfessionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput> | MasterProfessionCreateWithoutLevelInput[] | MasterProfessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutLevelInput | MasterProfessionCreateOrConnectWithoutLevelInput[]
    createMany?: MasterProfessionCreateManyLevelInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type professionLevelUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput> | professionLevelCreateWithoutLevelInput[] | professionLevelUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutLevelInput | professionLevelCreateOrConnectWithoutLevelInput[]
    createMany?: professionLevelCreateManyLevelInputEnvelope
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
  }

  export type MasterProfessionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput> | MasterProfessionCreateWithoutLevelInput[] | MasterProfessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutLevelInput | MasterProfessionCreateOrConnectWithoutLevelInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutLevelInput | MasterProfessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: MasterProfessionCreateManyLevelInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutLevelInput | MasterProfessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutLevelInput | MasterProfessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type professionLevelUpdateManyWithoutLevelNestedInput = {
    create?: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput> | professionLevelCreateWithoutLevelInput[] | professionLevelUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutLevelInput | professionLevelCreateOrConnectWithoutLevelInput[]
    upsert?: professionLevelUpsertWithWhereUniqueWithoutLevelInput | professionLevelUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: professionLevelCreateManyLevelInputEnvelope
    set?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    disconnect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    delete?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    update?: professionLevelUpdateWithWhereUniqueWithoutLevelInput | professionLevelUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: professionLevelUpdateManyWithWhereWithoutLevelInput | professionLevelUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
  }

  export type MasterProfessionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput> | MasterProfessionCreateWithoutLevelInput[] | MasterProfessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutLevelInput | MasterProfessionCreateOrConnectWithoutLevelInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutLevelInput | MasterProfessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: MasterProfessionCreateManyLevelInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutLevelInput | MasterProfessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutLevelInput | MasterProfessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type professionLevelUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput> | professionLevelCreateWithoutLevelInput[] | professionLevelUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutLevelInput | professionLevelCreateOrConnectWithoutLevelInput[]
    upsert?: professionLevelUpsertWithWhereUniqueWithoutLevelInput | professionLevelUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: professionLevelCreateManyLevelInputEnvelope
    set?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    disconnect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    delete?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    update?: professionLevelUpdateWithWhereUniqueWithoutLevelInput | professionLevelUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: professionLevelUpdateManyWithWhereWithoutLevelInput | professionLevelUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutToolInput = {
    create?: XOR<BrandCreateWithoutToolInput, BrandUncheckedCreateWithoutToolInput>
    connectOrCreate?: BrandCreateOrConnectWithoutToolInput
    connect?: BrandWhereUniqueInput
  }

  export type CapacityCreateNestedOneWithoutToolInput = {
    create?: XOR<CapacityCreateWithoutToolInput, CapacityUncheckedCreateWithoutToolInput>
    connectOrCreate?: CapacityCreateOrConnectWithoutToolInput
    connect?: CapacityWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutToolInput = {
    create?: XOR<SizeCreateWithoutToolInput, SizeUncheckedCreateWithoutToolInput>
    connectOrCreate?: SizeCreateOrConnectWithoutToolInput
    connect?: SizeWhereUniqueInput
  }

  export type professionToolCreateNestedManyWithoutToolInput = {
    create?: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput> | professionToolCreateWithoutToolInput[] | professionToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutToolInput | professionToolCreateOrConnectWithoutToolInput[]
    createMany?: professionToolCreateManyToolInputEnvelope
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
  }

  export type professionToolUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput> | professionToolCreateWithoutToolInput[] | professionToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutToolInput | professionToolCreateOrConnectWithoutToolInput[]
    createMany?: professionToolCreateManyToolInputEnvelope
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BrandUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<BrandCreateWithoutToolInput, BrandUncheckedCreateWithoutToolInput>
    connectOrCreate?: BrandCreateOrConnectWithoutToolInput
    upsert?: BrandUpsertWithoutToolInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutToolInput, BrandUpdateWithoutToolInput>, BrandUncheckedUpdateWithoutToolInput>
  }

  export type CapacityUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<CapacityCreateWithoutToolInput, CapacityUncheckedCreateWithoutToolInput>
    connectOrCreate?: CapacityCreateOrConnectWithoutToolInput
    upsert?: CapacityUpsertWithoutToolInput
    connect?: CapacityWhereUniqueInput
    update?: XOR<XOR<CapacityUpdateToOneWithWhereWithoutToolInput, CapacityUpdateWithoutToolInput>, CapacityUncheckedUpdateWithoutToolInput>
  }

  export type SizeUpdateOneRequiredWithoutToolNestedInput = {
    create?: XOR<SizeCreateWithoutToolInput, SizeUncheckedCreateWithoutToolInput>
    connectOrCreate?: SizeCreateOrConnectWithoutToolInput
    upsert?: SizeUpsertWithoutToolInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutToolInput, SizeUpdateWithoutToolInput>, SizeUncheckedUpdateWithoutToolInput>
  }

  export type professionToolUpdateManyWithoutToolNestedInput = {
    create?: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput> | professionToolCreateWithoutToolInput[] | professionToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutToolInput | professionToolCreateOrConnectWithoutToolInput[]
    upsert?: professionToolUpsertWithWhereUniqueWithoutToolInput | professionToolUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: professionToolCreateManyToolInputEnvelope
    set?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    disconnect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    delete?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    update?: professionToolUpdateWithWhereUniqueWithoutToolInput | professionToolUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: professionToolUpdateManyWithWhereWithoutToolInput | professionToolUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
  }

  export type professionToolUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput> | professionToolCreateWithoutToolInput[] | professionToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutToolInput | professionToolCreateOrConnectWithoutToolInput[]
    upsert?: professionToolUpsertWithWhereUniqueWithoutToolInput | professionToolUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: professionToolCreateManyToolInputEnvelope
    set?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    disconnect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    delete?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    update?: professionToolUpdateWithWhereUniqueWithoutToolInput | professionToolUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: professionToolUpdateManyWithWhereWithoutToolInput | professionToolUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
  }

  export type MasterProfessionCreateNestedManyWithoutMasterInput = {
    create?: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput> | MasterProfessionCreateWithoutMasterInput[] | MasterProfessionUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutMasterInput | MasterProfessionCreateOrConnectWithoutMasterInput[]
    createMany?: MasterProfessionCreateManyMasterInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type MasterProfessionUncheckedCreateNestedManyWithoutMasterInput = {
    create?: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput> | MasterProfessionCreateWithoutMasterInput[] | MasterProfessionUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutMasterInput | MasterProfessionCreateOrConnectWithoutMasterInput[]
    createMany?: MasterProfessionCreateManyMasterInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type MasterProfessionUpdateManyWithoutMasterNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput> | MasterProfessionCreateWithoutMasterInput[] | MasterProfessionUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutMasterInput | MasterProfessionCreateOrConnectWithoutMasterInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutMasterInput | MasterProfessionUpsertWithWhereUniqueWithoutMasterInput[]
    createMany?: MasterProfessionCreateManyMasterInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutMasterInput | MasterProfessionUpdateWithWhereUniqueWithoutMasterInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutMasterInput | MasterProfessionUpdateManyWithWhereWithoutMasterInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type MasterProfessionUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput> | MasterProfessionCreateWithoutMasterInput[] | MasterProfessionUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutMasterInput | MasterProfessionCreateOrConnectWithoutMasterInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutMasterInput | MasterProfessionUpsertWithWhereUniqueWithoutMasterInput[]
    createMany?: MasterProfessionCreateManyMasterInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutMasterInput | MasterProfessionUpdateWithWhereUniqueWithoutMasterInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutMasterInput | MasterProfessionUpdateManyWithWhereWithoutMasterInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type MasterProfessionCreateNestedManyWithoutPofessionInput = {
    create?: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput> | MasterProfessionCreateWithoutPofessionInput[] | MasterProfessionUncheckedCreateWithoutPofessionInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutPofessionInput | MasterProfessionCreateOrConnectWithoutPofessionInput[]
    createMany?: MasterProfessionCreateManyPofessionInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type professionToolCreateNestedManyWithoutProfessionInput = {
    create?: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput> | professionToolCreateWithoutProfessionInput[] | professionToolUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutProfessionInput | professionToolCreateOrConnectWithoutProfessionInput[]
    createMany?: professionToolCreateManyProfessionInputEnvelope
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
  }

  export type professionLevelCreateNestedManyWithoutProfessionInput = {
    create?: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput> | professionLevelCreateWithoutProfessionInput[] | professionLevelUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutProfessionInput | professionLevelCreateOrConnectWithoutProfessionInput[]
    createMany?: professionLevelCreateManyProfessionInputEnvelope
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
  }

  export type MasterProfessionUncheckedCreateNestedManyWithoutPofessionInput = {
    create?: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput> | MasterProfessionCreateWithoutPofessionInput[] | MasterProfessionUncheckedCreateWithoutPofessionInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutPofessionInput | MasterProfessionCreateOrConnectWithoutPofessionInput[]
    createMany?: MasterProfessionCreateManyPofessionInputEnvelope
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
  }

  export type professionToolUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput> | professionToolCreateWithoutProfessionInput[] | professionToolUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutProfessionInput | professionToolCreateOrConnectWithoutProfessionInput[]
    createMany?: professionToolCreateManyProfessionInputEnvelope
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
  }

  export type professionLevelUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput> | professionLevelCreateWithoutProfessionInput[] | professionLevelUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutProfessionInput | professionLevelCreateOrConnectWithoutProfessionInput[]
    createMany?: professionLevelCreateManyProfessionInputEnvelope
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MasterProfessionUpdateManyWithoutPofessionNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput> | MasterProfessionCreateWithoutPofessionInput[] | MasterProfessionUncheckedCreateWithoutPofessionInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutPofessionInput | MasterProfessionCreateOrConnectWithoutPofessionInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutPofessionInput | MasterProfessionUpsertWithWhereUniqueWithoutPofessionInput[]
    createMany?: MasterProfessionCreateManyPofessionInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutPofessionInput | MasterProfessionUpdateWithWhereUniqueWithoutPofessionInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutPofessionInput | MasterProfessionUpdateManyWithWhereWithoutPofessionInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type professionToolUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput> | professionToolCreateWithoutProfessionInput[] | professionToolUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutProfessionInput | professionToolCreateOrConnectWithoutProfessionInput[]
    upsert?: professionToolUpsertWithWhereUniqueWithoutProfessionInput | professionToolUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: professionToolCreateManyProfessionInputEnvelope
    set?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    disconnect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    delete?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    update?: professionToolUpdateWithWhereUniqueWithoutProfessionInput | professionToolUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: professionToolUpdateManyWithWhereWithoutProfessionInput | professionToolUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
  }

  export type professionLevelUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput> | professionLevelCreateWithoutProfessionInput[] | professionLevelUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutProfessionInput | professionLevelCreateOrConnectWithoutProfessionInput[]
    upsert?: professionLevelUpsertWithWhereUniqueWithoutProfessionInput | professionLevelUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: professionLevelCreateManyProfessionInputEnvelope
    set?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    disconnect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    delete?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    update?: professionLevelUpdateWithWhereUniqueWithoutProfessionInput | professionLevelUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: professionLevelUpdateManyWithWhereWithoutProfessionInput | professionLevelUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
  }

  export type MasterProfessionUncheckedUpdateManyWithoutPofessionNestedInput = {
    create?: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput> | MasterProfessionCreateWithoutPofessionInput[] | MasterProfessionUncheckedCreateWithoutPofessionInput[]
    connectOrCreate?: MasterProfessionCreateOrConnectWithoutPofessionInput | MasterProfessionCreateOrConnectWithoutPofessionInput[]
    upsert?: MasterProfessionUpsertWithWhereUniqueWithoutPofessionInput | MasterProfessionUpsertWithWhereUniqueWithoutPofessionInput[]
    createMany?: MasterProfessionCreateManyPofessionInputEnvelope
    set?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    disconnect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    delete?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    connect?: MasterProfessionWhereUniqueInput | MasterProfessionWhereUniqueInput[]
    update?: MasterProfessionUpdateWithWhereUniqueWithoutPofessionInput | MasterProfessionUpdateWithWhereUniqueWithoutPofessionInput[]
    updateMany?: MasterProfessionUpdateManyWithWhereWithoutPofessionInput | MasterProfessionUpdateManyWithWhereWithoutPofessionInput[]
    deleteMany?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
  }

  export type professionToolUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput> | professionToolCreateWithoutProfessionInput[] | professionToolUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionToolCreateOrConnectWithoutProfessionInput | professionToolCreateOrConnectWithoutProfessionInput[]
    upsert?: professionToolUpsertWithWhereUniqueWithoutProfessionInput | professionToolUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: professionToolCreateManyProfessionInputEnvelope
    set?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    disconnect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    delete?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    connect?: professionToolWhereUniqueInput | professionToolWhereUniqueInput[]
    update?: professionToolUpdateWithWhereUniqueWithoutProfessionInput | professionToolUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: professionToolUpdateManyWithWhereWithoutProfessionInput | professionToolUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
  }

  export type professionLevelUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput> | professionLevelCreateWithoutProfessionInput[] | professionLevelUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: professionLevelCreateOrConnectWithoutProfessionInput | professionLevelCreateOrConnectWithoutProfessionInput[]
    upsert?: professionLevelUpsertWithWhereUniqueWithoutProfessionInput | professionLevelUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: professionLevelCreateManyProfessionInputEnvelope
    set?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    disconnect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    delete?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    connect?: professionLevelWhereUniqueInput | professionLevelWhereUniqueInput[]
    update?: professionLevelUpdateWithWhereUniqueWithoutProfessionInput | professionLevelUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: professionLevelUpdateManyWithWhereWithoutProfessionInput | professionLevelUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
  }

  export type ProfessionCreateNestedOneWithoutMasterProfessionInput = {
    create?: XOR<ProfessionCreateWithoutMasterProfessionInput, ProfessionUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutMasterProfessionInput
    connect?: ProfessionWhereUniqueInput
  }

  export type MasterCreateNestedOneWithoutMasterProfessionInput = {
    create?: XOR<MasterCreateWithoutMasterProfessionInput, MasterUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: MasterCreateOrConnectWithoutMasterProfessionInput
    connect?: MasterWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutMasterProfessionInput = {
    create?: XOR<LevelCreateWithoutMasterProfessionInput, LevelUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: LevelCreateOrConnectWithoutMasterProfessionInput
    connect?: LevelWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProfessionUpdateOneRequiredWithoutMasterProfessionNestedInput = {
    create?: XOR<ProfessionCreateWithoutMasterProfessionInput, ProfessionUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutMasterProfessionInput
    upsert?: ProfessionUpsertWithoutMasterProfessionInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutMasterProfessionInput, ProfessionUpdateWithoutMasterProfessionInput>, ProfessionUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type MasterUpdateOneRequiredWithoutMasterProfessionNestedInput = {
    create?: XOR<MasterCreateWithoutMasterProfessionInput, MasterUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: MasterCreateOrConnectWithoutMasterProfessionInput
    upsert?: MasterUpsertWithoutMasterProfessionInput
    connect?: MasterWhereUniqueInput
    update?: XOR<XOR<MasterUpdateToOneWithWhereWithoutMasterProfessionInput, MasterUpdateWithoutMasterProfessionInput>, MasterUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type LevelUpdateOneRequiredWithoutMasterProfessionNestedInput = {
    create?: XOR<LevelCreateWithoutMasterProfessionInput, LevelUncheckedCreateWithoutMasterProfessionInput>
    connectOrCreate?: LevelCreateOrConnectWithoutMasterProfessionInput
    upsert?: LevelUpsertWithoutMasterProfessionInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutMasterProfessionInput, LevelUpdateWithoutMasterProfessionInput>, LevelUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type ProfessionCreateNestedOneWithoutProfessionToolInput = {
    create?: XOR<ProfessionCreateWithoutProfessionToolInput, ProfessionUncheckedCreateWithoutProfessionToolInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionToolInput
    connect?: ProfessionWhereUniqueInput
  }

  export type ToolCreateNestedOneWithoutProfessionToolInput = {
    create?: XOR<ToolCreateWithoutProfessionToolInput, ToolUncheckedCreateWithoutProfessionToolInput>
    connectOrCreate?: ToolCreateOrConnectWithoutProfessionToolInput
    connect?: ToolWhereUniqueInput
  }

  export type ProfessionUpdateOneRequiredWithoutProfessionToolNestedInput = {
    create?: XOR<ProfessionCreateWithoutProfessionToolInput, ProfessionUncheckedCreateWithoutProfessionToolInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionToolInput
    upsert?: ProfessionUpsertWithoutProfessionToolInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutProfessionToolInput, ProfessionUpdateWithoutProfessionToolInput>, ProfessionUncheckedUpdateWithoutProfessionToolInput>
  }

  export type ToolUpdateOneRequiredWithoutProfessionToolNestedInput = {
    create?: XOR<ToolCreateWithoutProfessionToolInput, ToolUncheckedCreateWithoutProfessionToolInput>
    connectOrCreate?: ToolCreateOrConnectWithoutProfessionToolInput
    upsert?: ToolUpsertWithoutProfessionToolInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutProfessionToolInput, ToolUpdateWithoutProfessionToolInput>, ToolUncheckedUpdateWithoutProfessionToolInput>
  }

  export type ProfessionCreateNestedOneWithoutProfessionLevelInput = {
    create?: XOR<ProfessionCreateWithoutProfessionLevelInput, ProfessionUncheckedCreateWithoutProfessionLevelInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionLevelInput
    connect?: ProfessionWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutProfessionLevelInput = {
    create?: XOR<LevelCreateWithoutProfessionLevelInput, LevelUncheckedCreateWithoutProfessionLevelInput>
    connectOrCreate?: LevelCreateOrConnectWithoutProfessionLevelInput
    connect?: LevelWhereUniqueInput
  }

  export type ProfessionUpdateOneRequiredWithoutProfessionLevelNestedInput = {
    create?: XOR<ProfessionCreateWithoutProfessionLevelInput, ProfessionUncheckedCreateWithoutProfessionLevelInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionLevelInput
    upsert?: ProfessionUpsertWithoutProfessionLevelInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutProfessionLevelInput, ProfessionUpdateWithoutProfessionLevelInput>, ProfessionUncheckedUpdateWithoutProfessionLevelInput>
  }

  export type LevelUpdateOneRequiredWithoutProfessionLevelNestedInput = {
    create?: XOR<LevelCreateWithoutProfessionLevelInput, LevelUncheckedCreateWithoutProfessionLevelInput>
    connectOrCreate?: LevelCreateOrConnectWithoutProfessionLevelInput
    upsert?: LevelUpsertWithoutProfessionLevelInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutProfessionLevelInput, LevelUpdateWithoutProfessionLevelInput>, LevelUncheckedUpdateWithoutProfessionLevelInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RegionCreateWithoutUserInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type RegionUncheckedCreateWithoutUserInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type RegionCreateOrConnectWithoutUserInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutUserInput = {
    update: XOR<RegionUpdateWithoutUserInput, RegionUncheckedUpdateWithoutUserInput>
    create: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutUserInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutUserInput, RegionUncheckedUpdateWithoutUserInput>
  }

  export type RegionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    latitude?: StringFilter<"Order"> | string
    longitude?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentType?: StringFilter<"Order"> | string
    withDelivery?: BoolFilter<"Order"> | boolean
    status?: StringFilter<"Order"> | string
    deliveryComment?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserCreateWithoutRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserCreateManyRegionInputEnvelope = {
    data: UserCreateManyRegionInput | UserCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
  }

  export type UserUpdateManyWithWhereWithoutRegionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRegionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    inn?: StringNullableFilter<"User"> | string | null
    bank?: StringNullableFilter<"User"> | string | null
    mfo?: StringNullableFilter<"User"> | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    account?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    regionId?: StringFilter<"User"> | string
  }

  export type ToolCreateWithoutCapacityInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    Brand: BrandCreateNestedOneWithoutToolInput
    Size: SizeCreateNestedOneWithoutToolInput
    professionTool?: professionToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCapacityInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    sizeId: string
    professionTool?: professionToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCapacityInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput>
  }

  export type ToolCreateManyCapacityInputEnvelope = {
    data: ToolCreateManyCapacityInput | ToolCreateManyCapacityInput[]
    skipDuplicates?: boolean
  }

  export type ToolUpsertWithWhereUniqueWithoutCapacityInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutCapacityInput, ToolUncheckedUpdateWithoutCapacityInput>
    create: XOR<ToolCreateWithoutCapacityInput, ToolUncheckedCreateWithoutCapacityInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutCapacityInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutCapacityInput, ToolUncheckedUpdateWithoutCapacityInput>
  }

  export type ToolUpdateManyWithWhereWithoutCapacityInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutCapacityInput>
  }

  export type ToolScalarWhereInput = {
    AND?: ToolScalarWhereInput | ToolScalarWhereInput[]
    OR?: ToolScalarWhereInput[]
    NOT?: ToolScalarWhereInput | ToolScalarWhereInput[]
    id?: StringFilter<"Tool"> | string
    name_uz?: StringFilter<"Tool"> | string
    name_ru?: StringFilter<"Tool"> | string
    name_en?: StringFilter<"Tool"> | string
    desc_uz?: StringFilter<"Tool"> | string
    desc_ru?: StringFilter<"Tool"> | string
    desc_en?: StringFilter<"Tool"> | string
    image?: StringFilter<"Tool"> | string
    price?: IntFilter<"Tool"> | number
    quantity?: IntFilter<"Tool"> | number
    code?: IntNullableFilter<"Tool"> | number | null
    isActive?: BoolNullableFilter<"Tool"> | boolean | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    brandId?: StringFilter<"Tool"> | string
    capacityId?: StringFilter<"Tool"> | string
    sizeId?: StringFilter<"Tool"> | string
  }

  export type ToolCreateWithoutBrandInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    Capacity: CapacityCreateNestedOneWithoutToolInput
    Size: SizeCreateNestedOneWithoutToolInput
    professionTool?: professionToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutBrandInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    capacityId: string
    sizeId: string
    professionTool?: professionToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutBrandInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput>
  }

  export type ToolCreateManyBrandInputEnvelope = {
    data: ToolCreateManyBrandInput | ToolCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ToolUpsertWithWhereUniqueWithoutBrandInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutBrandInput, ToolUncheckedUpdateWithoutBrandInput>
    create: XOR<ToolCreateWithoutBrandInput, ToolUncheckedCreateWithoutBrandInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutBrandInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutBrandInput, ToolUncheckedUpdateWithoutBrandInput>
  }

  export type ToolUpdateManyWithWhereWithoutBrandInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutBrandInput>
  }

  export type ToolCreateWithoutSizeInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    Brand: BrandCreateNestedOneWithoutToolInput
    Capacity: CapacityCreateNestedOneWithoutToolInput
    professionTool?: professionToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutSizeInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    capacityId: string
    professionTool?: professionToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutSizeInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput>
  }

  export type ToolCreateManySizeInputEnvelope = {
    data: ToolCreateManySizeInput | ToolCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type ToolUpsertWithWhereUniqueWithoutSizeInput = {
    where: ToolWhereUniqueInput
    update: XOR<ToolUpdateWithoutSizeInput, ToolUncheckedUpdateWithoutSizeInput>
    create: XOR<ToolCreateWithoutSizeInput, ToolUncheckedCreateWithoutSizeInput>
  }

  export type ToolUpdateWithWhereUniqueWithoutSizeInput = {
    where: ToolWhereUniqueInput
    data: XOR<ToolUpdateWithoutSizeInput, ToolUncheckedUpdateWithoutSizeInput>
  }

  export type ToolUpdateManyWithWhereWithoutSizeInput = {
    where: ToolScalarWhereInput
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyWithoutSizeInput>
  }

  export type MasterProfessionCreateWithoutLevelInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
    Pofession: ProfessionCreateNestedOneWithoutMasterProfessionInput
    Master: MasterCreateNestedOneWithoutMasterProfessionInput
  }

  export type MasterProfessionUncheckedCreateWithoutLevelInput = {
    id?: string
    professionId: string
    masterId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionCreateOrConnectWithoutLevelInput = {
    where: MasterProfessionWhereUniqueInput
    create: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput>
  }

  export type MasterProfessionCreateManyLevelInputEnvelope = {
    data: MasterProfessionCreateManyLevelInput | MasterProfessionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type professionLevelCreateWithoutLevelInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    Profession: ProfessionCreateNestedOneWithoutProfessionLevelInput
  }

  export type professionLevelUncheckedCreateWithoutLevelInput = {
    id?: string
    professionId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type professionLevelCreateOrConnectWithoutLevelInput = {
    where: professionLevelWhereUniqueInput
    create: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput>
  }

  export type professionLevelCreateManyLevelInputEnvelope = {
    data: professionLevelCreateManyLevelInput | professionLevelCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type MasterProfessionUpsertWithWhereUniqueWithoutLevelInput = {
    where: MasterProfessionWhereUniqueInput
    update: XOR<MasterProfessionUpdateWithoutLevelInput, MasterProfessionUncheckedUpdateWithoutLevelInput>
    create: XOR<MasterProfessionCreateWithoutLevelInput, MasterProfessionUncheckedCreateWithoutLevelInput>
  }

  export type MasterProfessionUpdateWithWhereUniqueWithoutLevelInput = {
    where: MasterProfessionWhereUniqueInput
    data: XOR<MasterProfessionUpdateWithoutLevelInput, MasterProfessionUncheckedUpdateWithoutLevelInput>
  }

  export type MasterProfessionUpdateManyWithWhereWithoutLevelInput = {
    where: MasterProfessionScalarWhereInput
    data: XOR<MasterProfessionUpdateManyMutationInput, MasterProfessionUncheckedUpdateManyWithoutLevelInput>
  }

  export type MasterProfessionScalarWhereInput = {
    AND?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
    OR?: MasterProfessionScalarWhereInput[]
    NOT?: MasterProfessionScalarWhereInput | MasterProfessionScalarWhereInput[]
    id?: StringFilter<"MasterProfession"> | string
    professionId?: StringFilter<"MasterProfession"> | string
    masterId?: StringFilter<"MasterProfession"> | string
    levelId?: StringFilter<"MasterProfession"> | string
    minWorkingHours?: IntFilter<"MasterProfession"> | number
    priceHourly?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
    experience?: DecimalFilter<"MasterProfession"> | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUpsertWithWhereUniqueWithoutLevelInput = {
    where: professionLevelWhereUniqueInput
    update: XOR<professionLevelUpdateWithoutLevelInput, professionLevelUncheckedUpdateWithoutLevelInput>
    create: XOR<professionLevelCreateWithoutLevelInput, professionLevelUncheckedCreateWithoutLevelInput>
  }

  export type professionLevelUpdateWithWhereUniqueWithoutLevelInput = {
    where: professionLevelWhereUniqueInput
    data: XOR<professionLevelUpdateWithoutLevelInput, professionLevelUncheckedUpdateWithoutLevelInput>
  }

  export type professionLevelUpdateManyWithWhereWithoutLevelInput = {
    where: professionLevelScalarWhereInput
    data: XOR<professionLevelUpdateManyMutationInput, professionLevelUncheckedUpdateManyWithoutLevelInput>
  }

  export type professionLevelScalarWhereInput = {
    AND?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
    OR?: professionLevelScalarWhereInput[]
    NOT?: professionLevelScalarWhereInput | professionLevelScalarWhereInput[]
    id?: StringFilter<"professionLevel"> | string
    professionId?: StringFilter<"professionLevel"> | string
    levelId?: StringFilter<"professionLevel"> | string
    minWorkingHours?: IntFilter<"professionLevel"> | number
    priceHourly?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFilter<"professionLevel"> | Decimal | DecimalJsLike | number | string
  }

  export type BrandCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutToolInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutToolInput, BrandUncheckedCreateWithoutToolInput>
  }

  export type CapacityCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type CapacityUncheckedCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type CapacityCreateOrConnectWithoutToolInput = {
    where: CapacityWhereUniqueInput
    create: XOR<CapacityCreateWithoutToolInput, CapacityUncheckedCreateWithoutToolInput>
  }

  export type SizeCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type SizeUncheckedCreateWithoutToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type SizeCreateOrConnectWithoutToolInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutToolInput, SizeUncheckedCreateWithoutToolInput>
  }

  export type professionToolCreateWithoutToolInput = {
    id?: string
    Profession: ProfessionCreateNestedOneWithoutProfessionToolInput
  }

  export type professionToolUncheckedCreateWithoutToolInput = {
    id?: string
    professionId: string
  }

  export type professionToolCreateOrConnectWithoutToolInput = {
    where: professionToolWhereUniqueInput
    create: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput>
  }

  export type professionToolCreateManyToolInputEnvelope = {
    data: professionToolCreateManyToolInput | professionToolCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutToolInput = {
    update: XOR<BrandUpdateWithoutToolInput, BrandUncheckedUpdateWithoutToolInput>
    create: XOR<BrandCreateWithoutToolInput, BrandUncheckedCreateWithoutToolInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutToolInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutToolInput, BrandUncheckedUpdateWithoutToolInput>
  }

  export type BrandUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityUpsertWithoutToolInput = {
    update: XOR<CapacityUpdateWithoutToolInput, CapacityUncheckedUpdateWithoutToolInput>
    create: XOR<CapacityCreateWithoutToolInput, CapacityUncheckedCreateWithoutToolInput>
    where?: CapacityWhereInput
  }

  export type CapacityUpdateToOneWithWhereWithoutToolInput = {
    where?: CapacityWhereInput
    data: XOR<CapacityUpdateWithoutToolInput, CapacityUncheckedUpdateWithoutToolInput>
  }

  export type CapacityUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUpsertWithoutToolInput = {
    update: XOR<SizeUpdateWithoutToolInput, SizeUncheckedUpdateWithoutToolInput>
    create: XOR<SizeCreateWithoutToolInput, SizeUncheckedCreateWithoutToolInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutToolInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutToolInput, SizeUncheckedUpdateWithoutToolInput>
  }

  export type SizeUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professionToolUpsertWithWhereUniqueWithoutToolInput = {
    where: professionToolWhereUniqueInput
    update: XOR<professionToolUpdateWithoutToolInput, professionToolUncheckedUpdateWithoutToolInput>
    create: XOR<professionToolCreateWithoutToolInput, professionToolUncheckedCreateWithoutToolInput>
  }

  export type professionToolUpdateWithWhereUniqueWithoutToolInput = {
    where: professionToolWhereUniqueInput
    data: XOR<professionToolUpdateWithoutToolInput, professionToolUncheckedUpdateWithoutToolInput>
  }

  export type professionToolUpdateManyWithWhereWithoutToolInput = {
    where: professionToolScalarWhereInput
    data: XOR<professionToolUpdateManyMutationInput, professionToolUncheckedUpdateManyWithoutToolInput>
  }

  export type professionToolScalarWhereInput = {
    AND?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
    OR?: professionToolScalarWhereInput[]
    NOT?: professionToolScalarWhereInput | professionToolScalarWhereInput[]
    id?: StringFilter<"professionTool"> | string
    professionId?: StringFilter<"professionTool"> | string
    toolId?: StringFilter<"professionTool"> | string
  }

  export type MasterProfessionCreateWithoutMasterInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
    Pofession: ProfessionCreateNestedOneWithoutMasterProfessionInput
    Level: LevelCreateNestedOneWithoutMasterProfessionInput
  }

  export type MasterProfessionUncheckedCreateWithoutMasterInput = {
    id?: string
    professionId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionCreateOrConnectWithoutMasterInput = {
    where: MasterProfessionWhereUniqueInput
    create: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput>
  }

  export type MasterProfessionCreateManyMasterInputEnvelope = {
    data: MasterProfessionCreateManyMasterInput | MasterProfessionCreateManyMasterInput[]
    skipDuplicates?: boolean
  }

  export type MasterProfessionUpsertWithWhereUniqueWithoutMasterInput = {
    where: MasterProfessionWhereUniqueInput
    update: XOR<MasterProfessionUpdateWithoutMasterInput, MasterProfessionUncheckedUpdateWithoutMasterInput>
    create: XOR<MasterProfessionCreateWithoutMasterInput, MasterProfessionUncheckedCreateWithoutMasterInput>
  }

  export type MasterProfessionUpdateWithWhereUniqueWithoutMasterInput = {
    where: MasterProfessionWhereUniqueInput
    data: XOR<MasterProfessionUpdateWithoutMasterInput, MasterProfessionUncheckedUpdateWithoutMasterInput>
  }

  export type MasterProfessionUpdateManyWithWhereWithoutMasterInput = {
    where: MasterProfessionScalarWhereInput
    data: XOR<MasterProfessionUpdateManyMutationInput, MasterProfessionUncheckedUpdateManyWithoutMasterInput>
  }

  export type MasterProfessionCreateWithoutPofessionInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
    Master: MasterCreateNestedOneWithoutMasterProfessionInput
    Level: LevelCreateNestedOneWithoutMasterProfessionInput
  }

  export type MasterProfessionUncheckedCreateWithoutPofessionInput = {
    id?: string
    masterId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionCreateOrConnectWithoutPofessionInput = {
    where: MasterProfessionWhereUniqueInput
    create: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput>
  }

  export type MasterProfessionCreateManyPofessionInputEnvelope = {
    data: MasterProfessionCreateManyPofessionInput | MasterProfessionCreateManyPofessionInput[]
    skipDuplicates?: boolean
  }

  export type professionToolCreateWithoutProfessionInput = {
    id?: string
    Tool: ToolCreateNestedOneWithoutProfessionToolInput
  }

  export type professionToolUncheckedCreateWithoutProfessionInput = {
    id?: string
    toolId: string
  }

  export type professionToolCreateOrConnectWithoutProfessionInput = {
    where: professionToolWhereUniqueInput
    create: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput>
  }

  export type professionToolCreateManyProfessionInputEnvelope = {
    data: professionToolCreateManyProfessionInput | professionToolCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type professionLevelCreateWithoutProfessionInput = {
    id?: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    Level: LevelCreateNestedOneWithoutProfessionLevelInput
  }

  export type professionLevelUncheckedCreateWithoutProfessionInput = {
    id?: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type professionLevelCreateOrConnectWithoutProfessionInput = {
    where: professionLevelWhereUniqueInput
    create: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput>
  }

  export type professionLevelCreateManyProfessionInputEnvelope = {
    data: professionLevelCreateManyProfessionInput | professionLevelCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type MasterProfessionUpsertWithWhereUniqueWithoutPofessionInput = {
    where: MasterProfessionWhereUniqueInput
    update: XOR<MasterProfessionUpdateWithoutPofessionInput, MasterProfessionUncheckedUpdateWithoutPofessionInput>
    create: XOR<MasterProfessionCreateWithoutPofessionInput, MasterProfessionUncheckedCreateWithoutPofessionInput>
  }

  export type MasterProfessionUpdateWithWhereUniqueWithoutPofessionInput = {
    where: MasterProfessionWhereUniqueInput
    data: XOR<MasterProfessionUpdateWithoutPofessionInput, MasterProfessionUncheckedUpdateWithoutPofessionInput>
  }

  export type MasterProfessionUpdateManyWithWhereWithoutPofessionInput = {
    where: MasterProfessionScalarWhereInput
    data: XOR<MasterProfessionUpdateManyMutationInput, MasterProfessionUncheckedUpdateManyWithoutPofessionInput>
  }

  export type professionToolUpsertWithWhereUniqueWithoutProfessionInput = {
    where: professionToolWhereUniqueInput
    update: XOR<professionToolUpdateWithoutProfessionInput, professionToolUncheckedUpdateWithoutProfessionInput>
    create: XOR<professionToolCreateWithoutProfessionInput, professionToolUncheckedCreateWithoutProfessionInput>
  }

  export type professionToolUpdateWithWhereUniqueWithoutProfessionInput = {
    where: professionToolWhereUniqueInput
    data: XOR<professionToolUpdateWithoutProfessionInput, professionToolUncheckedUpdateWithoutProfessionInput>
  }

  export type professionToolUpdateManyWithWhereWithoutProfessionInput = {
    where: professionToolScalarWhereInput
    data: XOR<professionToolUpdateManyMutationInput, professionToolUncheckedUpdateManyWithoutProfessionInput>
  }

  export type professionLevelUpsertWithWhereUniqueWithoutProfessionInput = {
    where: professionLevelWhereUniqueInput
    update: XOR<professionLevelUpdateWithoutProfessionInput, professionLevelUncheckedUpdateWithoutProfessionInput>
    create: XOR<professionLevelCreateWithoutProfessionInput, professionLevelUncheckedCreateWithoutProfessionInput>
  }

  export type professionLevelUpdateWithWhereUniqueWithoutProfessionInput = {
    where: professionLevelWhereUniqueInput
    data: XOR<professionLevelUpdateWithoutProfessionInput, professionLevelUncheckedUpdateWithoutProfessionInput>
  }

  export type professionLevelUpdateManyWithWhereWithoutProfessionInput = {
    where: professionLevelScalarWhereInput
    data: XOR<professionLevelUpdateManyMutationInput, professionLevelUncheckedUpdateManyWithoutProfessionInput>
  }

  export type ProfessionCreateWithoutMasterProfessionInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    professionTool?: professionToolCreateNestedManyWithoutProfessionInput
    professionLevel?: professionLevelCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateWithoutMasterProfessionInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    professionTool?: professionToolUncheckedCreateNestedManyWithoutProfessionInput
    professionLevel?: professionLevelUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionCreateOrConnectWithoutMasterProfessionInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutMasterProfessionInput, ProfessionUncheckedCreateWithoutMasterProfessionInput>
  }

  export type MasterCreateWithoutMasterProfessionInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive?: boolean | null
    image?: string | null
    passportImg?: string | null
    about: string
    createdAt?: Date | string
  }

  export type MasterUncheckedCreateWithoutMasterProfessionInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    birthYear: number
    isActive?: boolean | null
    image?: string | null
    passportImg?: string | null
    about: string
    createdAt?: Date | string
  }

  export type MasterCreateOrConnectWithoutMasterProfessionInput = {
    where: MasterWhereUniqueInput
    create: XOR<MasterCreateWithoutMasterProfessionInput, MasterUncheckedCreateWithoutMasterProfessionInput>
  }

  export type LevelCreateWithoutMasterProfessionInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    professionLevel?: professionLevelCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutMasterProfessionInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    professionLevel?: professionLevelUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutMasterProfessionInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutMasterProfessionInput, LevelUncheckedCreateWithoutMasterProfessionInput>
  }

  export type ProfessionUpsertWithoutMasterProfessionInput = {
    update: XOR<ProfessionUpdateWithoutMasterProfessionInput, ProfessionUncheckedUpdateWithoutMasterProfessionInput>
    create: XOR<ProfessionCreateWithoutMasterProfessionInput, ProfessionUncheckedCreateWithoutMasterProfessionInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutMasterProfessionInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutMasterProfessionInput, ProfessionUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type ProfessionUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    professionTool?: professionToolUpdateManyWithoutProfessionNestedInput
    professionLevel?: professionLevelUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    professionTool?: professionToolUncheckedUpdateManyWithoutProfessionNestedInput
    professionLevel?: professionLevelUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type MasterUpsertWithoutMasterProfessionInput = {
    update: XOR<MasterUpdateWithoutMasterProfessionInput, MasterUncheckedUpdateWithoutMasterProfessionInput>
    create: XOR<MasterCreateWithoutMasterProfessionInput, MasterUncheckedCreateWithoutMasterProfessionInput>
    where?: MasterWhereInput
  }

  export type MasterUpdateToOneWithWhereWithoutMasterProfessionInput = {
    where?: MasterWhereInput
    data: XOR<MasterUpdateWithoutMasterProfessionInput, MasterUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type MasterUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterUncheckedUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthYear?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    about?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUpsertWithoutMasterProfessionInput = {
    update: XOR<LevelUpdateWithoutMasterProfessionInput, LevelUncheckedUpdateWithoutMasterProfessionInput>
    create: XOR<LevelCreateWithoutMasterProfessionInput, LevelUncheckedCreateWithoutMasterProfessionInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutMasterProfessionInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutMasterProfessionInput, LevelUncheckedUpdateWithoutMasterProfessionInput>
  }

  export type LevelUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionLevel?: professionLevelUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutMasterProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionLevel?: professionLevelUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type ProfessionCreateWithoutProfessionToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionCreateNestedManyWithoutPofessionInput
    professionLevel?: professionLevelCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateWithoutProfessionToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutPofessionInput
    professionLevel?: professionLevelUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionCreateOrConnectWithoutProfessionToolInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutProfessionToolInput, ProfessionUncheckedCreateWithoutProfessionToolInput>
  }

  export type ToolCreateWithoutProfessionToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    Brand: BrandCreateNestedOneWithoutToolInput
    Capacity: CapacityCreateNestedOneWithoutToolInput
    Size: SizeCreateNestedOneWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutProfessionToolInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    capacityId: string
    sizeId: string
  }

  export type ToolCreateOrConnectWithoutProfessionToolInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutProfessionToolInput, ToolUncheckedCreateWithoutProfessionToolInput>
  }

  export type ProfessionUpsertWithoutProfessionToolInput = {
    update: XOR<ProfessionUpdateWithoutProfessionToolInput, ProfessionUncheckedUpdateWithoutProfessionToolInput>
    create: XOR<ProfessionCreateWithoutProfessionToolInput, ProfessionUncheckedCreateWithoutProfessionToolInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutProfessionToolInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutProfessionToolInput, ProfessionUncheckedUpdateWithoutProfessionToolInput>
  }

  export type ProfessionUpdateWithoutProfessionToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUpdateManyWithoutPofessionNestedInput
    professionLevel?: professionLevelUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutProfessionToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutPofessionNestedInput
    professionLevel?: professionLevelUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ToolUpsertWithoutProfessionToolInput = {
    update: XOR<ToolUpdateWithoutProfessionToolInput, ToolUncheckedUpdateWithoutProfessionToolInput>
    create: XOR<ToolCreateWithoutProfessionToolInput, ToolUncheckedCreateWithoutProfessionToolInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutProfessionToolInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutProfessionToolInput, ToolUncheckedUpdateWithoutProfessionToolInput>
  }

  export type ToolUpdateWithoutProfessionToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneRequiredWithoutToolNestedInput
    Capacity?: CapacityUpdateOneRequiredWithoutToolNestedInput
    Size?: SizeUpdateOneRequiredWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutProfessionToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    capacityId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionCreateWithoutProfessionLevelInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionCreateNestedManyWithoutPofessionInput
    professionTool?: professionToolCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateWithoutProfessionLevelInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    isActive: boolean
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutPofessionInput
    professionTool?: professionToolUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionCreateOrConnectWithoutProfessionLevelInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutProfessionLevelInput, ProfessionUncheckedCreateWithoutProfessionLevelInput>
  }

  export type LevelCreateWithoutProfessionLevelInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutProfessionLevelInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
    MasterProfession?: MasterProfessionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutProfessionLevelInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutProfessionLevelInput, LevelUncheckedCreateWithoutProfessionLevelInput>
  }

  export type ProfessionUpsertWithoutProfessionLevelInput = {
    update: XOR<ProfessionUpdateWithoutProfessionLevelInput, ProfessionUncheckedUpdateWithoutProfessionLevelInput>
    create: XOR<ProfessionCreateWithoutProfessionLevelInput, ProfessionUncheckedCreateWithoutProfessionLevelInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutProfessionLevelInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutProfessionLevelInput, ProfessionUncheckedUpdateWithoutProfessionLevelInput>
  }

  export type ProfessionUpdateWithoutProfessionLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUpdateManyWithoutPofessionNestedInput
    professionTool?: professionToolUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutProfessionLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutPofessionNestedInput
    professionTool?: professionToolUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type LevelUpsertWithoutProfessionLevelInput = {
    update: XOR<LevelUpdateWithoutProfessionLevelInput, LevelUncheckedUpdateWithoutProfessionLevelInput>
    create: XOR<LevelCreateWithoutProfessionLevelInput, LevelUncheckedCreateWithoutProfessionLevelInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutProfessionLevelInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutProfessionLevelInput, LevelUncheckedUpdateWithoutProfessionLevelInput>
  }

  export type LevelUpdateWithoutProfessionLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutProfessionLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProfession?: MasterProfessionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    Region: RegionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    regionId: string
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Region?: RegionUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    address: string
    latitude: string
    longitude: string
    date?: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentType: string
    withDelivery: boolean
    status: string
    deliveryComment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentType?: StringFieldUpdateOperationsInput | string
    withDelivery?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    deliveryComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    inn?: string | null
    bank?: string | null
    mfo?: string | null
    salary?: number | null
    account?: string | null
    address?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    inn?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    mfo?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateManyCapacityInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    sizeId: string
  }

  export type ToolUpdateWithoutCapacityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneRequiredWithoutToolNestedInput
    Size?: SizeUpdateOneRequiredWithoutToolNestedInput
    professionTool?: professionToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCapacityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    professionTool?: professionToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutCapacityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolCreateManyBrandInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    capacityId: string
    sizeId: string
  }

  export type ToolUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Capacity?: CapacityUpdateOneRequiredWithoutToolNestedInput
    Size?: SizeUpdateOneRequiredWithoutToolNestedInput
    professionTool?: professionToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacityId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    professionTool?: professionToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacityId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
  }

  export type ToolCreateManySizeInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    image: string
    price: number
    quantity: number
    code?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    brandId: string
    capacityId: string
  }

  export type ToolUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneRequiredWithoutToolNestedInput
    Capacity?: CapacityUpdateOneRequiredWithoutToolNestedInput
    professionTool?: professionToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    capacityId?: StringFieldUpdateOperationsInput | string
    professionTool?: professionToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateManyWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    desc_uz?: StringFieldUpdateOperationsInput | string
    desc_ru?: StringFieldUpdateOperationsInput | string
    desc_en?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    code?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brandId?: StringFieldUpdateOperationsInput | string
    capacityId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterProfessionCreateManyLevelInput = {
    id?: string
    professionId: string
    masterId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type professionLevelCreateManyLevelInput = {
    id?: string
    professionId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pofession?: ProfessionUpdateOneRequiredWithoutMasterProfessionNestedInput
    Master?: MasterUpdateOneRequiredWithoutMasterProfessionNestedInput
  }

  export type MasterProfessionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Profession?: ProfessionUpdateOneRequiredWithoutProfessionLevelNestedInput
  }

  export type professionLevelUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionToolCreateManyToolInput = {
    id?: string
    professionId: string
  }

  export type professionToolUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    Profession?: ProfessionUpdateOneRequiredWithoutProfessionToolNestedInput
  }

  export type professionToolUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
  }

  export type professionToolUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterProfessionCreateManyMasterInput = {
    id?: string
    professionId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUpdateWithoutMasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Pofession?: ProfessionUpdateOneRequiredWithoutMasterProfessionNestedInput
    Level?: LevelUpdateOneRequiredWithoutMasterProfessionNestedInput
  }

  export type MasterProfessionUncheckedUpdateWithoutMasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUncheckedUpdateManyWithoutMasterInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionCreateManyPofessionInput = {
    id?: string
    masterId: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
    experience: Decimal | DecimalJsLike | number | string
  }

  export type professionToolCreateManyProfessionInput = {
    id?: string
    toolId: string
  }

  export type professionLevelCreateManyProfessionInput = {
    id?: string
    levelId: string
    minWorkingHours: number
    priceHourly: Decimal | DecimalJsLike | number | string
    priceDaily: Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUpdateWithoutPofessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Master?: MasterUpdateOneRequiredWithoutMasterProfessionNestedInput
    Level?: LevelUpdateOneRequiredWithoutMasterProfessionNestedInput
  }

  export type MasterProfessionUncheckedUpdateWithoutPofessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MasterProfessionUncheckedUpdateManyWithoutPofessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    experience?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionToolUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    Tool?: ToolUpdateOneRequiredWithoutProfessionToolNestedInput
  }

  export type professionToolUncheckedUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type professionToolUncheckedUpdateManyWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
  }

  export type professionLevelUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Level?: LevelUpdateOneRequiredWithoutProfessionLevelNestedInput
  }

  export type professionLevelUncheckedUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type professionLevelUncheckedUpdateManyWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: StringFieldUpdateOperationsInput | string
    minWorkingHours?: IntFieldUpdateOperationsInput | number
    priceHourly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDaily?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}