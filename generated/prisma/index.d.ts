
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
    Tool: 'Tool'
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
      modelProps: "user" | "region" | "capacity" | "brand" | "size" | "level" | "generalInfo" | "tool"
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

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {}
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
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    name_uz?: SortOrder
    name_ru?: SortOrder
    name_en?: SortOrder
    createdAt?: SortOrder
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
  }

  export type LevelUncheckedCreateInput = {
    id?: string
    name_uz: string
    name_ru: string
    name_en: string
    createdAt?: Date | string
  }

  export type LevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_uz?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    name_en?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type RegionCreateNestedOneWithoutUserInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput
    connect?: RegionWhereUniqueInput
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