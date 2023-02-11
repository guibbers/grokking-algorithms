import random

def get_random_number():
    return random.randint(0, 101)

def create_random_array(size):
    random_array = []
    for i in range(1, size):
        random_number = get_random_number()
        if random_number in random_array:
            get_random_number()
        else:
            random_array.append(random_number)
    return random_array

unsorter_array = create_random_array(10)
print(f'random array: {unsorter_array}')

def search_the_smallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selection_sort(arr):
    new_arr = []
    for i in range(len(arr)):
        smallest = search_the_smallest(arr)
        new_arr.append(arr.pop(smallest))
    return new_arr

print(f'Sorted array: {selection_sort(unsorter_array)}')
