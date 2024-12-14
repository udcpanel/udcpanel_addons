// Function to calculate the total, VAT, and tax due
function calculateTotal() {
    // Get the values entered by the user for Tax and Due
    var tax = parseFloat(document.querySelector('input[name="tax"]').value) || 0;
    var due = parseFloat(document.querySelector('input[name="due"]').value) || 0;

    // Calculate the subtotal (Tax + Due)
    var subtotal = tax + due;

    // Calculate VAT (15% of the subtotal)
    var vat = subtotal * 0.15;

    // Calculate the total (Subtotal) without including VAT
    var total = subtotal;

    // Set the values for VAT, total, and the in-word field
    document.querySelector('input[name="vat"]').value = vat.toFixed(2);  // VAT
    document.querySelector('input[name="total"]').value = total.toFixed(2);  // Total without VAT

    // Convert the total to words (in Bengali) and display it in the 'inword' field
    var inWords = convertNumberToWords(total);
    document.querySelector('input[name="inword"]').value = inWords;
}

// Convert number to words (Bengali language)
function convertNumberToWords(num) {
    var ones = ['', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়'];
    var tens = ['', '', 'দশ', 'বিশ', 'ত্রিশ', 'চল্লিশ', 'পঞ্চাশ', 'ষাট', 'সত্তর', 'আশি', 'নব্বই'];
    var thousands = ['', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়'];

    // If the number is zero
    if (num === 0) return "শূন্য টাকা";

    var words = [];

    // Convert the number into Bengali words
    if (num >= 1000) {
        words.push(thousands[Math.floor(num / 1000)] + " হাজার");
        num %= 1000;
    }

    if (num >= 100) {
        var hundreds = Math.floor(num / 100);
        if (hundreds > 0) {
            words.push(ones[hundreds] + " শত");
        }
        num %= 100;
    }

    if (num >= 20) {
        words.push(tens[Math.floor(num / 10)]);
        num %= 10;
    }

    if (num > 0) {
        words.push(ones[num]);
    }

    words.push("টাকা");

    return words.join(" ");
}

// Attach the function to the input fields
document.querySelector('input[name="tax"]').addEventListener('input', calculateTotal);
document.querySelector('input[name="due"]').addEventListener('input', calculateTotal);
