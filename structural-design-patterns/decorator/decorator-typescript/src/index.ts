const split = (
  targetClass: any, // target class
  propertyKey: string, // name of the method
  descriptor: PropertyDescriptor //  we have a special object
) => {
  const originalFn = descriptor.value;

  descriptor.value = function (...args: any[]) {
    args[0] = args[0].split("");
    // use apply because I need to keep the original scope of the function
    originalFn.apply(this, args);
  };
};

const reverseStr = (
  targetClass: any, // target class
  propertyKey: string, // name of the method
  descriptor: PropertyDescriptor //  we have a special object
) => {
  const originalFn = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [args0] = args;
    const reversedArg0 = args0.reverse();

    // use apply because I need to keep the original scope of the function
    originalFn.apply(this, [reversedArg0]);
  };
};

const join = (
  targetClass: any, // target class
  propertyKey: string, // name of the method
  descriptor: PropertyDescriptor //  we have a special object
) => {
  const originalFn = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [args0] = args;
    const reversedArg0 = args0.join("");

    // use apply because I need to keep the original scope of the function
    originalFn.apply(this, [reversedArg0]);
  };
};

class StringManager {
  @split
  @reverseStr
  @join
  print(str: string): void {
    //SPLIT
    //REVERSE
    //JOIN
    console.log(str);
  }
}

const stringManager = new StringManager();
stringManager.print("javito");

// if I want to customize the join function with a character for example we can use a decorator factor.
// high order functions

const joinFactory = (separator: string) => {
  return (
    targetClass: any, // target class
    propertyKey: string, // name of the method
    descriptor: PropertyDescriptor //  we have a special object
  ) => {
    const originalFn = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const [args0] = args;
      const reversedArg0 = args0.join(separator);

      // use apply because I need to keep the original scope of the function
      originalFn.apply(this, [reversedArg0]);
    };
  };
};

class StringManagerCustomized {
  @split
  @reverseStr
  @joinFactory("_")
  print(str: string): void {
    //SPLIT
    //REVERSE
    //JOIN
    console.log(str);
  }
}

const stringManagerCustomized = new StringManagerCustomized();
stringManagerCustomized.print("javito");
