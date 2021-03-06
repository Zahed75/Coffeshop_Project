from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Appointment_Booking)
admin.site.register(Booking)
admin.site.register(Detail)
admin.site.register(Discover_story)
admin.site.register(Service)
admin.site.register(Discover_menu)


# admin.site.register(Best_selling_product)

@admin.register(Best_selling_product)
class Best_selling_productModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'product_name', 'product_price')


admin.site.register(Customer_saying)
admin.site.register(Blogs)
admin.site.register(About_us)
admin.site.register(Our_service)
admin.site.register(Comment)
admin.site.register(CartItem)
admin.site.register(CartSubTotal)
admin.site.register(Temp_cart)
