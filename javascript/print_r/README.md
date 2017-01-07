# Known Issues

Using this to print an HTML element due to its references to parent nodes. It causes an infinite loop and will crash the browser.

# Examples

## Sample Objects

``` javascript

var arr = [
	"Value 0",
	"This is value 1",
	"This is value 2"
];
var obj = {
	key: "this key value",
	otherKey: "this other key value",
	obj: {
			fkey: "First Key",
			lkey: "Last Key",
			t: "<div class=\"test\">"
			},
	myarr:arr
};
```

## Test 1

### Input

``` javascript
print_r(obj);
```

### Output

```
Array
(
    [key] => this key value
    [otherKey] => this other key value
    [obj] => Array
        (
            [fkey] => First Key
            [lkey] => Last Key
            [t] => 

        )

    [myarr] => Array
        (
            [0] => Value 0
            [1] => This is value 1
            [2] => This is value 2
        )

)
```

## Test 2

### Input

``` javascript
print_r(arr);
```

### Output

```
Array
(
    [0] => Value 0
    [1] => This is value 1
    [2] => This is value 2
)
```

## Test 1 fixing HTML tags

### Input

``` javascript
print_r(obj, true);
```

### Output

```
Array
(
    [key] => this key value
    [otherKey] => this other key value
    [obj] => Array
        (
            [fkey] => First Key
            [lkey] => Last Key
            [t] => <div class="test">
        )

    [myarr] => Array
        (
            [0] => Value 0
            [1] => This is value 1
            [2] => This is value 2
        )

)
```
