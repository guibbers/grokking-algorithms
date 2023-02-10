import random

lst = list(range(0, 101))
chosen_item = random.choice(lst)
print(f"Shhh! The chosen item is {chosen_item - 1}")


def binary_search(list, item):
    low = 0
    high = len(list) -1
    print(high)

    while low <= high:
        middle = (low + high) // 2
        guess = (list[middle])
        if guess == item:
            return middle
        if guess > item:
            high = middle - 1
        else:
            low = middle + 1
    return None

print(f"Found it! It's:{binary_search(lst, chosen_item - 1)}")
