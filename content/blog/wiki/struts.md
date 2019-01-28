# Struts


Use Mesage Resources to handle multiple languages and to avoid hard coding text.
http://www.systemmobile.com/articles/strutsMessageResources.html

Use BeanUtils CopyProperties and CopyProperty to populate form beans from business beans and vice versa.




### BeanUtils
Transferring data between tiers can prove a pain, particularly having to check for null values and converting to the appropriate type.  Fortunatley Jakarta provide two useful methods that will look after this for you:

  CopyProperties(Object dest, Object src)

  CopyProperty(Object dest, String field, Object value);